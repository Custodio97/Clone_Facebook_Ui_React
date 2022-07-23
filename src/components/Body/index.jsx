import React from 'react'
import Contacts from '../Contacts'


import Feed from '../Feed'
import Sidebar from '../sidebar'
import * as C from './style' 
const Body = () => {
  return (
    <C.Container>
      <Sidebar />
  
      <Feed />
      <Contacts/>
    </C.Container>
  )
}

export default Body