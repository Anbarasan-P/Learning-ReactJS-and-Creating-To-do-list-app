import React from 'react'

const Footer = ({ length }) => {
    const year = new Date()
    return (
        <footer>
            <p style={{textAlign:"center"}}>{length} List {length === 1 ? "item" : "items"}</p>
            <p>Coprights &copy; to-do list app</p>
        </footer>
    )
}

export default Footer