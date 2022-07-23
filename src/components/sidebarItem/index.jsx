import React from 'react'
import * as C from './style'
const SidebarItem = ({Icon,Title}) => {
  return (
      <C.Container>
          <Icon />
          {Title}
    </C.Container>
  )
}

export default SidebarItem