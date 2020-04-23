import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// eslint-disable-next-line
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FrontPageLayout from './FrontPageLayout';




const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function FrontPage(props) {
  const { classes } = props;

  return (
    <FrontPageLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      {/* <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" /> */}
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Servicios Integrales de Salud del Magdalena
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Su salud en buenas manos.
      </Typography>
     {/*  <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/premium-themes/onepirate/sign-up/"
      >
        Register
      </Button> */}
      {/* <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography> */}
    </FrontPageLayout>
  );
}

FrontPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FrontPage);