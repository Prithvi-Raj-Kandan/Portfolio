import { Code2, Palette, Zap } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my priority.'
    },
    {
      icon: <Palette size={32} />,
      title: 'Evolvable Features',
      description: 'Building modular features that can evolve quickly as user needs and product goals change.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Fast Shipping',
      description: 'Shipping practical solutions quickly with a strong focus on reliability and iteration speed.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm an undergrad student in my pre-final year, BE in AIML, who loves building AI systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-black text-white rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
          <h3 className="text-3xl mb-6">My Journey</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              I started my journey back in 2023, when I joined my undergrad.
            </p>
            <p>
              Driven by passion and curiosity on the developments in the field of AI and Computer Science technologies, I equipped myself with necessary skills in order to bring to life the ideas that I have.
            </p>
            <p>
              My approach combines technical expertise with creative problem-solving. I believe that great design and development go hand in hand, and I'm always exploring new technologies and techniques to deliver the best possible solutions.
            </p>
            <p>
              Since then I have been building projects, working as an intern, attending conferences, and getting better at being an AI engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
