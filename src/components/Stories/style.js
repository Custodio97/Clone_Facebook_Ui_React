import styled from "styled-components";


export const Container = styled.div`
max-width: 500px;
width: 100%;
display: flex;

`

export const Card = styled.div`
width: 300px;
height:200px;
background-color: gray;
border-radius: 16px;
display: flex;
margin-right:6px;
align-self: center;
justify-content: center;
position: relative;
cursor: pointer;
&:hover{
    opacity: 0.9;
    transform: translateY(-1px);
}

@media (max-width:1000px) and (min-width:280px) {
    width: 60px;
    height: 100px;
}
`
export const ImgCard = styled.img`
width: 100%;
height: inherit;
border-radius: 16px;

`
export const profileImg = styled.img`
position: absolute;
width: 25px;
height: 25px;
border: 1px solid #0d88f0;
border-radius: 50%;
top:.80rem;
left:.80rem;
`