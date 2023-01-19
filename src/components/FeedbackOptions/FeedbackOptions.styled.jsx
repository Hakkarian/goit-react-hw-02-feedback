import styled from "@emotion/styled";

export const FeedbackButtonCss = styled.button`

    min-width: 100px;
    padding: 5px;

    background-color: black;
    color: yellow;
    border: none;
    outline: none;
    border-radius: 5px;

    transition: color 250ms linear, background-color 250ms linear;

    &:hover, &:focus {
        color: black;
        background-color: yellow;
    }
`

export const FeedbackUlCss = styled.ul`
    display: flex;
    gap: 20px;
`