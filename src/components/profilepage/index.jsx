import React from 'react'
import Feed from '../feed/index'
import {
    Section, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButtom
} from './styled'

function ProfilePage() {
    return (
        <Section>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButtom primary>
                    Editar perfil
                </EditButtom>

                <h1>João Pedro</h1>
                <h2>@Jota_Pe</h2>

                <p>
                    Developer at <a href="github.com/jppaiao" target='_blank'>@JP</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido em 30 de Março de 2003
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>354</strong>
                    </span>
                    <span>
                        <strong>98 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Section>
    )
}

export default ProfilePage