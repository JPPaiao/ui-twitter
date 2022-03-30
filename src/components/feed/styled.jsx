import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Tab = styled.div`
    color: var(--tt);
    border-bottom: 3px solid var(--tt);

    margin-top: 10px;
    padding: 5px;
    width: 100%;

    font-size: 1em;
    font-weight: bold;
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: var(--houver-dark);
    }
`

export const Tweets = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    border-left: 1px solid var(--out);
    border-right: 1px solid var(--out);
`
