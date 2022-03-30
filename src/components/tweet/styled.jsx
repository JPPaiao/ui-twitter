import styled, { css } from 'styled-components'
import { RocketseatIcon as Rocketseat } from '../rocketicon/index'
import { Chat, Retweet, Favorite } from '../../icons/icons'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 14px 16px;
    border-bottom: 1px solid var(--out);
    width: 100%;
`

export const Retweeted = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    color: var(--cin);

`

export const RocketseatIcon = styled(Rocketseat)`
    width: 16px;
    height: 16px;

    margin-left: 35px;
    margin-right: 9px;
    > path {
        fill: var(--cin);
    }
`

export const BodyTweet = styled.div`
    display: flex;
    margin-top: 3px;
    position: relative;
`

export const Avatar = styled.div`
    width: 49px;
    height: 49px;
    background-color: var(--cin);

    border-radius: 50%;
    flex-shrink: 0;

    position: absolute;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 2px;
    padding-left: 60px;
`

export const Header = styled.div`
    display: flex;
    align-items: center;

    font-size: 15px;
    white-space: nowrap;

    > strong {
        margin-right: 5px;
    }
    > span {
        color: var(--cin);
    }
    > span, strong {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`

export const Dot = styled.div`
    background-color: var(--cin);
    width: 2px;
    height: 2px;
    margin: 0 10px;
`

export const Descripition = styled.div`
    font-size: 14px;
    margin-top: 4px;
`

export const ImagemContent = styled.div`
    width: 100%;
    height: min(285px, max(175px, 41vw));
    background-color: var(--out);

    margin: 10px 20px 0 0;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 11px auto 0;
    width: 100%;

    > div {
        cursor: pointer;

        &:hover {
            opacity: .7;
        }
    }

    @media (min-width: 330px) {
        width: 75%;
    }
`
export const Status = styled.div`
    display: flex;
    align-items: center;

    font-size: 14px;
    /* color: var(--cin); */

    > svg {
        margin-right: 5px;
    }

    &:nth-child(1) {
        &, > svg path {
            color: var(--cin);
        }
    }
    &:nth-child(2) {
        &, > svg path {
            color: var(--rt);
        }
    }
    &:nth-child(3) {
        &, > svg path {
            color: var(--fav);
        }
    }
`

const iconCss = css`
    width: 19px;
    height: 19px;
`

export const ComentIcon = styled(Chat)`
    ${iconCss}
`

export const RetweetIcon = styled(Retweet)`
    ${iconCss}
`

export const LikeIcon = styled(Favorite)`
    ${iconCss}
`
