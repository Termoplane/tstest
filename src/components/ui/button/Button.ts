import styled from 'styled-components'

type Props = {
    small?: boolean,
    big?: boolean
}

export const UiButton = styled.button`
    padding: ${(p: Props) => p.small ? "13px 30px" : p.big ? "18px 40px" : "18px 40px" };
    font-size: ${(p: Props) => p.small ? "13px" : p.big ? "16px" : "16px" };
    font-weight: bold;
    border-radius: 6px;
    box-shadow: 0px 0px 0px 3px #a9d85f;
    background: transparent;
    border: none;
    color: #ffffff;
    margin-right: ${(p: Props) => p.small ? "17px" : p.big ? "30px" : "30px" };
    &:hover {
        background: #a9d85f;
        cursor: pointer;
    }
`