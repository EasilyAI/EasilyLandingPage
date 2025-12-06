import React from 'react';
import { Bot, Search, Workflow, BarChart3, Database, Globe2 } from 'lucide-react';

export const IconMap = ({ name, className }) => {
  const icons = {
    Bot: <Bot className={className} />,
    Search: <Search className={className} />,
    Workflow: <Workflow className={className} />,
    BarChart3: <BarChart3 className={className} />,
    Database: <Database className={className} />,
    Globe2: <Globe2 className={className} />
  };
  return icons[name] || null;
};

