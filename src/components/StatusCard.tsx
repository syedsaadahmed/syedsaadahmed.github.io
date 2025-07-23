interface StatusCardProps {
  title: string;
  value: string;
  status?: 'online' | 'warning' | 'critical';
  icon?: string;
}

const StatusCard = ({ title, value, status = 'online', icon }: StatusCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'online': return 'text-primary';
      case 'warning': return 'text-accent';
      case 'critical': return 'text-destructive';
      default: return 'text-primary';
    }
  };

  const getStatusDot = () => {
    switch (status) {
      case 'online': return 'bg-primary';
      case 'warning': return 'bg-accent';
      case 'critical': return 'bg-destructive';
      default: return 'bg-primary';
    }
  };

  return (
    <div className="status-card group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-muted-foreground text-xs uppercase tracking-wider">
          {title}
        </span>
        {icon && <span className="text-lg">{icon}</span>}
      </div>
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${getStatusDot()} animate-pulse`} />
        <span className={`font-semibold ${getStatusColor()}`}>
          {value}
        </span>
      </div>
    </div>
  );
};

export default StatusCard;