import React from 'react';
import './LootEntry.css';

import LootTitle from './LootTitle';

interface LootHeaderProps {
  quality?: string;
  iconURL?: string;
  name?: string;
}

const LootHeader = ({
  quality = '',
  iconURL = '',
  name = '',
}: LootHeaderProps) => {
  return (
    <div className="loot-entry-header">
      <img src={iconURL} />
      <LootTitle quality={quality}>{name}</LootTitle>
    </div>
  );
};

export default LootHeader;
