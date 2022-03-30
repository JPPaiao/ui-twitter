import styled, { css } from 'styled-components'

const Botao = styled.button`
    background-color: ${
        props => props.primary
        ? css`transparent`
        : css`var(--tt)`
    };
    color: ${
        props => props.primary
        ? css`var(--tt)`
        : css`var(--whi)`
    };
    border: ${
        props => props.primary
        ? css`2px solid var(--tt)`
        : css`none`
    };

    border-radius: 15px;
    padding: 5px;
    text-align: center;
    outline: 0;
    cursor: pointer;

    &:hover {
        background-color: ${
            props => props.primary
            ? css`var(--houver-dark)`
            : css`var(--houver-light)`
        };
    }
`

export default Botao
