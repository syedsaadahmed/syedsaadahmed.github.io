import { useState, useEffect } from 'react';
import MatrixBackground from '@/components/MatrixBackground';
import TerminalPrompt from '@/components/TerminalPrompt';
import StatusCard from '@/components/StatusCard';
import SocialLinks from '@/components/SocialLinks';

const Index = () => {
  const [uptime, setUptime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Calculate uptime
  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
      const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
      setUptime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <MatrixBackground />
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        <br></br>
        <br></br>
        <div className="max-w-6xl mx-auto">
          {/* Terminal Prompt */}
          <TerminalPrompt />
          
          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold glow-text mb-4 animate-pulse-glow">
              thesaadahmed dot com
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Senior Restart Engineer
            </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
              </p>
              <p className="text-primary text-base md:text-lg">
                But sometimes, <span className="text-accent">"Have you tried turning it off and on again?"</span> is not enough.
              </p>              
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatusCard 
              title="Status" 
              value="Online" 
              status="online"
              icon="🟢"
            />
            <StatusCard 
              title="Uptime" 
              value={`${uptime.days}d ${uptime.hours}h ${uptime.minutes}m ${uptime.seconds}s`}
              status="online"
              icon="⏱️"
            />
            <StatusCard 
              title="Response SLA" 
              value="24-48 hours" 
              status="critical"
              icon="☕"
            />
          </div>

          {/* Bio/Quote Section */}
          {/* <div className="text-center mb-12 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
                I try to keep things up and running.
              </p>
              <p className="text-primary text-base md:text-lg">
                Because apparently, <span className="text-accent">"have you tried turning it off and on again?"</span> is not always enough.
              </p>
            </div>
          </div> */}

          {/* Social Links */}
          <SocialLinks />

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              <span className="text-primary">$</span> echo "But, I guess it was working on my system!" 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
