import styled from "styled-components";

const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
`

const MainLayoutContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 50px 230px;
    width: 100%;
    background-color: #f6f6f6;
    height: 100%;
`

export { MainLayout, MainLayoutContent }