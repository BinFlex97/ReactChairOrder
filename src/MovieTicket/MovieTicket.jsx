import React, { Component } from 'react'
import ChairMap from './ChairMap'
import SelectedTable from './SelectedTable'

export default class MovieTicket extends Component {
    render() {
        return (
            <div className='text-center ' style={{ color: "white" }}>
                <div className="row d-flex align-items-center">
                    <div className="col">
                        <h1 style={{ fontSize: "70px", padding: "20px" }}>MOVIE SEAT SELECTION</h1>
                        <div className="screen">
                            <h3 style={{ fontSize: "30px" }}>SCREEN</h3>
                        </div>
                        <ChairMap />
                    </div>
                    <div className="col">
                        <h1 style={{ fontSize: "40px", padding: "20px" }}>DANH SÁCH GHẾ ĐÃ CHỌN</h1>
                        <SelectedTable />
                    </div>
                </div>



            </div>
        )
    }
}
