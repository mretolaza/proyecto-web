import React, { Component } from "react"
const  logImg = require("../Images/disneyLogo.png")

class LogoD extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: '24px',
      ml: '8px'
    }
  }
  mouseEnter() {
    this.setState({ size: '44px', ml: '4px' })
  }
  mouseLeave() {
    this.setState({ size: '24px', ml: '8px' })
  }
  render() {
    const Logo = {
      position: 'absolute',
      display: 'inline-block',
      transform: 'translateX(-50%)',
      top: '24px',
      left: '49.5%',
      backgroundPosition: '0 0',
      backgroundSize: '302.5px 276.5px',
      width: '67px',
      height: '45px',
    }

    return (
      <div style={Logo}>
        <a href="https://2k.com/en-US/" targe="_blank"></a>
      </div>
    )
  }
}
class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: '24px',
      ml: '8px'
    }
  }
  render() {
    const Margin = {
      width: '67px',
      height: '45px',
      margin: '25px'
    }

    const styleImg = {
      width: '150%',
      height: '100%',
    }
    return (
      <div style={Margin}>
        <img style={styleImg} src={logImg} alt=""/>
      </div>
    )
  }
}
class TextSB extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'white'
    }
  }
  mouseEnter() {
    this.setState({ color: 'red' })

  }
  mouseLeave() {
    this.setState({ color: 'white' })
  }
  render() {
    const link = {
      height: '40px',
      marginBottom: '10px',
      color: this.state.color,
      textDecoration: 'none'
    }
    const text = {
      fontSize: '13px',
      fontFamily: 'Roboto Condensed,sans-serif',
      letterSpacing: '1.1px'
    }
    return (
      <a onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)}
        style={link} href={this.props.href} targe="_blank"><h5 style={text}>{this.props.text}</h5></a>
    )
  }
}

class TopBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const Footer = {
      width: '100%',
      height: '80px',
      display: 'flex',
      justifyContent: 'space-between',
      background: 'whitesmoke'
    }

    return (
      <div style={Footer}>
        <LogoD></LogoD>
        <Menu></Menu>
      </div>
    )
  }
}

export default TopBar