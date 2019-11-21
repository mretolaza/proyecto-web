import React, { Component } from "react"
const front = require("../Images/front.png")
const logo = require("../Images/Logofront.png")

class Button1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transform: 'translateX(-102%)'
    }
  }
  mouseEnter() {
    this.setState({ transform: 'translateX(-0.5%)' })
  }
  mouseLeave() {
    this.setState({ transform: 'translateX(-102%)' })
  }
  render() {
    const Margin = {
      border: '1px solid white',
      overflow: 'hidden',
      width: '120px',
      display: 'block',
      position: 'relative',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '5px',
      padding: '13px 30px',
      zIndex: '1', 
      borderRadius: '15px', 
      marginLeft: '5%'
    }
    const Txt = {
      color: 'white',
      fontFamily: 'Noto Sans Kannada,Noto Sans Gurmukhi UI,sans-serif',
      fontSize: '18px',
      fontWeight: '700',
      marginLeft: '20px',
      zIndex: '2'
    }
    const background = {
      border: '1px solid red',
      backgroundColor: 'red',
      position: 'absolute',
      width: '207px',
      height: '44px',
      zIndex: '2',
      transform: this.state.transform,
      transition: 'transform .25s ease-in'
    }
    return (
      <div onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} style={Margin}>
        <div style={background}></div>
        <span style={Txt}>{this.props.text}</span>
      </div>
    )
  }
}

class Button2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transform: 'translateX(-102%)',
      color: 'white'

    }
  }
  mouseEnter() {
    this.setState({ transform: 'translateX(-0.5%)', color: 'red' })
  }
  mouseLeave() {
    this.setState({ transform: 'translateX(-102%)', color: 'white' })
  }
  render() {
    const Margin = {
      backgroundColor: '#3270EA',
      overflow: 'hidden',
      width: '180px',
      display: 'flex',
      position: 'relative',
      height: '30px',
      alignItems: 'center',
      zIndex: '1',
      padding: '13px 30px',
      borderRadius: '15px'
    }
    const Txt = {
      color: this.state.color,
      fontFamily: 'Noto Sans Kannada,Noto Sans Gurmukhi UI,sans-serif',
      fontSize: '16px',
      fontWeight: '700',
      marginLeft: '50px',
      zIndex: '2'
    }
    const background = {
      border: '1px solid white',
      backgroundColor: 'white',
      position: 'absolute',
      width: '187px',
      height: '42px',
      zIndex: '2',
      transform: this.state.transform,
      display: 'flex',
      alignItems: 'center',
      transition: 'transform .25s ease-in'
    }

    return (
      <div onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} style={Margin}>
        <div style={background}>
        </div>
        <span style={Txt}>{this.props.text}</span>
      </div>
    )
  }
}
class ButtonMenu extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const Footer = {
      width: '50%',
      height: '120px', 
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'flex-end',
      marginLeft: '41%',
      position: 'absolute',
    }

    return (
      <div style={Footer}>
        <Button2 text={"COMPRAR ENTRADAS"} href={"https://disneylatino.com/peliculas/star-wars-el-ascenso-de-skywalker"}></Button2>
        <Button1 text={"VER MAS"} href={"https://disneylatino.com/peliculas/star-wars-el-ascenso-de-skywalker"}></Button1>
      </div>
    )
  }
}
class Logo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const Front = {
      width: '50%',
      backgroundSize: 'cover',
      alignSelf: 'center',
      justifySelf: 'center',
      marginLeft: '1000px'
    }
    const TitleFront = {
      fontFamily: 'Noto Sans Kannada,Noto Sans Gurmukhi UI,sans-serif',
      color: 'white',
      fontSize: '16px',
      lineHeight: '1.5',
      fontWeight: 'bold',
      marginLeft: '160px'

    }
    const contentDetail = {
      display: 'inline-block',
      textDecoration: 'none'
    }

    const imageStyle = {
      width: '500px',
      height: '280px',
      marginRight: '80px',
      marginBottom: '0px'
    }

    return (
      <div style={Front}>
        <div>
          <img style={imageStyle} src={logo} />
        </div>
        <a style={contentDetail} href="https://disneylatino.com/peliculas/star-wars-el-ascenso-de-skywalker">
          <p>
            <b style={TitleFront}>PREVENTA DISPONIBLE</b>
          </p>
        </a>
      </div>
    )
  }
}
class Front extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: `url(${front})`,
    }
  }
  render() {
    const Front = {
      width: '90%',
      height: '650px',
      backgroundImage: this.state.image,
      backgroundSize: 'cover',
      backgroundPosition: '50%',
      display: 'Flex',
      justifyContent: 'Center',
      marginLeft: '5%'
    }
    return (
      <div style={Front}>
        <ButtonMenu></ButtonMenu>
        <Logo></Logo>
      </div>
    )
  }
}

export default Front