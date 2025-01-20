'use client';

import { Stack, Typography, Link } from '@mui/material';
import React from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <Stack direction="row" spacing={1} sx={{ mb: 4, color: 'black' }}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Link 
            href={item.href} 
            underline="hover" 
            color="inherit" 
            fontWeight={600}
          >
            {item.label}
          </Link>
          {index < items.length - 1 && (
            <Typography color="#ca758d">›</Typography>
          )}
        </React.Fragment>
      ))}
    </Stack>
  );
} 