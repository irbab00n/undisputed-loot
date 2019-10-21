import React from 'react';
import './LootEntry.css';

import LootTitle from './LootTitle';

interface LootIconProps {
  quality?: string;
  iconURL?: string;
  name?: string;
}

const LootIcon = ({ quality = '', iconURL = '', name = '' }: LootIconProps) => {
  return <img src={iconURL} className="loot-entry-icon" />;
};

export default LootIcon;
