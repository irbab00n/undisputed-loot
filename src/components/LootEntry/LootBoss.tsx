import React from 'react';
import './LootEntry.css';

interface LootBossProps {
  raid?: string;
  boss?: string;
}

const LootBoss = ({ raid = '', boss = '' }: LootBossProps) => {
  return (
    <div>
      <h4 className="loot-entry-text text-common">
        <span className="text-tooltip">Raid: </span>
        {`${raid}`}
      </h4>
      <h4 className="loot-entry-text text-common">
        <span className="text-tooltip">Boss: </span>
        {`${boss}`}
      </h4>
    </div>
  );
};

export default LootBoss;
