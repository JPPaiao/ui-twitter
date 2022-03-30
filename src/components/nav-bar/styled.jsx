import styled, { css } from "styled-components"
import Botao from '../botao/index'
import { RocketseatIcon as Rocket } from '../rocketicon/index'
import { Home, Notifications, Email, FavoriteBorder, Person, ExitToApp } from '../../icons/icons'

const iconsCss = css`
    width: 22px;
    height: 22px;

    flex-shrink: 0;
    fill: var(--whi);
`

export const HomeIcon = styled(Home)`
    ${iconsCss}
`

export const NotifIcon = styled(Notifications)`
    ${iconsCss}
`

export const EmailIcon = styled(Email)`
    ${iconsCss}
`

export const FavoriteIcon = styled(FavoriteBorder)`
    ${iconsCss}
`

export const PersonIcon = styled(Person)`
    ${iconsCss}
    fill: var(--tt);

    + p {
        color: var(--tt);
    }
`

export const RocketIcon = styled(Rocket)`
    width: 30px;
    height: 30px;

    > svg, path {
        fill: var(--tt);
    }
`

export const Icons = styled.div`
    display: flex;
    flex-shrink: 0;
    justify-content: center;

    padding: 10px 5px 10px 3px;
    margin-top: 7px;

    > svg {
        cursor: pointer;
    }

    > p {
        display: none;
    }

    &:hover {
        background-color: var(--houver-dark);
        border-radius: 15px;
    }

    &:hover, :active {
        p, svg {
            color: var(--tt);
            fill: var(--tt);
        }
    }

    @media (min-width: 1000px) {
        justify-content: flex-start;

        p {
            display: inline;
            margin-left: 10px;
            cursor: pointer;
        }
    }
`

export const Container = styled.div`
    display: none;

    @media (max-width: 1000px) {
        padding-left: 0;

        p, span {
            display: none;
        }
    }

    @media (min-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        position: sticky;
        top: 0;
        left: 0;

        padding: 9px 19px 20px;
        max-height: 97vh;
    }
`

export const NavMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1000px) {
        align-items: flex-start;
    }
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 5px auto;
`

export const BotaoTT = styled(Botao)`
    margin-top: 30px;
    width: 150px;
    height: 30px;

    @media (max-width: 1000px) {
        width: 37px;
        height: 37px;
        border-radius: 50%;
    }
`

export const NavFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;

    position: relative;

    @media (max-width: 1000px) {
        svg {
            display: none;
        }
    }
`

export const ImgProfile = styled.div`
    width: 45px;
    height: 45px;

    background-color: var(--cin);
    border-radius: 50%;
    border: 3px solid var(--primary);

    position: absolute;

    @media (max-width: 1000px) {
        right: 0;
    }
`

export const Content = styled.div`
    margin-left: 50px;

    > p, span {
        font-size: 14px;
    }
    > span {
        color: var(--cin);
    }
`

export const ExitIcon = styled(ExitToApp)`
    ${iconsCss}
    margin: 0;
    cursor: pointer;
`
