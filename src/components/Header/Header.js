import React from 'react'
import Promo from './Promo'
import Logo from './Logo'
import Search from './Search'
import DropdownMenu from './DropdownMenu'
import CartAccess from './CartAccess'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(3, 0, 6),
  },
  gridItemMainNav: {
    padding: theme.spacing(2),
    textAlign: 'center',
    margin: 'auto',
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <>
      <Promo />
      <div className={classes.heroContent}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} sm={3} xs={12}>
              <Grid item className={classes.gridItemMainNav}>
                <DropdownMenu />
              </Grid>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Grid item className={classes.gridItemMainNav}>
                <Logo />
              </Grid>
            </Grid>
            <Grid item lg={4} md={4} sm={3} xs={12}>
              <Grid item className={classes.gridItemMainNav}>
                <Grid item>
                  <Search />
                </Grid>
                <Grid item>
                  <CartAccess />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}
