import React from 'react'
import {
    Container,
    Retweeted,
    RocketseatIcon,
    BodyTweet,
    Avatar,
    Content,
    Header,
    Dot,
    Descripition,
    ImagemContent,
    Icons,
    Status,
    ComentIcon,
    RetweetIcon,
    LikeIcon
} from './styled'

function Tweet() {
    return (
        <Container>
            <Retweeted>
                <RocketseatIcon />
                Voçê retweetou
            </Retweeted>

            <BodyTweet>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Rocketseat</strong>
                        <span>@Rocketseat</span>
                        <Dot />
                        <span>27 de Junho</span>
                    </Header>

                    <Descripition>
                        Foguete não tem ré 🚀
                    </Descripition>

                    <ImagemContent />

                    <Icons>
                        <Status>
                            <ComentIcon />
                            18
                        </Status>
                        <Status>
                            <RetweetIcon />
                            7
                        </Status>
                        <Status>
                            <LikeIcon />
                            973
                        </Status>
                    </Icons>
                </Content>
            </BodyTweet>
        </Container>
    )
}

export default Tweet
