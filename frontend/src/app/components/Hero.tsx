import { ArrowDown } from 'lucide-react';
import { ChatInterface } from './ChatInterface';

export function Hero() {
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
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                Chat with my AI
              </button>
            </div>
          </div>

          {/* Right: Chat Interface */}
          <div className="hidden lg:block">
            <ChatInterface />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
}
