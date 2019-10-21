import React from 'react';
import './LootEntry.css';

interface LootTitleProps {
  children?: any;
  quality?: string;
}

const LootTitle = ({ children = null, quality = 'common' }: LootTitleProps) => {
  return (
    <h4 className={`loot-entry-text text-${quality.toLowerCase()}`}>
      {children}
    </h4>
  );
};

export default LootTitle;
