import React, { Component } from 'react'

class MenuTentangKami extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deskripsi: "Jl. Swadaya IV, Pd. Ranggon, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13860"
        }
    }
    render() {
        return (
            <div>
                <center>
                    <p>Tentang Kami</p>
                    <p>Warung Nusantara Adalah Restoran Yang Bernuansa Makanan Nusantara, Kami Anda Untuk Membuat Anda Menikmati Makanan Khas Dari Nusantara</p>
                    <h3>{this.state.deskripsi}</h3>
                </center>
            </div>
        )
    }
}

export default MenuTentangKami