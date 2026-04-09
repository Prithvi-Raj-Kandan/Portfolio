import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'LogGuard',
      description: 'A reliability-focused logging and monitoring utility to track, audit, and debug system behavior efficiently.',
      image: 'https://opengraph.githubassets.com/1/Prithvi-Raj-Kandan/LogGuard',
      tags: ['Python', 'Observability', 'Backend'],
      liveUrl: 'https://log-guard-silk.vercel.app/',
      githubUrl: 'https://github.com/Prithvi-Raj-Kandan/LogGuard'
    },
    {
      id: 2,
      title: 'Hotel_Receptionist',
      description: 'An AI-powered receptionist workflow for hospitality use cases, focused on automation and guest-facing interactions.',
      image: 'https://opengraph.githubassets.com/1/Prithvi-Raj-Kandan/Hotel_Receptionist',
      tags: ['AI', 'Automation', 'Assistant'],
      githubUrl: 'https://github.com/Prithvi-Raj-Kandan/Hotel_Receptionist'
    },
    {
      id: 3,
      title: 'ProductionRAG',
      description: 'A production-style Retrieval-Augmented Generation pipeline built for robust, context-grounded AI responses.',
      image: 'https://opengraph.githubassets.com/1/Prithvi-Raj-Kandan/ProductionRAG',
      tags: ['RAG', 'LLM', 'Vector Search'],
      liveUrl: 'https://production-rag-two.vercel.app/',
      githubUrl: 'https://github.com/Prithvi-Raj-Kandan/ProductionRAG'
    },
    {
      id: 4,
      title: 'MS-Excel-MCP-Server',
      description: 'An MCP server integration that enables AI-assisted workflows for Microsoft Excel operations and automation tasks.',
      image: 'https://opengraph.githubassets.com/1/Prithvi-Raj-Kandan/MS-Excel-MCP-Server',
      tags: ['MCP', 'Excel', 'AI Tooling'],
      githubUrl: 'https://github.com/Prithvi-Raj-Kandan/MS-Excel-MCP-Server'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent AI-focused projects. Scroll horizontally to explore more.
          </p>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group min-w-[320px] md:min-w-[420px] lg:min-w-[460px] snap-start"
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live</span>
                    </a>
                  )}
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
