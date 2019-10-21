import React from 'react';
import './LootEntry.css';

import Column from '../Column';
import LootHeader from './LootHeader';
import LootTitle from './LootTitle';
import LootItemLevel from './LootItemLevel';

interface LootEntryProps {
  [key: string]: any;
  entry?: any;
}

const LootEntry = ({ entry = {} }: LootEntryProps) => {
  return (
    <Column className="loot-entry-container">
      <LootHeader
        iconURL={entry.item.media.assets[0].value}
        recipient={entry.recipient}
      />
      <LootTitle quality={entry.item.quality.type}>{entry.item.name}</LootTitle>
      <LootItemLevel>{entry.item.level}</LootItemLevel>
    </Column>
  );
};

export default LootEntry;
