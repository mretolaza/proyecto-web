import React, { Component } from "react"

const FooterLogo = require("../Images/disneyLogo.png")

class Text2k extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'rgb(86,86,86)'
    }
  }
  mouseEnter() {
    this.setState({ color: 'red' })

  }
  mouseLeave() {
    this.setState({ color: 'rgb(86,86,86)' })
  }
  render() {
    const link = {
      height: '40px',
      marginBottom: '10px',
      color: this.state.color,
      textDecoration: 'none'
    }
    const text = {
      fontSize: '14px',
      fontFamily: 'Roboto Condensed,sans-serif',
    }
    return (
      <a onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)}
        style={link} href={this.props.href} targe="_blank"><h5 style={text}>{this.props.text}</h5></a>
    )
  }
}
class TwoKL extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: ['rgb(86,86,86)', 'rgb(86,86,86)', 'rgb(86,86,86)', 'rgb(86,86,86)']
    }
  }
  render() {
    const Footer = {
      height: '25px',
      width: '65%',
      backgroundColor: 'color',
      zIndex: '2',
      display: 'flex',
      alignItems: 'flex-end'
    }
    const span = {
      marginTop: '-10px',
      marginLeft: '10px',
      marginRight: '10px',
      marginBottom: '10px',
      color: 'rgb(86,86,86)'
    }
    const imgL = {
      width: '180px', 
      height: '100px' 
    }
    return (
      <div style={Footer}>
        <img style={imgL} src={FooterLogo}></img>
        <Text2k text={""} href={""}></Text2k>
        <span style={span}>|</span>
        <Text2k text={" "} href={""}></Text2k>
        <span style={span}>|</span>
        <Text2k text={""} href={""}></Text2k>
        <span style={span}>|</span>
        <Text2k text={""} href={""}></Text2k>
      </div>
    )
  }
}
class TwoKR extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const Footer = {
      backgroundColor: 'color',
      zIndex: '2',
      display: 'flex',
      flexDirection: 'column'
    }
    const Social = {
      width: '500%',
      display: 'flex',
      justifyContent: 'flex-end',
      height: '45px',
      marginBottom: '10px'
    }
    const span = {
      marginTop: '20px',
      marginLeft: '10px',
      marginRight: '10px',
      marginBottom: '10px',
      color: 'rgb(86,86,86)'
    }
    const text = {
      fontWeight: '700',
      letterSpacing: '.7px',
      fontSize: '13px',
      fontFamily: 'Roboto Condensed,sans-serif',
      color: 'rgb(86,86,86)'
    }
    const copyRight = {
      letterSpacing: '.7px',
      fontSize: '9px',
      fontFamily: 'Roboto Condensed,sans-serif',
      color: 'rgb(86,86,86)',
      marginTop: '0px',
      marginBottom: '20px',
      height: '2px'
    }
    const img = {
      margin: '2px',
      marginTop: '20px'
    }
    return (
      <div style={Footer}>
        <div style={Social}>
          <h5 style={text}>CONNECT</h5>
          <span style={span}>|</span>
        
        </div>
        <h5 style={copyRight}>Política de Privacidad Términos de uso Política de privacidad de los niños Oportunidades laborales Anuncios basados en intereses
© Disney © Disney•Pixar © ™ Lucasfilm LTD © Marvel. Reservados todos los derechos, Disney Entertainment</h5>
      </div>
    )
  }
}
class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const Footer = {
      width: '100%',
      height: '100px',
      backgroundColor: 'ghostwhite',
      zIndex: '2',
      display: 'flex',
      alignItems: 'flex-end',
      flexDirection: 'row-reverse'
    }
    const Footer2k = {
      width: '100%',
      height: '250px',
      backgroundColor: 'ghostwhite',
      zIndex: '2',
      display: 'flex',
      alignItems: 'flex-end',
      marginbottom: '20px',
      padding: '15px'
    }
    const Class = {
      marginTop: '18px',
      marginRight: '18px',
      width: '218.666px',
      height: '82px',
      backgroundImage: 'url()',
      backgroundSize: 'cover',
      justifySelf: 'center',
      alignSelf: 'flex-start',
      zIndex: '2'
    }
    return (
      <div>
        <div style={Footer}>
          <div style={Class}> </div>
        </div>
        <div style={Footer2k}>
          <TwoKL></TwoKL>
          <TwoKR></TwoKR>
        </div>
      </div>
    )
  }
}
export default Footer