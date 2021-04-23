import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'

export default function Logo() {
  const preventDefault = (event) => event.preventDefault()

  return (
    <>
      <Typography
        letterSpacing={20}
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
        display="block"
      >
        <Box letterSpacing={10} display="block">
          <Link
            href="#"
            onClick={preventDefault}
            color="inherit"
            style={{ color: '#000000' }}
          >
            merch
          </Link>
        </Box>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          paragraph
          display="block"
        >
          <Box fontSize={12} letterSpacing={10}>
            ALL THE STUFF YOU WANT
          </Box>
        </Typography>
      </Typography>
    </>
  );
}