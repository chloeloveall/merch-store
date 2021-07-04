import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#000000',
    color: '#ffffff',
    maxHeight: '2em',
    position: 'absolute',
    bottom: 0,
  },
  title: {
    flexGrow: 1,
    margin: 'auto',
    padding: '.25em',
  },
  linkStyle: {
    color: 'inherit',
  },
}))

export default function SubFooter() {
  const classes = useStyles()

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <p className={classes.title}>
          COPYRIGHT &copy;{' '}
          <a
            className={classes.linkStyle}
            href="mailto: chloeloveall@protonmail.com"
          >
            CHLOE LOVEALL
          </a>{' '}
          2021
        </p>
      </AppBar>
    </>
  )
}
