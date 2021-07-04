import React from 'react';
import footerX from '../../img/footerX.png';
import SubFooter from './SubFooter';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#000000',
    color: '#ffffff',
    // maxHeight: '2em',
    // position: 'absolute',
    bottom: 0,
    margin: 'auto',
    marginTop: '2em',
    padding: '2em',
    align: 'center',
    opacity: .7
  },
  // alignFooter: {
  //   textAlign: "left",
  //   display: 'inline-block'
  // }
  // footerImg: {
  //   marginBottom: -100,
  //   position: 'relative',
  //   overflow: 'hidden',
  //   display: 'block'
  // },
  // footerImg: {
  //   backgroundImage: `url(${footerX})`,
  //   backgroundPosition: 'center',
  // backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat'
  // }
}));

function Footer() {

  const classes = useStyles();

  return (
    <>
          {/* <AppBar position="relative" className={classes.root}> */}

      <Grid container inverted className={classes.root}>
        <Grid item lg={4} md={4} sm={4} xs={12} align='center' className={classes.alignFooter}>
          <Grid item>
            <h4 className="ui inverted header">Services</h4>
            <div className="ui inverted link list">
            <a href="#" className="item">Banana Pre-Order</a>
            <a href="#" className="item">DNA FAQ</a>
            <a href="#" className="item">How To Access</a>
            <a href="#" className="item">Favorite X-Men</a>
          </div>
          </Grid>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12} align='center' className={classes.alignFooter}>
          <Grid item>
            <h4 className="ui inverted header">Services</h4>
            <div className="ui inverted link list">
            <a href="#" className="item">Banana Pre-Order</a>
            <a href="#" className="item">DNA FAQ</a>
            <a href="#" className="item">How To Access</a>
            <a href="#" className="item">Favorite X-Men</a>
          </div>
          </Grid>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12} align='center' className={classes.alignFooter}>
          <Grid item>
            <h4 className="ui inverted header">Contact</h4>
            <div className="ui inverted link list">
            <a href="#" className="item">Banana Pre-Order</a>
            <a href="#" className="item">DNA FAQ</a>
            <a href="#" className="item">How To Access</a>
            <a href="#" className="item">Favorite X-Men</a>
          </div>
          </Grid>
        </Grid>
      </Grid>
      {/* <SubFooter /> */}
      {/* </AppBar> */}






      {/* <div className="ui inverted vertical footer segment">
        <div className="ui container">
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="three wide column">
              <h4 className="ui inverted header">About</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">Sitemap</a>
                <a href="#" className="item">Contact Us</a>
                <a href="#" className="item">Religious Ceremonies</a>
                <a href="#" className="item">Gazebo Plans</a>
              </div>
            </div>

            <div className="three wide column">
          <h4 className="ui inverted header">Services</h4>
          <div className="ui inverted link list">
            <a href="#" className="item">Banana Pre-Order</a>
            <a href="#" className="item">DNA FAQ</a>
            <a href="#" className="item">How To Access</a>
            <a href="#" className="item">Favorite X-Men</a>
          </div>
        </div>

        <div className="seven wide column">
          <h4 className="ui inverted header">Footer Header</h4>
          <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
        </div>
        
          </div>
        </div>
      </div> */}
      {/* <img src={footerX} alt='Yellow X' /> */}
    </>
  );
}

export default Footer;


