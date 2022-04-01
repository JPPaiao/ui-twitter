import styled from 'styled-components'
import { Search } from '../../icons/icons'

export const Container = styled.div`
    display: none;

    @media (min-width: 1000px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        position: sticky;
        top: 0;
        left: 0;
        width: min(360px, 100%);
        overflow-y: auto;
    }

`

export const SearchBox = styled.div`
    width: min(360px, 100%);
    padding: 10px 24px;

    background-color: var(--primary);
    position: fixed;
    top: 0;
    z-index: 2;
    max-height: 65px;
`

export const SearchInput = styled.input`
    background-color: var(--search);
    color: var(--whi);
    border-radius: 20px;
    border: 0;

    padding: 0 10px 0 52px;
    width: 100%;
    height: 39px;

    font-size: 14px;

    position: relative;
    outline: 0;


    &::placeholder {
        color: var(--cin);
    }

    ~ svg {
        position: relative;
        top: -33px;
        left: 15px;
        z-index: 1;

        transition: 100ms ease-in-out;
    }

    &:focus {
        border: 1px solid var(--tt);

        ~ svg {
            fill: var(--tt);
        }
    }
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;

    padding: 57px 24px 200px;
    margin-top: 10px;

    > section + section {
        margin-top: 15px;
    }
`

export const SearchIcon = styled(Search)`
    width: 27px;
    height: 27px;

    fill: var(--cin);
`
