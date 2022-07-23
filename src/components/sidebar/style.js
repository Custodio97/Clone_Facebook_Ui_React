import styled from "styled-components";

export const Container = styled.div`
max-width: 300px;
width: 17%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 1rem;
margin-right: 1rem;
gap: 20px;

@media (max-width:825px) {
    display: none;
}
`

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const DivProfile = styled.div`
display: flex;
align-items: center;
margin-right: 35px;
`
export const ProfileImg = styled.img`
width: 25px;
height: 25px;
border-radius:50%;
cursor: pointer;
margin: 0 13px;
`
export const LabelProfile = styled.label`
font-size: 20px;
font-weight:normal;

`