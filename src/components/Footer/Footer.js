import React from 'react';
import yellowX from '../../img/yellowX.png';
import SubFooter from './SubFooter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  shadowBoxImage: {
    
  }
}));

function Footer() {

  const classes = useStyles();

  return (
    <>
      <img src={yellowX} alt='Yellow X' />
      <SubFooter />
    </>
  );
}

export default Footer;


