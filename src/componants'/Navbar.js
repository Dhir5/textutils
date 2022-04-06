import React from 'react'

import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        // eslint-disable-next-line no-template-curly-in-string
        <
        nav className = { 'navbar navbar-dark bg-dark' } >
        <
        div className = "container-fluid" >
        <
        a className = "navbar-brand"
        href = "/" > { props.title } < /a> <
        /div> <
        /nav>

    )
}

// eslint-disable-next-line react/no-typos
Navbar.propTypes = {
    title: PropTypes.string
}