'use client';

import { Tab } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTab = styled(Tab)({
    color: 'inherit',
    padding: '20px',
    '&:hover': {
        color: '#e31837',
    },
    '&.Mui-selected': {
        color: '#e31837',
    },
}); 