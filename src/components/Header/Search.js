import React from 'react'
import { Input } from 'semantic-ui-react'

export default function Search() {
  return (
    <>
      <Input
        // action={{ color: 'blue', content: 'Search' }}
        icon="search"
        iconPosition="right"
        placeholder="Search"
      />
    </>
  )
}