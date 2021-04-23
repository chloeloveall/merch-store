import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#EAFF00',
    color: '#000000',
    maxHeight: '2em',
    position: 'fixed'
  },
  title: {
    flexGrow: 1,
    margin: 'auto',
    padding: '.25em',
    fontWeight: 'bold'
  }
}));

export default function Promo() {

  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <p className={classes.title}>FREE SHIPPING ON ALL ORDERS!</p>
      </AppBar>
    </>
  );
}