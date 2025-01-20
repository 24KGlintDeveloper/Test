'use client';

import { Stack, Box } from '@mui/material';

export default function SubNavigation() {
    const navItems = ['CATEGORIES', 'COLLECTIONS', 'RESOURCES'];
    
    return (
        <Stack
            direction="row"
            spacing={1}
            sx={{
                mb: 4,
                mt: '1em',
                backgroundColor: '#f8f5f0',
                pl: '13%'
            }}
        >
            {navItems.map((item) => (
                <Box
                    key={item}
                    sx={{
                        fontWeight: 'bold',
                        color: '#2d2926',
                        padding: '1em',
                        cursor: 'pointer'
                    }}
                >
                    {item}
                </Box>
            ))}
        </Stack>
    );
} 