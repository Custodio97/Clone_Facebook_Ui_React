import styled from "styled-components";


export const Container = styled.div`
max-width: 300px;
width: 90%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: absolute;
top: 2rem;
right: 10rem;


@media (max-width:1000px) {
    display: none;
}
`

export const Header = styled.header`

display: flex;
justify-content: space-between;

height: 20px;
width: 50%;

   p{
    font-size: 15px;
    color: #606266;
    margin-right: 10px;
    font-weight: lighter;
}
> div{
    display: flex;
  
> svg{
   width: 20px;
   height: 20px;
   color: #606266;
   margin-right:15px;
}
}
`

export const Content = styled.div`
height: ;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`