import React from 'react';
import './Loot.css';

import Page from '../components/Page';
import LootEntry from '../components/LootEntry/LootEntry';

import lootHistory from '../lib/loot-history-10242019.json';

const Loot = () => (
  <Page pageID="loot-page">
    {lootHistory.map((entry: any) => (
      <LootEntry entry={entry} />
    ))}
    <span className="author-cred">{`Made by Sarc`}</span>
  </Page>
);

export default Loot;
