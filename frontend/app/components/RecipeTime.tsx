'use client';

import { Stack, Box, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface TimeInfo {
  label: string;
  duration: string;
}

interface RecipeTimeProps {
  times: TimeInfo[];
}

export default function RecipeTime({ times }: RecipeTimeProps) {
  return (
    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
      <AccessTimeIcon sx={{ color: 'black', fontSize: '3rem' }} />
      {times.map((time) => (
        <Box key={time.label}>
          <Typography variant="overline" color="black">
            {time.label}
          </Typography>
          <Typography 
            color="black" 
            fontWeight={600}
            sx={{
              minWidth: '8em'
            }}
          >
            {time.duration}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
} 