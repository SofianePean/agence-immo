import React from 'react';
import Header from 'components/header'
import Footer from 'components/footer'

const Layout = ({children, footer}) => {
    return(
        <>
            <Header />
            {children}
            {
                footer ? <Footer /> : false
            }
        </>
    )

}

export default Layout;