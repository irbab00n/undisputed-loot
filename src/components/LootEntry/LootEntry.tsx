import React from 'react';
import './LootEntry.css';

import Column from '../Column';
import LootTitle from './LootTitle';
import LootItemLevel from './LootItemLevel';

interface LootEntryProps {
  [key: string]: any;
  entry?: any;
}

const LootEntry = ({ entry = {} }: LootEntryProps) => {
  return (
    <Column className="loot-entry-container">
      <LootTitle quality={entry.item.quality.type}>{entry.item.name}</LootTitle>
      <LootItemLevel>{entry.item.level}</LootItemLevel>
    </Column>
  );
};

export default LootEntry;
