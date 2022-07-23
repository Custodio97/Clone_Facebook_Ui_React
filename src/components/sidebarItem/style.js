import styled from "styled-components";


export const Container = styled.div`
width: 98%;
display: flex;
align-items: center;
gap: 15px;
font-size: 20px;
margin: 12px 0;
overflow-x: hidden;
cursor: pointer;
text-overflow:ellipsis;
&:hover{
    opacity: 0.9;
}
> svg{
   width: 25px;
   height: 25px;
   color: #0d88f0;
}
`