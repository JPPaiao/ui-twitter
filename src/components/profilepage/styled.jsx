import styled, { css } from 'styled-components'
import { Cake, LocationOn } from '../../icons/icons'
import Botao from '../botao/index'

export const Section = styled.section`
    display: flex;
    flex-direction: column;

    max-height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`

export const Banner = styled.div`
    height: min(20vw, 199px);
    width: 100%;
    flex-shrink: 0;
    background-color: var(--tt);
    position: relative;
`

export const Avatar = styled.div`
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));
    border-radius: 50%;
    background-color:  var(--cin);
    border: 3px solid var(--primary);

    position: absolute;
    bottom: max(-60px, -10vw);
    left: 15px;
`

export const ProfileData = styled.div`
    padding: min(calc(10vw + 7px), 67px) 20px 0;

    display: flex;
    flex-direction: column;
    position: relative;

    > h1 {
        font-weight: bold;
        font-size: 1.8rem;
    }
    > h2 {
        font-weight: normal;
        font-size: 20px;
        color: var(--cin);
        margin: -7px 0 15px;
    }
    > p {
        font-size: 15px;

        > a {
            text-decoration: none;
            color: var(--tt);
        }
    }
    > ul {
        list-style: none;
        margin: 10px 0;

        > li {
            font-size: 15px;
            color: var(--cin);
            display: flex;
            align-items: center;

            > svg {
                fill: var(--cin);
                padding-right: 5px;
            }
        }
    }
`
const iconsCss = css`
    width: 20px;
    height: 20px;

    fill: var(--cin);
`

export const LocationIcon = styled(LocationOn)`
    ${iconsCss}
`

export const CakeIcon = styled(Cake)`
    ${iconsCss}
`

export const Followage = styled.div`
    display: flex;

    > span {
        font-size: 15px;
        color: var(--cin);

        > strong {
            color: var(--whi);
        }

        & + span {
            margin-left: 20px;
        }
    }
`

export const EditButtom = styled(Botao)`
    position: absolute;
    top: 2vw;
    right: 7px;

    padding: 4px 16px;
    font-size: 13px;

    @media (min-width: 320px) {
        top: 10px;
        padding: 7px 20px;
        font-size: 15px;
    }
`
