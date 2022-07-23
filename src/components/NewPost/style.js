import styled from "styled-components";


export const Container = styled.div`
max-width: 420px;
margin-top: 1.5rem;
width: 100%;
height: 150px;
display: flex;
align-items: center;
justify-content: center;

border-radius: 16px;
background-color: #ffffff;
border: 1px solid #ccc;
`

export const Content = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const HeaderNewPost = styled.header`
width: 100%;
height: 30px;
display: flex;
align-items:center;
justify-content: center;
`

export const InputNewPost = styled.input`
background-color: none;
border: none;
outline: none;
padding: .60rem;
width: 90%;
background-color: #f0f2f5;
font-size: 1.1rem;
border-radius: 16px;
`
export const ProfileImg = styled.img`
width: 30px;
height: 30px;
border-radius:50% ;
`

export const Divider = styled.div`
width: 100%;
margin-top: 1rem;
border: 1px solid #ccc;
`

export const ContentIcons = styled.div`
display: flex;
align-items:center;
justify-content: center;

width: 100%;
cursor: pointer;
> div{

    display: flex;
    align-items: center;
    font-weight: 500;
    margin-right: 1rem;
    p{
        font-size: 13px;
    }
  svg{
    width: 26px;
    margin-right: 1rem;
    height: 26px;
    
}
}

`