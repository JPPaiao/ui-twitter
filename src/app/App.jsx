import React, { useState } from 'react'
import NavBar from '../components/nav-bar/index'
import SideBar from '../components/side-bar/index'
import Main from '../components/main/index'
import './App.css'

function App() {
    return (
        <section className='container-app'>
            <NavBar className='navegation' />
            <Main />
            <SideBar />
        </section>
    )
}

export default App
