import React, { Component } from 'react'

class ListMakanan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist: this.props.Gambar
        }
    }
    render() {
        return (
            <img src={this.state.datalist} alt='Product Makanan' width='150' />
        )
    }
}

export default ListMakanan