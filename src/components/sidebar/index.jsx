import React from 'react'
import * as C from './style'
import { MdHome } from 'react-icons/md'
import { GoMegaphone } from 'react-icons/go'
import { BsFacebook } from 'react-icons/bs'
import { MdGroups } from 'react-icons/md'
import { AiFillShop } from 'react-icons/ai'
import { BsPlayBtnFill } from 'react-icons/bs'
import { MdTimer } from 'react-icons/md'
import { BsSave2Fill } from 'react-icons/bs'
import { BiCalendarStar } from 'react-icons/bi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import SidebarItem from '../sidebarItem'
import will from '../../images/will.png'
const Sidebar = () => {
  return (
    <C.Container>
      <C.Content>
        <C.DivProfile>
          <C.ProfileImg src={will} />
          <C.LabelProfile>Gabriel </C.LabelProfile>
        </C.DivProfile>
        <SidebarItem Icon={MdHome} Title="Home" />
        <SidebarItem Icon={GoMegaphone} Title="Ad Center" />
        <SidebarItem Icon={BsFacebook} Title="Welcome" />
        <SidebarItem Icon={MdGroups} Title="Groups" />
        <SidebarItem Icon={AiFillShop} Title="MarketPlace" />
        <SidebarItem Icon={BsPlayBtnFill} Title="Watch" />
        <SidebarItem Icon={MdTimer} Title="Memories" />
        <SidebarItem Icon={BsSave2Fill} Title="Saved" />
        <SidebarItem Icon={BiCalendarStar} Title="Events" />
        <SidebarItem Icon={MdOutlineKeyboardArrowDown} Title=" See more" />
      </C.Content>
    </C.Container>
  )
}

export default Sidebar