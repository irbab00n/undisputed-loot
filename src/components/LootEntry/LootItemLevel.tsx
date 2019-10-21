import React from 'react';
import './LootEntry.css';

interface LootItemLevelProps {
  children?: any;
}

const LootItemLevel = ({ children = null }: LootItemLevelProps) => {
  return (
    <h4 className="loot-entry-text text-tooltip">{`Item Level ${children}`}</h4>
  );
};

export default LootItemLevel;
