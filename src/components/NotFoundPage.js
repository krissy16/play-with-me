import React from 'react'
import Header from './Header'
import '../styles/NotFoundPage.css'


function NotFoundPage(){
    return(
        <>
            <Header />
            <p className="not-found">Sorry! Page not found</p>
        </>
    )
}

export default NotFoundPage;