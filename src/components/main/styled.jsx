import styled, { css } from 'styled-components'
import { ArrowLeft, Home, Search, Notifications, Email  } from '../../icons/icons'

export const ContMain = styled.main`
    display: flex;
    flex-direction: column;

    width: min(601px, 100%);

    @media (min-width: 500px) {
        border-left: 1px solid var(--out);
        border-right: 1px solid var(--out);
    }
`
export const Head = styled.header`
    background-color: var(--primary);
    position: sticky;
    top: 0;
    z-index: 2;
    text-align: left;

    padding: 8px 0 9px 13px;
    border-bottom: 1px solid var(--out);

    display: flex;
    align-items: center;

    > button {
        padding: 8px;
        border-radius: 50%;
        outline: 0;
        cursor: pointer;
    }

    &:hover {
        background-color: var(--hover-dark);
    }

`

export const BackIcon = styled(ArrowLeft)`
    width: 24px;
    height: 24px;

    fill: var(--tt);
`

export const ProfileInfo = styled.div`
    margin-left: 17px;
    display: flex;
    flex-direction: column;

    > strong {
        font-size: 19px;
    }
    > span {
        font-size: 15px;
        color: var(--cin);
    }
    `

export const BottonMenu = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;

    background-color: var(--primary);
    width: 100%;
    padding: 8px min(46px, max(10vw, 10px));
    border-top: 1px solid var(--out);

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 500px) {
        display: none;
    }
`
const iconsCss = css`
    width: 31px;
    height: 31px;
    fill: var(--cin);
    cursor: pointer;

    &:hover,
    &:active {
        fill: var(--tt);
    }
`

export const HomeIcon = styled(Home)`
    ${iconsCss}
`

export const SearchIcon = styled(Search)`
    ${iconsCss}
`

export const BellIcon = styled(Notifications)`
    ${iconsCss}
`

export const EmailIcon = styled(Email)`
    ${iconsCss}
`

