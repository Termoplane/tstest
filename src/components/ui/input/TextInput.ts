import styled from "styled-components";

export const TextInput = styled.input`
    font-size: 20px;
    font-weight: bold;
    outline: none;
    border: none;
    border-bottom: 1px solid #a3a3a3;
    &:focus {
        border-bottom: 2px solid #a9d85f;
    }
`