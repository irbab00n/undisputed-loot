import React from 'react';
import './Column.css';

interface ColumnProps {
  [key: string]: any;
  children?: any;
  className?: string;
}

const Column = ({ children = null, className = '' }: ColumnProps) => {
  return <div className={`column ${className}`}>{children}</div>;
};

export default Column;
