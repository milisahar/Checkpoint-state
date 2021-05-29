import React, { Component } from 'react'

export default class App extends Component {

  state = {
    person: {
      fullName: "Sahar Mili", bio: "I am born in Tunisia in 1992", imgSrc: "/images.jpg", profession: "I am an engineer"
    },
    bol: true,
    curTime: null
  };
  tog = () => this.setState({ bol: !this.state.bol })
  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleTimeString()
      })
    }, 1000)
  }

  render() {

    return (
      < div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ color: 'black', fontFamily: 'sans-serif', fontStyle: 'revert', fontSize: '20px', marginLeft: '1200px' }}> {this.state.curTime}</p>
        <button style={{ width: '100px', height: '40px', color: 'purple', fontSize: '30px ', marginBottom: '100px  ' }} onClick={this.tog}>{this.state.bol ? "Hide" : "show"}</button>

        {
          this.state.bol ?
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img className="photo" src={this.state.person.imgSrc} alt="profile" width="400px" height="400px" />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <h1 style={{ color: 'blueviolet', fontFamily: 'sans-serif', fontSize: '40px' }}> {this.state.person.fullName}</h1>
                <h2 style={{ fontSize: '25px', color: 'slategray', fontStyle: 'oblique' }}>{this.state.person.bio}</h2>
                <h2 style={{ fontSize: '25px', color: 'slategray', fontStyle: 'oblique' }}>{this.state.person.profession}</h2>
                <h2>{this.state.bol}</h2>
              </div>
            </div> :
            false
        }

      </div >
    )


  }

}
