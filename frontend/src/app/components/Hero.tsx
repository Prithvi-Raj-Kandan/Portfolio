import { ArrowDown } from 'lucide-react';
import { ChatInterface } from './ChatInterface';

type HeroProps = {
  isChatOpen: boolean;
  onOpenChat: () => void;
};

export function Hero({ isChatOpen, onOpenChat }: HeroProps) {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Hero Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-gray-600">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl">
                Prithvi Raj Kandan
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700">
                AI Engineer
              </p>
            </div>
            <p className="text-lg text-gray-600 max-w-xl">
              I build cool and reliable AI systems.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={scrollToAbout}
                className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Learn More
              </button>
              <button 
                onClick={onOpenChat}
                className="px-8 py-3 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                Chat with my AI
              </button>
            </div>
          </div>

          {/* Right: Chat Interface */}
          <div id="chat-launch-target" className="w-full lg:block">
            {isChatOpen ? (
              <ChatInterface />
            ) : (
              <button
                type="button"
                onClick={onOpenChat}
                className="w-full h-[420px] lg:h-[500px] rounded-2xl border border-dashed border-gray-300 bg-white/80 backdrop-blur-sm shadow-sm flex flex-col items-center justify-center text-center px-8 hover:border-black hover:bg-white transition-colors"
              >
                <span className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">AI Chat</span>
                <h2 className="text-3xl mb-3">Open the assistant</h2>
                <p className="text-gray-600 max-w-sm">
                  Start a conversation to explore my background, projects, or experience.
                </p>
              </button>
            )}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
}
