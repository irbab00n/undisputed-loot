import React from 'react';
import './LootEntry.css';

interface LootLinkProps {
  className?: string;
  href?: string;
}

const LootLink = ({ className = '', href = '' }: LootLinkProps) => {
  return (
    <a href={href} className={`text-tooltip ${className}`} target="_blank">
      View on WoWHead
    </a>
  );
};

export default LootLink;
