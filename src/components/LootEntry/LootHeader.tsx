import React from 'react';
import './LootEntry.css';

interface LootHeaderProps {
  recipient?: string;
  iconURL?: string;
}

const LootHeader = ({ recipient = '', iconURL = '' }: LootHeaderProps) => {
  return (
    <div className="loot-entry-header">
      <img src={iconURL} />
      <h4 className="text-tooltip">{recipient}</h4>
    </div>
  );
};

export default LootHeader;
