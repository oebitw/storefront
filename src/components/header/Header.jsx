import { AppBar, Typography, Toolbar, Link, Grid } from '@material-ui/core/';
import Cart from '../cart/Cart';



function Header() {
  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="h5" color="inherit" noWrap>
            <Link color="inherit" href="/">
              OUR STORE
            </Link>
          </Typography>
          <Cart />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
