import React, { Component } from 'react'
import { connect } from "react-redux"
class ChairMap extends Component {

    renderRows = (hang, danhSachGhe) => {
        if (hang != "") {
            return danhSachGhe.map((ghe) => {
                if (ghe.daDat) {
                    return <td key={ghe.soGhe}><div className="ghe gheDuocChon">{ghe.soGhe}</div></td>
                }
                return <td key={ghe.soGhe}>
                    <button onClick={(event) => {
                        let classes = event.target.classList
                        let isSelect = this.props.chairSelected.danhSachGhe.findIndex(chairFind => chairFind.soGhe == ghe.soGhe)
                        if(isSelect == -1){
                            classes.add('gheDangChon')
                            let action = {
                                type: "CHAIR_SELECT",
                                ghe: ghe
                            }
                            this.props.dispatch(action);
                        }else {
                            classes.remove('gheDangChon')
                            let action = {
                                type: "DELETE_CHAIR",
                                ghe: ghe
                            }
                            this.props.dispatch(action);
                        }
                    }
                    } className="ghe" name={ghe.soGhe}>{ghe.soGhe}</button>
                </td>
            })
        } else return danhSachGhe.map((ghe) => {
            return <th key={ghe.soGhe}><div className="firstChar">{ghe.soGhe}</div></th>
        })

    }
    renderTable = () => {
        let { chairList } = this.props
        return chairList.map((chair) => {
            let { hang, danhSachGhe } = chair
            return <tr key={hang}>
                <th><div className="rowNumber">{hang}</div></th>
                {this.renderRows(hang, danhSachGhe)}
            </tr>

        })

    }
    render() {
        this.renderTable();
        return (
            <table className="table table-borderless table-dark">
                <tbody>
                    {this.renderTable()}
                </tbody>
            </table>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        chairList: rootReducer.chairListReducer.chairList,
        chairSelected: rootReducer.chairListReducer.chairSelected
    }
}

export default connect(mapStateToProps)(ChairMap);