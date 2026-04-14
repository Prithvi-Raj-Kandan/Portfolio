import { Mail, Github, Linkedin, Twitter, FileText } from 'lucide-react';

const resumeLink = 'https://docs.google.com/document/d/1sEdg8TYNvI-zLko_-n6TE91kB5lJsJeO/edit?usp=sharing&ouid=115934568900446986471&rtpof=true&sd=true';

export function Contact() {
  const socialLinks = [
    { icon: <Github size={24} />, href: 'https://github.com/Prithvi-Raj-Kandan', label: 'GitHub' },
    { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/p-prithvi-raj-kandan-a687602a1/', label: 'LinkedIn' },
    { icon: <Twitter size={24} />, href: 'https://x.com/PrithviRaj1213', label: 'X' }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            If you want to collaborate, ask a question, or discuss an opportunity, I'm happy to hear from you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8 text-gray-700">
            <Mail className="text-gray-400" />
            <span>prithviraj82rt@gmail.com</span>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                {link.icon}
              </a>
            ))}

            <a
              href={resumeLink}
              target="_blank"
              rel="noreferrer"
              className="h-12 px-4 bg-black text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
            >
              <FileText size={20} />
              <span className="text-sm">View Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
