import { useState, useEffect } from 'react';

interface TerminalPromptProps {
  user?: string;
  host?: string;
  command?: string;
}

const TerminalPrompt = ({ 
  user = 'sre', 
  host = 'portfolio', 
  command = 'whoami' 
}: TerminalPromptProps) => {
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= command.length) {
        setDisplayedCommand(command.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [command]);

  return (
    <div className="font-mono text-sm mb-8">
      <div className="flex items-center space-x-1">
        <span className="text-accent">[</span>
        <span className="text-primary">{user}</span>
        <span className="text-muted-foreground">@</span>
        <span className="text-secondary">{host}</span>
        <span className="text-muted-foreground">~</span>
        <span className="text-accent">]</span>
        <span className="text-muted-foreground">$</span>
        <span className="text-foreground ml-2">
          {displayedCommand}
          {showCursor && <span className="terminal-cursor" />}
        </span>
      </div>
    </div>
  );
};

export default TerminalPrompt;