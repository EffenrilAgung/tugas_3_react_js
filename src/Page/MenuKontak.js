import React, { Component } from 'react'

class MenuKontak extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deskripsi: "08121314556"
        }
    }
    render() {
        return (
            <div>
                <center>
                    <h5>Kotak Kami : {this.state.deskripsi}</h5>
                </center>
            </div>
        )
    }
}

export default MenuKontak