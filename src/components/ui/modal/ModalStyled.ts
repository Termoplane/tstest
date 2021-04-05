import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    top: 0px;
    width: 100vw;
    height: 100vh;
    background-color: #565656bf;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalWindow = styled.div`
    position: absolute;
    border: 1px solid rgb(204, 204, 204);
    background: rgb(255, 255, 255);
    overflow: auto;
    border-radius: 4px;
    outline: none;
    padding: 20px;
    top: 200px;
`