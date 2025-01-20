import {
    Box,
    Typography,
    Breadcrumbs,
    Link,
    AppBar,
    Toolbar,
    Button,
    Container,
    Grid,
    Card,
    CardMedia,
    Stack,
    Divider,
    CardContent,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PrintIcon from '@mui/icons-material/Print';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

// Styled components
const StyledAppBar = styled(AppBar)({
    backgroundColor: 'white',
    color: 'black',
    boxShadow: 'none',
    borderBottom: '1px solid #eee',
});

const NavLink = styled(Link)({
    color: 'inherit',
    textDecoration: 'none',
    padding: '20px',
    '&:hover': {
        color: '#e31837',
    },
});

const SubNav = styled(Box)({
    borderBottom: '1px solid #eee',
    padding: '10px 0',
});

const StyledCard = styled(Card)({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'translateY(-4px)',
        cursor: 'pointer',
    },
});

const StyledCardMedia = styled(CardMedia)({
    paddingTop: '56.25%', // 16:9 aspect ratio
});

export default function RecipePage() {
    return (
        <Box>
            {/* Main Navigation */}
            <StyledAppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 0 }}>
                        {/* Replace with your logo */}
                        <img src="/logo.png" alt="Logo" style={{ height: 50 }} />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                        <NavLink href="#">SHOP</NavLink>
                        <NavLink href="#" sx={{ borderBottom: '2px solid #e31837' }}>RECIPES</NavLink>
                        <NavLink href="#">LEARN</NavLink>
                        <NavLink href="#">ABOUT</NavLink>
                        <NavLink href="#">BLOG</NavLink>
                    </Box>
                </Toolbar>
            </StyledAppBar>

            {/* Sub Navigation */}
            <SubNav>
                <Container>
                    <Stack direction="row" spacing={3}>
                        <Link href="#" underline="none" color="inherit">CATEGORIES</Link>
                        <Link href="#" underline="none" color="inherit">COLLECTIONS</Link>
                        <Link href="#" underline="none" color="inherit">RESOURCES</Link>
                    </Stack>
                </Container>
            </SubNav>

            {/* Breadcrumbs */}
            <Container sx={{ py: 2 }}>
                <Breadcrumbs separator="›">
                    <Link href="#" underline="hover" color="inherit">RECIPES</Link>
                    <Link href="#" underline="hover" color="inherit">BREAD</Link>
                    <Link href="#" underline="hover" color="inherit">QUICK BREAD</Link>
                </Breadcrumbs>

                {/* Main Content */}
                <Grid container spacing={4} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" component="h1" gutterBottom>
                            Whole-Grain Banana Bread
                        </Typography>

                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                            This one-bowl banana bread — our 2018 Recipe of the Year — uses the simplest ingredients,
                            but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours
                            (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly?
                            No one can tell, it's that good! And not only is this bread delicious — it's versatile.
                        </Typography>

                        {/* Time Information */}
                        <Grid container spacing={4} sx={{ mb: 4 }}>
                            <Grid item xs={4}>
                                <Typography variant="overline" display="block">PREP</Typography>
                                <Typography variant="body1">10 mins</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="overline" display="block">BAKE</Typography>
                                <Typography variant="body1">1 hr to 1 hr 15 mins</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="overline" display="block">TOTAL</Typography>
                                <Typography variant="body1">1 hr 10 mins</Typography>
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 4 }} />

                        {/* Yield */}
                        <Box sx={{ mb: 4 }}>
                            <Typography variant="overline" display="block">YIELD</Typography>
                            <Typography variant="body1">1 loaf, 12 generous servings</Typography>
                        </Box>

                        {/* Action Buttons */}
                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="contained"
                                startIcon={<BookmarkAddIcon />}
                                sx={{
                                    bgcolor: '#e31837',
                                    '&:hover': { bgcolor: '#c41230' }
                                }}
                            >
                                SAVE RECIPE
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<PrintIcon />}
                            >
                                PRINT
                            </Button>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card elevation={2}>
                            <CardMedia
                                component="img"
                                height="500"
                                image="/banana-bread.jpg" // Replace with your image
                                alt="Whole Grain Banana Bread"
                                sx={{ objectFit: 'cover' }}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export function RecipesPage() {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Breadcrumbs */}
            <Breadcrumbs separator="›" sx={{ mb: 4 }}>
                <Link href="#" underline="hover" color="inherit">RECIPES</Link>
            </Breadcrumbs>

            {/* Header */}
            <Typography variant="h3" component="h1" gutterBottom>
                Recipes
            </Typography>

            {/* Filters */}
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ mb: 4 }}
            >
                <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel>Category</InputLabel>
                    <Select
                        defaultValue=""
                        label="Category"
                    >
                        <MenuItem value="">All Categories</MenuItem>
                        <MenuItem value="bread">Bread</MenuItem>
                        <MenuItem value="cakes">Cakes</MenuItem>
                        <MenuItem value="cookies">Cookies</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel>Collection</InputLabel>
                    <Select
                        defaultValue=""
                        label="Collection"
                    >
                        <MenuItem value="">All Collections</MenuItem>
                        <MenuItem value="quick">Quick & Easy</MenuItem>
                        <MenuItem value="seasonal">Seasonal Favorites</MenuItem>
                        <MenuItem value="popular">Most Popular</MenuItem>
                    </Select>
                </FormControl>
            </Stack>

            {/* Recipe Grid */}
            <Grid container spacing={4}>
                {/* Recipe Card 1 */}
                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <StyledCardMedia
                            image="/banana-bread.jpg"
                            title="Whole-Grain Banana Bread"
                        />
                        <CardContent>
                            <Typography
                                variant="overline"
                                component="div"
                                color="text.secondary"
                            >
                                QUICK BREAD
                            </Typography>
                            <Typography variant="h6" component="h2">
                                Whole-Grain Banana Bread
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our 2018 Recipe of the Year
                            </Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>

                {/* Recipe Card 2 */}
                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <StyledCardMedia
                            image="/sourdough.jpg"
                            title="Classic Sourdough Bread"
                        />
                        <CardContent>
                            <Typography
                                variant="overline"
                                component="div"
                                color="text.secondary"
                            >
                                SOURDOUGH
                            </Typography>
                            <Typography variant="h6" component="h2">
                                Classic Sourdough Bread
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Traditional artisan bread
                            </Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>

                {/* Recipe Card 3 */}
                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <StyledCardMedia
                            image="/chocolate-cake.jpg"
                            title="Classic Chocolate Cake"
                        />
                        <CardContent>
                            <Typography
                                variant="overline"
                                component="div"
                                color="text.secondary"
                            >
                                CAKES
                            </Typography>
                            <Typography variant="h6" component="h2">
                                Classic Chocolate Cake
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Perfect for any celebration
                            </Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>

                {/* Add more recipe cards as needed */}
            </Grid>
        </Container>
    );
} 