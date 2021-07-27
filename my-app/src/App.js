import React, { Component } from 'react';
// import Gambar from './Gambar';
import TestProps from './TestProps';
import data from './table'
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bg: "white",
      inputan: "",
      angka: 1,
    }

    this.handleInputan = this.handleInputan.bind(this)
    this.gantiWarnaBg = this.gantiWarnaBg.bind(this)
    this.tambahAngka = this.tambahAngka.bind(this)
  }

  handleInputan(e) {
    this.setState({ inputan: e.target.value }, this.gantiWarnaBg)
  }

  gantiWarnaBg() {
    this.setState({ bg: this.state.inputan })
  }

  tambahAngka(event) {
    this.setState({ angka: this.state.angka + 1 })
    this.setState({ bg: this.state.inputan })
  }

  tambahAngkaArrow = (event) => {
    this.setState({ angka: this.state.angka + 1 })
  }

  render() {

    return (
      <div style={{ backgroundColor: this.state.bg, width: "100%", height: "100vh" }}>
        <button
          onClick={this.tambahAngka}
        >

        </button>
        {/* <button
          onClick={this.gantiWarnaBg}
        >
          ganti warna
        </button>
        <input
          value={this.state.inputan}
          onChange={this.handleInputan}
        />
        <Gambar
          dariParent={this.handleInputan}
          valueInputan={this.state.inputan}
        />
        <Gambar
          dariParent={this.handleInputan}
          valueInputan={this.state.inputan}
        />
        <Gambar
          dariParent={this.handleInputan}
          valueInputan={this.state.inputan}
        />
        <Gambar
          dariParent={this.handleInputan}
          valueInputan={this.state.inputan}
        />
        <Gambar
          dariParent={this.handleInputan}
          valueInputan={this.state.inputan}
        />
        <Gambar
          dariParent={this.handleInputan}
          valueInputan={this.state.inputan}
        /> */}

        {/* <TestProps 
          variabelText="Hellowod"
          var2="testes"
          contohArr={data}
          firstName={data[0].first_name}
        >
          <button>COntoh button</button>
          <button>COntoh button</button>
          <button>COntoh button</button>
        </TestProps> */}

        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Company</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(el => {
                return (
                  <tr>
                    <td>{el.first_name}</td>
                    <td>{el.last_name}</td>
                    <td>{el.company_name}</td>
                    <td>{el.email}</td>
                    <td><img src={el.avatar} alt="" /></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

        {/* <Button id="button1" className="customClass">1234</Button> */}



        {/* <div>
          <h1>Hello</h1>
        </div> */}
      </div>
    );
  }
}

export default App;