'use client';

import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';

export default function RecipeActions() {
    return (
        <div style={{width: '18em', marginLeft: 'auto'}}>
            <Button
                variant="outlined"
                startIcon={<AddIcon />}
                sx={{
                    borderColor: '#e31837',
                    color: '#2d2926',
                    '&:hover': {
                        borderColor: '#c41230',
                        backgroundColor: 'rgba(227, 24, 55, 0.04)',
                    },
                    marginRight: '.5em'
                }}
            >
                SAVE RECIPE
            </Button>
            <Button
                variant="outlined"
                startIcon={<PrintIcon />}
                sx={{
                    borderColor: '#e31837',
                    color: '#2d2926',
                    '&:hover': {
                        borderColor: '#e31837',
                        backgroundColor: 'rgba(45, 41, 38, 0.04)',
                    }
                }}
            >
                PRINT
            </Button>
        </div>
    );
} 