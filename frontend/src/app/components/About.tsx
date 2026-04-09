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
      title: 'Creative Design',
      description: 'Bringing ideas to life with beautiful and intuitive user interfaces.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Fast Performance',
      description: 'Optimizing for speed and performance across all devices.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm a passionate developer with 5+ years of experience in creating 
            web applications that users love.
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
              I started my journey in web development back in 2019, driven by a passion for 
              creating beautiful and functional digital experiences. Over the years, I've had 
              the privilege of working with startups, agencies, and established companies.
            </p>
            <p>
              My approach combines technical expertise with creative problem-solving. I believe 
              that great design and development go hand in hand, and I'm always exploring new 
              technologies and techniques to deliver the best possible solutions.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source projects, 
              writing technical articles, or exploring new design trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
