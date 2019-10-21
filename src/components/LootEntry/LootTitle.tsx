import React from 'react';
import './LootEntry.css';

interface LootTitleProps {
  children?: any;
  quality?: string;
  href?: string;
}

const LootTitle = ({
  children = null,
  quality = 'common',
  href = '',
}: LootTitleProps) => {
  return (
    <a className={`loot-entry-title text-${quality.toLowerCase()}`} href={href}>
      {children}
    </a>
  );
};

export default LootTitle;
