import { connect } from 'react-redux';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  makeStyles,
} from '@material-ui/core/';
import { increment, getRemoteData } from '../../store/actions';
import { useEffect } from 'react';

const api = 'https://run.mocky.io/v3/bcde1e2a-7ecb-4a4b-ba70-eabf8891dc8b';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Products = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.getRemoteData(api);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {props.products.display.length > 0
          ? props.products.display.map((product) => {
              return (
                <Grid item key={product._id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={product.url}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography>Price: ${product.price}</Typography>
                      <Typography>
                        {product.inStock > 0
                          ? `In stock, ${product.inStock} items left`
                          : 'Out of Stock'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => props.increment(product)}
                        disabled={product.inStock > 0 ? false : true}
                      >
                        ADD TO CART
                      </Button>
                      <Button size="small" color="primary">
                        VIEW DETAILS
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
          : props.products.products.map((product) => {
              return (
                <Grid item key={product._id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={product.url}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography>Price: ${product.price}</Typography>
                      <Typography>
                        {product.inStock > 0
                          ? `In stock, ${product.inStock} items left`
                          : 'Out of Stock'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => props.increment(product)}
                        disabled={product.inStock > 0 ? false : true}
                      >
                        ADD TO CART
                      </Button>
                      <Button size="small" color="primary">
                        VIEW DETAILS
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({ products: state.products });
const mapDispatchToProps = { increment, getRemoteData };
export default connect(mapStateToProps, mapDispatchToProps)(Products);