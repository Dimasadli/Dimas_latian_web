import React, { Component } from 'react';
import API from '../../../API/API';
import Tbody from './Tbody';

class Tabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        const fakeAPI = new API()
        fakeAPI.getAPI({ category: 'animal' }).then((res) => {
            console.log(res.data.entries)
            this.setState({
                posts: res.data.entries
            })
        })
    }
    render() {
        return (
            <div>
                <p>Halaman Tabel</p>
                {
                    this.state.posts.map((el, idx) => {
                        return (
                            <table key={idx} className="table">
                                <thead className='table-info'>
                                    <tr>
                                        <td>1: </td>
                                        {Object.keys(el).map((head, id) => {
                                            return (
                                                <th key={id}>{head}</th>
                                            )
                                        })}
                                    </tr>
                                </thead>
                                <Tbody
                                    data={el}
                                />
                            </table>
                        )
                    })
                }
            </div>
        );
    }
}

export default Tabel;
