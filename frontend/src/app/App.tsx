import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingChatButton } from './components/FloatingChatButton';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => {
    setIsChatOpen(true);
    window.setTimeout(() => {
      document.getElementById('chat-launch-target')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 0);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingChatButton onClick={openChat} />
      <main>
        <Hero isChatOpen={isChatOpen} onOpenChat={openChat} />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
