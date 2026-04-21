import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ApiMessage {
  role?: string;
  type?: string;
  content?: unknown;
}

const API_BASE_URL =
  (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, '') ||
  'http://localhost:8000';

const extractTextFromContent = (content: unknown): string => {
  if (typeof content === 'string') {
    return content.trim();
  }

  if (Array.isArray(content)) {
    const parts = content
      .map((item) => {
        if (typeof item === 'string') return item.trim();
        if (item && typeof item === 'object') {
          const value = (item as Record<string, unknown>).text ?? (item as Record<string, unknown>).content;
          return typeof value === 'string' ? value.trim() : '';
        }
        return '';
      })
      .filter(Boolean);

    return parts.join('\n').trim();
  }

  if (content && typeof content === 'object') {
    const value = (content as Record<string, unknown>).text ?? (content as Record<string, unknown>).content;
    return typeof value === 'string' ? value.trim() : '';
  }

  return '';
};

const extractAssistantReply = (data: any): string => {
  const directOutput = extractTextFromContent(data?.response?.output);
  if (directOutput) return directOutput;

  const rawMessages: ApiMessage[] =
    data?.raw_response?.messages ?? data?.response?.messages ?? [];

  for (let i = rawMessages.length - 1; i >= 0; i -= 1) {
    const message = rawMessages[i];
    const role = String(message?.role ?? message?.type ?? '').toLowerCase();
    if (role.includes('assistant') || role.includes('ai')) {
      const text = extractTextFromContent(message?.content);
      if (text) return text;
    }
  }

  for (let i = rawMessages.length - 1; i >= 0; i -= 1) {
    const text = extractTextFromContent(rawMessages[i]?.content);
    if (text) return text;
  }

  return 'I encountered an issue processing your question. Could you rephrase it?';
};

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'assistant',
      content: "Hi! I'm Asta, Prithvi's AI assistant. Ask me anything about Prithvi's projects, experience, or skills."
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  // Only scroll when receiving assistant messages, not on every message change
  useEffect(() => {
    if (messages.length > 1 && messages[messages.length - 1].role === 'assistant') {
      // Use setTimeout to ensure DOM is updated before scrolling
      setTimeout(() => scrollToBottom(), 0);
    }
  }, [messages.length]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Connect to backend API endpoint
      const response = await fetch(
        `${API_BASE_URL}/chat?user_input=${encodeURIComponent(input)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (!response.ok) {
        throw new Error('api limit reached, try after some time');
      }

      const data = await response.json();
      
      const assistantContent = extractAssistantReply(data);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: assistantContent
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'api limit reached, try after some time'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="w-full h-[500px] bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-200 p-4">
        <h3 className="font-semibold text-gray-900">Asta</h3>
        <p className="text-sm text-gray-500">AI Assistant</p>
      </div>

      {/* Messages Container */}
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.role === 'user'
                  ? 'bg-black text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-900 rounded-bl-none'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap break-words">
                {message.content}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg rounded-bl-none">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
