'use client';

import { Box, Typography, Stack, Toolbar, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import SubNavigation from '../components/SubNavigation';
import BreadcrumbNav from '../components/BreadcrumbNav';
import { breadcrumbItems } from '../constants/breadcrumbs';
import RecipeHeader from '../components/RecipeHeader';
import RecipeTime from '../components/RecipeTime';
import RecipeActions from '../components/RecipeActions';
import { timeInfo } from '../constants/timeinfo';
import NavTabs from '../components/NavTabs';
import { navItems } from '../constants/navigation';
import { StyledAppBar } from '../components/StyledAppBar';
import { useState } from 'react';

export default function BreadPage() {
  const [value, setValue] = useState(navItems[0].path);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box style={{ position: 'relative' }}>
      <Box
        component="img"
        src="./logo.jpg"
        alt="monkey"
        width={160}
        height='auto'
        sx={{
          position: 'absolute',
          top: 0,
          left: '10%',
          zIndex: 10
        }}
      />
      <Container sx={{ py: 4 }} style={{ maxWidth: '85%', paddingLeft: '2em' }}>
        <StyledAppBar position="static" sx={{ borderBottom: 'none' }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              <NavTabs
                items={navItems}
                value={value}
                onChange={handleChange}
              />
            </Box>
          </Toolbar>
        </StyledAppBar>

        <SubNavigation />

        <Grid container spacing={4} sx={{ marginRight: '2em' }}>
          <Grid size={5} offset={1}>
            <BreadcrumbNav items={breadcrumbItems} />
            <RecipeHeader
              title="Whole-Grain Banana Bread"
              description="This one-bowl banana bread — our 2018 Recipe of the Year — uses the simplest ingredients,
              but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours
              (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly?
              No one can tell, it's that good! And not only is this bread delicious — it's versatile."
            />

            <RecipeTime times={timeInfo} />

            <hr />

            <Stack direction="row" spacing={1} sx={{ mb: 4, mt: 2 }}>
              <PaletteOutlinedIcon sx={{ color: 'black', fontSize: '3rem' }} />
              <Box sx={{ mb: 4, width: 'auto' }}>
                <Typography variant="overline" color="black">YIELD</Typography>
                <Typography color="black" fontWeight={600}>1 loaf, 12 generous servings</Typography>
              </Box>
              <RecipeActions />
            </Stack>
          </Grid>

          <Grid size={6}>
            <Box
              component="img"
              src="./banana-bread.jpg"
              alt="Whole Grain Banana Bread"
              sx={{
                width: '100%',
                height: 'auto',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
