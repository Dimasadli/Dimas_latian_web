import React, { Component } from 'react';
import Gambar from './Gambar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bg: "white",
      inputan: ""
    }

    this.handleInputan = this.handleInputan.bind(this)
    this.gantiWarnaBg = this.gantiWarnaBg.bind(this)
  }

  handleInputan(e) {
    this.setState({ inputan: e.target.value }, this.gantiWarnaBg)
  }

  gantiWarnaBg() {
    this.setState({ bg: this.state.inputan })
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.bg, width: "100%", height: "100vh" }}>
        {/* <input
          value={this.state.inputan}
          onChange={this.handleInputan}
        /> */}
        <button
          onClick={this.gantiWarnaBg}
        >
          ganti warna
        </button>
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
        />
        <div>
          <h1>Hello</h1>
        </div>
      </div>
    );
  }
}

export default App;