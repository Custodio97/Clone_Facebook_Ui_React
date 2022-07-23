import React from 'react'
import * as C from './style'
import will from '../../images/will.png'
import { AiFillVideoCamera } from 'react-icons/ai'
import { IoMdPhotos } from 'react-icons/io'
import { BiHappyAlt } from 'react-icons/bi'
const NewPost = () => {
  return (
      <C.Container>
      <C.Content>
        <C.HeaderNewPost>
          <C.ProfileImg src={will} />
          <C.InputNewPost type='text' placeholder='What on your mind,Gabriel?' />
          
        </C.HeaderNewPost>  
        <C.Divider />
        <C.ContentIcons>
          <div>
            <AiFillVideoCamera color="#e73f5a" />
            <p >Live video</p>
          </div>
          <div>
            <IoMdPhotos color="#41b35d" />
            <p>Photo/video</p>
          </div>
          <div>
            <BiHappyAlt color='#eab026' />
            <p>Feeling/activity</p>
          </div>
        </C.ContentIcons>
       
      </C.Content>
    </C.Container>
  )
}

export default NewPost