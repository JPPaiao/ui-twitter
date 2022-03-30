import React from 'react'
import ProfilePage from '../profilepage/index'
import {
    ContMain, Head,
    BackIcon, ProfileInfo,
    HomeIcon, SearchIcon,
    BellIcon, EmailIcon,
    BottonMenu
} from './styled'

function Main() {
    return (
        <ContMain className="container-main">

            <Head>
                <button>
                    <BackIcon />
                </button>
                <ProfileInfo>
                    <strong>Jota_Pe</strong>
                    <span>612 Tweets</span>
                </ProfileInfo>
            </Head>

            <ProfilePage />

            <BottonMenu>
                <HomeIcon className='active' />
                <SearchIcon />
                <BellIcon />
                <EmailIcon />
            </BottonMenu>
            
        </ContMain>
    )
}

export default Main