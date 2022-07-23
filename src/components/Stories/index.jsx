import React from 'react'
import * as C from './style'
import will from '../../images/will.png'
import bill from '../../images/bill.jpg'
import elon from '../../images/elon.jpg'
import bezos from '../../images/bezos.jpg'
import mark  from '../../images/mark.jpg'
const Stories = () => {
  return (
      <C.Container>
      <C.Card>
        <C.profileImg src={will} />
        <C.ImgCard src={will} />
      </C.Card>
      <C.Card>
        <C.profileImg src={bill} />
        <C.ImgCard src={bill} />
      </C.Card>
      <C.Card>
        <C.profileImg src={bezos} />
        <C.ImgCard src={bezos} />
      </C.Card>
      <C.Card>
        <C.profileImg src={elon} />
        <C.ImgCard src={elon} />
      </C.Card>
      <C.Card>
        <C.profileImg src={mark} />
        <C.ImgCard src={mark} />
      </C.Card>
    </C.Container>
  )
}

export default Stories