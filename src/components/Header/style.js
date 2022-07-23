import styled from "styled-components";

export const Header = styled.header`
width: 100%;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
border-bottom:  2px solid #e6e8ea;
background-color: #ffffff;

`


export const Content = styled.section`
 max-width: 1300px;
 width: 100%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: space-between;
`

export const Section = styled.section`
display: flex;

gap: 6px;
 
 svg{
    width: 25px;
    height: 25px;
    color: #65676b;
    &:hover{
        opacity: 0.9;
        transition-duration: 0.8s;
    }
 }


&.section1{
    align-items: center;
    justify-content: flex-start;
    max-width: 320px;
    width: 100%;
    padding: 0 12px;
    
    > svg{
        
        color: #65676b;

    }
}

&.section2{
    max-width: 470px;
    width: 100%;
     > svg{
       
        margin: 30px;
        cursor: pointer;
        &.home{
          color: #1b74e4;
          
        }
    }
   @media (max-width:825px) {
      display: none;
   }
    
}

&.section3{
    justify-content: flex-end;
     margin: 0  14px;
     > svg{
       
        margin: 0  14px;
        cursor: pointer;
     }
}
`

export const DivSearch = styled.div`
width: 100%;
display: flex;
align-items:center;
justify-content: center;
background-color: #f0f2f5;
padding: 5px 8px;
border-radius: 50px;
margin: 0 10px;

`
export const Input = styled.input`
background: none;
outline: none;
border: none;
padding:10px 14px;
margin: 0;
font-size: 15px;
width: 100%;

`

export const Image = styled.img`
width: 30px; 
height: 30px;
border-radius: 50%;
cursor: pointer;
&:hover{
    opacity: 0.9;
}
`

