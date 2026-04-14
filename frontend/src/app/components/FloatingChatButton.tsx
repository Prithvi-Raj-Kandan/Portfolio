import { MessageCircleMore } from 'lucide-react';

type FloatingChatButtonProps = {
  onClick: () => void;
};

export function FloatingChatButton({ onClick }: FloatingChatButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open chat"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-black text-white shadow-lg shadow-black/20 flex items-center justify-center hover:scale-105 hover:bg-gray-800 transition-all"
    >
      <MessageCircleMore size={24} />
    </button>
  );
}