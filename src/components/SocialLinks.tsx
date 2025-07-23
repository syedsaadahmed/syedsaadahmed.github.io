import { Github, Linkedin, FileText, HelpCircle, Key, Briefcase } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/syedsaadahmed',
    username: '@syedsaadahmed'
  },
  {
    name: 'LinkedIn', 
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/syed-saad-ahmed-460256100/?originalSubdomain=pk',
    username: '/in/syed-saad-ahmed-460256100/'
  },
  {
    name: 'Medium',
    icon: FileText,
    url: 'https://thesaadahmed.medium.com/',
    username: '@thesaadahmed'
  },
  {
    name: 'Stack Overflow',
    icon: HelpCircle,
    url: 'https://stackoverflow.com/users/6422740/saad',
    username: 'saad'
  },
  {
    name: 'Public Key',
    icon: Key,
    url: 'https://keybase.io/syedsaadahmed20',
    username: 'keybase.io/syedsaadahmed20'
  },
  {
    name: 'XING',
    icon: Briefcase,
    url: 'https://www.xing.com/profile/SyedSaad_Ahmed2',
    username: 'SyedSaad_Ahmed2'
  }
];

const SocialLinks = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
        ~/connect
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {socialLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link group flex items-center space-x-3 p-3 rounded border border-border hover:border-primary/50 transition-all duration-300"
            >
              <IconComponent className="w-5 h-5" />
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium">{link.name}</div>
                <div className="text-xs text-muted-foreground truncate">
                  {link.username}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;