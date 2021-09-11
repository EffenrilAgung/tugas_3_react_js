import React from 'react'

function TopEvents() {
    const headlerFooter = (value, e) => {
        alert(value)
        e.preventDefault()
    }
    return (
        <a href='/' onClick={(e) => headlerFooter("Back To Home", e)}> Back To Home </a>

    )
}

export default TopEvents