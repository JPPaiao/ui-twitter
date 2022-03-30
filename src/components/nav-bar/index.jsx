import React from 'react'
import {
    RocketIcon,
    HomeIcon,
    NotifIcon,
    EmailIcon,
    FavoriteIcon,
    PersonIcon,
    Container,
    Icons,
    NavMain,
    Nav,
    NavFooter,
    BotaoTT,
    ImgProfile,
    Content,
    ExitIcon
} from './styled'

function NavBar() {
    return (
        <Container>
            <NavMain>
                <RocketIcon />
                <Nav>
                    <Icons>
                        <HomeIcon />
                        <p>Página Inicial</p>
                    </Icons>
                    <Icons>
                        <NotifIcon />
                        <p>Notificação</p>
                    </Icons>
                    <Icons>
                        <EmailIcon />
                        <p>Mensagem</p>
                    </Icons>
                    <Icons>
                        <FavoriteIcon />
                        <p>Favoritados</p>
                    </Icons>
                    <Icons>
                        <PersonIcon />
                        <p>Perfil</p>
                    </Icons>
                    <BotaoTT><p>Twiiter</p></BotaoTT>
                </Nav>
            </NavMain>
            <NavFooter>
                <ImgProfile />
                <Content>
                    <p>João Pedro</p>
                    <span>@Jota_Pe</span>
                </Content>
                <ExitIcon />
            </NavFooter>
        </Container>
    )
}

export default NavBar