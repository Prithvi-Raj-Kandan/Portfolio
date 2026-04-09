import { ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-gray-600">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl">
                Alex Morgan
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700">
                Creative Developer & Designer
              </p>
            </div>
            <p className="text-lg text-gray-600 max-w-xl">
              I craft beautiful digital experiences with a focus on user-centric design and clean code. 
              Passionate about creating innovative solutions that make a difference.
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
                Get in Touch
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzU2ODg1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Alex Morgan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400 rounded-2xl -z-10"></div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
}
