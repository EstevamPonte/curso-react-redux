import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'

import Message from '../common/msg/menssages'

const app = (props) => {
    return (
        <div className='wrapper'>
            <Header/>
            <SideBar/>
            <div className='content-wrapper'>
                {props.children}
            </div>
            <Footer/>
            <Message/>
        </div>
    )
}

export default app
