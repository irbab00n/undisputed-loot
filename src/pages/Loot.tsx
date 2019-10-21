import React from 'react';
import './Loot.css';

import Page from '../components/Page';
import LootEntry from '../components/LootEntry/LootEntry';

import mockHistory from '../lib/mock-history.json';

const Loot = () => (
  <Page pageID="loot-page">
    {mockHistory.map((entry: any) => (
      <LootEntry entry={entry} />
    ))}
  </Page>
);

export default Loot;
