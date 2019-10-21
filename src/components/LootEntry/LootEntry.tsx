import React from 'react';
import './LootEntry.css';

import Column from '../Column';
import LootIcon from './LootIcon';
import LootBoss from './LootBoss';
import LootTitle from './LootTitle';
import LootLink from './LootLink';
import LootItemLevel from './LootItemLevel';

interface LootEntryProps {
  [key: string]: any;
  entry?: any;
}

const LootEntry = ({ entry = {} }: LootEntryProps) => {
  return (
    <Column className="loot-entry-container">
      <div className="loot-entry-layout">
        <LootIcon
          quality={entry.item.quality.type}
          iconURL={entry.item.media.assets[0].value}
          name={entry.item.name}
        />
        <div>
          <LootTitle quality={entry.item.quality.type}>
            {entry.item.name}
          </LootTitle>
          {/* <LootItemLevel>{entry.item.level}</LootItemLevel> */}
          <LootBoss raid={entry.zone} boss={entry.boss} />
        </div>
      </div>
      <LootLink
        href={`https://classic.wowhead.com/item=${entry.item_id}`}
        className="wowhead-link"
      />
    </Column>
  );
};

export default LootEntry;
