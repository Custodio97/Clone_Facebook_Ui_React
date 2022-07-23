import React from 'react'
import * as C from './style'

const ContactsItem = ({Img,Title}) => {
  return (
      <C.Container>
          <C.ProfileImg src={Img} />
      <C.Label>{Title}</C.Label>
    </C.Container>
  )
}

export default ContactsItem