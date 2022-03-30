import React from 'react'
import StickyBox from 'react-sticky-box'

import Lists from '../lists'
import Suggestion from '../sugestion'
import News from '../news'
import { Container, SearchBox, Body, SearchIcon, SearchInput } from './styled'

function SideBar() {
    return (
        <Container>
            <SearchBox>
                <SearchInput placeholder='Buscar no Twitter' />
                <SearchIcon />
            </SearchBox>

            <StickyBox>
                <Body>
                    <Lists
                        title='Talvez voçê curta'
                        elements={[
                            <Suggestion
                                name='Lucas Roberto'
                                nickName='@LBeto'
                            />,
                            <Suggestion
                                name='Thiago Silva'
                                nickName='@SrSilva'
                            />,
                            <Suggestion
                                name='Kamilla Pedral'
                                nickName='@KPedral'
                            />
                        ]}
                    />
                    <Lists
                        title='O que está acontecendo'
                        elements={
                            [
                                <News
                                    title='Assunto do momento no Brasil'
                                    assunto='Bootcamp da Rocketseat'
                                />,
                                <News
                                    title='Assunto do momento no Brasil'
                                    assunto='Bootcamp da Rocketseat'
                                />,
                                <News
                                    title='Assunto do momento no Brasil'
                                    assunto='Bootcamp da Rocketseat'
                                />
                            ]
                        }
                    />
                    <Lists
                        title='O que está acontecendo'
                        elements={
                            [
                                <News
                                    title='Assunto do momento no Brasil'
                                    assunto='Bootcamp da Rocketseat'
                                />,
                                <News
                                    title='Assunto do momento no Brasil'
                                    assunto='Bootcamp da Rocketseat'
                                />,
                                <News
                                    title='Assunto do momento no Brasil'
                                    assunto='Bootcamp da Rocketseat'
                                />
                            ]
                        }
                    />
                    <Lists
                        title='O que está acontecendo'
                        elements={
                            [
                                <News
                                    title='Assunto do momento no Brasil'
                                    assunto='Bootcamp da Rocketseat'
                                />,
                                <News
                                    title='Assunto do momento no Brasil'
                                    assunto='Bootcamp da Rocketseat'
                                />,
                                <News
                                    title='Assunto do momento no Brasil'
                                    assunto='Bootcamp da Rocketseat'
                                />
                            ]
                        }
                    />
                    <Lists
                        title='O que está acontecendo'
                        elements={
                            [
                                <News
                                    title='Assunto do momento no Brasil'
                                    assunto='Bootcamp da Rocketseat'
                                />,
                                <News
                                    title='Assunto do momento no Brasil'
                                    assunto='Bootcamp da Rocketseat'
                                />,
                                <News
                                    title='Assunto do momento no Brasil'
                                    assunto='Bootcamp da Rocketseat'
                                />
                            ]
                        }
                    />
                </Body>
            </StickyBox>

        </Container>
    )
}

export default SideBar