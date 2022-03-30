import styled from 'styled-components'
import Botao from '../botao/index'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px 5px;
    position: relative;
`

export const Avatar = styled.div`
    position: absolute;

    width: 50px;
    height: 50px;

    background-color: var(--cin);
    border-radius: 50%;

`

export const Info = styled.div`
    display: flex;
    flex-direction: column;

    padding-left: 60px;
    font-size: 14px;

    > span {
        color: var(--cin);
        padding-top: 3px;
    }
`

export const FollowButton = styled(Botao)`
    width: 75px;
`

