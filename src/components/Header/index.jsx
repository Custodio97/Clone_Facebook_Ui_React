import React from 'react'
import {
    BsFacebook,
   
    BsMessenger,
} from 'react-icons/bs'
import { BiSearch} from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { MdGroups } from 'react-icons/md'
import { CgMenuGridO } from 'react-icons/cg'
import { MdOutlineNotifications } from 'react-icons/md'
import will from '../../images/will.png'
import * as C from './style'
const Header = () => {
  return (
    <C.Header>
      <C.Content>
        <C.Section className='section1'>
          <BsFacebook color='#0778e9' />
          <C.DivSearch>
            <BiSearch />
            <C.Input type='text' placeholder='Search Facebok' />
          </C.DivSearch>
        </C.Section>
        <C.Section className='section2'>
          <AiFillHome className='home'/>
          <FaUserFriends />
          <MdGroups/>
        </C.Section>
        <C.Section className='section3'>
          <CgMenuGridO />
          <BsMessenger />
          <MdOutlineNotifications />
          <C.Image src={will} />
        </C.Section>
      </C.Content>
    </C.Header>
  )
}

export default Header