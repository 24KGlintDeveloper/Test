'use client';

import { Tabs } from '@mui/material';
import { StyledTab } from './StyledTab';
import { NavItem } from '../types/navigation';
import { useRouter } from 'next/navigation';

interface NavTabsProps {
  items: NavItem[];
  value: string;
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
}

export default function NavTabs({ items, value, onChange }: NavTabsProps) {
  const router = useRouter();

  return (
    <Tabs
      TabIndicatorProps={{
        style: {
          backgroundColor: '#e31837',
        }
      }}
      style={{ paddingLeft: '10%' }}
      value={value}
      onChange={onChange}
    >
      {items.map((item) => (
        <StyledTab 
          key={item.path}
          label={item.label}
          value={item.path}
        />
      ))}
    </Tabs>
  );
} 