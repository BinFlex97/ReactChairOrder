import React, { Component } from 'react'
import { connect } from 'react-redux'
class SelectedTable extends Component {
    renderTable = () => {
        return this.props.chairSelected.danhSachGhe.map((chair) => {
            return <tr key={chair.soGhe}>
                <th>{chair.soGhe}</th>
                <th>{chair.gia}</th>
                <th><button onClick={() => {
                    let action = {
                        type: "DELETE_CHAIR",
                        ghe: chair
                    }
                    this.props.dispatch(action);
                }} className='btn btn-danger'>X</button></th>
            </tr>
        })
    }
    render() {
        return (
            <table className="table">
                <thead className='thead-dark'>
                    <tr>
                        <th>SỐ GHẾ</th>
                        <th>GIÁ</th>
                        <th>HỦY</th>
                    </tr>
                </thead>
                <tbody className='thead-light'>
                    {this.renderTable()}
                </tbody>
                <tfoot className='thead-dark'>
                    <tr>
                        <th>TỔNG TIỀN</th>
                        <th>{this.props.chairSelected.tongTien}</th>
                        <th>
                            <button onClick={() => {
                                let action = {
                                    type: "CHAIR_CONFIRM"
                                }
                                this.props.dispatch(action);
                                alert("Đã Thanh Toán Xong!")
                            }} className='btn btn-primary'>THANH TOÁN</button>
                        </th>
                    </tr>
                </tfoot>
            </table>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        chairSelected: rootReducer.chairListReducer.chairSelected
    }
}

export default connect(mapStateToProps)(SelectedTable);
