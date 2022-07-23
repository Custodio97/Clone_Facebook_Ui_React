import styled from "styled-components";


export const Container = styled.div`
margin-top: 1.5rem;
max-width: 450px;
width: 100%;
flex-direction: column;
background-color: #ffffff;
border-radius:16px;
padding: 25px;
`
export const HeaderContent = styled.div`
width: 100%;
height: auto;
flex-direction: column;
height: 30px;

> div{
    display: flex;
    p{
        margin: 0 16px;
    }

}
`
export const Desc = styled.div`
width: 100%;
height: auto;
font-size:16px;

`
export const Divider = styled.div`
border: 1px solid #ccc;
width: 100%;
`
export const ProfileIcons = styled.img`
width: 22px;
height: 22px;
border-radius:50%;
cursor: pointer;
p{
    font-size: 14px;
}
`
export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const ImgProfile = styled.img`
width: 100%;
height: auto;
`