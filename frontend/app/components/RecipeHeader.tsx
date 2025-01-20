'use client';

import { Typography } from '@mui/material';

interface RecipeHeaderProps {
    title: string;
    description: string;
}

export default function RecipeHeader({ title, description }: RecipeHeaderProps) {
    return (
        <>
            <Typography
                variant="h3"
                color="black"
                fontWeight={600}
                sx={{ pb: '2em' }}
            >
                {title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                {description}
            </Typography>
        </>
    );
} 