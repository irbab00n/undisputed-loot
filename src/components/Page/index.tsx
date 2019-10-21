import React from 'react';
import './Page.css';

interface PageProps {
  [key: string]: any;
  children?: any;
  className?: string;
  pageID?: any;
}

const Page = ({ children = null, className = '', pageID = '' }: PageProps) => {
  return (
    <div className={`page ${className}`}>
      <div id={pageID} className="inner-wrapper">
        {children}
      </div>
    </div>
  );
};

export default Page;
