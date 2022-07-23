import React from 'react'
import will from '../../images/will.png'
import React1 from '../../images/React2.png'
import * as C from './style'
const Posts = () => {
  return (
      <C.Container>
          <C.HeaderContent>
              <div>
                  <C.ProfileIcons src={will} />
                  <p>Gabriel</p>
              </div>
          </C.HeaderContent>
          <C.Desc>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus inventore veritatis tempore! Autem maiores labore in aperiam harum consequuntur iure esse porro, reiciendis quod commodi reprehenderit amet aspernatur accusamus quis?</p>
          </C.Desc>
          <C.Divider/>
          <C.Content>
              <C.ImgProfile src={React1} />
          </C.Content>
    </C.Container>
  )
}

export default Posts