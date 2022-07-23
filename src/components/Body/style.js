import styled from "styled-components";
export const Container = styled.div`
display: flex;
align-items:center;
max-width: 1500px;
width: 100%;
gap: 20px;
height: calc(100vh - 50px);
position: relative;


@media (max-width:825px){
    gap: 0;
}

`