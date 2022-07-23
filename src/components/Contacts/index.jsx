import React from 'react'
import * as C from './style'
import ContactsItem from '../ContactsItem'
import { AiFillVideoCamera } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { FiMoreHorizontal } from 'react-icons/fi'
import bill from '../../images/bill.jpg'
import elon from '../../images/elon.jpg'
import bezos from '../../images/bezos.jpg'
import mark from '../../images/mark.jpg'
const Contacts = () => {
  return (
      <C.Container>
          <C.Header>
              <p>Contacts</p>
              <div>
                  <AiFillVideoCamera />
                  <FiSearch />
                  <FiMoreHorizontal/>
              </div>
      </C.Header>
      <C.Content>
        <ContactsItem Img={bill} Title="Bill Gates" />
        <ContactsItem Img={elon} Title="Elon Musk" />
        <ContactsItem Img={bezos} Title="Jeff Bezos" />
        <ContactsItem Img={mark} Title="Mark Z" />
        <ContactsItem Img={bill} Title="Bill Gates" />
        <ContactsItem Img={elon} Title="Elon Musk" />
        <ContactsItem Img={bezos} Title="Jeff Bezos" />
        <ContactsItem Img={mark} Title="Mark Z" />
       </C.Content>
    </C.Container>
  )
}

export default Contacts