import React from 'react';
import './LootEntry.css';

interface LootBossProps {
  raid?: string;
  boss?: string;
}

const LootBoss = ({ raid = '', boss = '' }: LootBossProps) => {
  return (
    <div className="loot-entry-zone-data">
      <h4 className="text-common">
        <span className="loot-entry-label text-tooltip">Raid: </span>
        {`${raid}`}
      </h4>

      <h4 className="text-common">
        <span className="loot-entry-label text-tooltip">Boss: </span>
        {`${boss}`}
      </h4>
    </div>
  );
};

export default LootBoss;
