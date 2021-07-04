import { Typography, Link, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  footer: {
    color: 'white',
    backgroundColor: 'grey',
    padding: theme.spacing(5),
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" color="inherit" align="center" gutterBottom>
        
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="inherit"
        component="p"
      >
        <Link color="inherit" href="mailto:storefront@codefellows.com">storefront@codefellows.com</Link>
      </Typography>
      <Typography variant="body2" color="inherit" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          OE
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
}

export default Footer;