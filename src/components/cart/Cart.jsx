import { connect } from 'react-redux';

import {
  Button,
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  Grid,
  Divider,
  makeStyles,
} from '@material-ui/core';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { increment, show, decrement } from '../../store/actions';

const useStyles = makeStyles({
  list: {
    width: 300,
  },
});

const SimpleCart = (props) => {
  const classes = useStyles();
  let display = props.cart.display || [];
  return (
    <>
      <Button color="inherit" onClick={() => props.show(!props.cart.show)}>
        <Box
          display="flex"
          width={130}
          height={50}
          borderRadius={7}
          alignItems="center"
          justifyContent="center"
          justify="center"
        >
          <ShoppingCartOutlinedIcon />{' '}
          <Typography variant="h6" gutterBottom mx={3}>
            cart ({props.cart.count})
          </Typography>
        </Box>
      </Button>
      <Drawer
        anchor="right"
        open={props.cart.show}
        onClose={() => props.show(false)}
      >
        <List className={classes.list}>
          <ListItem>
            <Grid
              container
              alignItems="center"
              justify="center"
              wrap="wrap"
              spacing={2}
            >
              <Typography variant="h4">Cart</Typography>
            </Grid>
          </ListItem>
          <Divider />
          {display.map((product) => {
            return (
              <ListItem key={product._id}>
                <Grid
                  container
                  alignItems="center"
                  justify="space-between"
                  wrap="wrap"
                  spacing={2}
                >
                  <Typography variant="h6">
                    <strong>{product.name}</strong> ({product.count + 1})
                  </Typography>
                  <DeleteOutlinedIcon onClick={() => props.decrement(product)}/>
                </Grid>
              </ListItem>
            );
          })}
          <Divider />
        </List>
      </Drawer>
    </>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart });
const mapDispatchToProps = { increment, show, decrement };
export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);