import React, { Component } from "react"

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zindexBack: -1,
      zindexImg: 1,
      scale: 'scale(1)'
    }
  }
  mouseEnter() {
    this.setState({ zindexBack: 1, zindexImg: -1, scale: 'scale(1.1)' })
  }
  mouseLeave() {
    this.setState({ zindexBack: -1, zindexImg: 1, scale: 'scale(1)' })
  }
  render() {
    const Img = {
      width: 'inherit',
      height: 'inherit',
      position: 'absolute',
      backgroundImage: `${this.props.url}`,
      backgroundPosition: '50%',
      backgroundSize: 'cover',
      transform: this.state.scale,
      transition: 'all .3s',
      zIndex: this.state.zindexImg, 
      marginLeft:'3%',
      marginTop: '2.8%'
    }
    const Txt = {
      color: 'white',
      fontFamily: 'Noto Sans Kannada,Noto Sans Gurmukhi UI,sans-serif',
      marginLeft: '20px',
      fontSize: '23px',
      fontWeight: 'bold',
    }
    const Container = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
      boxSizing: 'border-box',
      postion: 'relative', 
      marginLeft: `${this.props.marginLeft}%`,
      marginTop:   `${this.props.marginTop}%`,

    }
    const Filter = {
      width: 'inherit',
      height: 'inherit',
      position: 'absolute',
      opacity: '0.80',
      display: 'flex',
      alignItems: 'flex-end',
      transition: 'all .3s',
      zIndex: this.state.zindexBack,
      marginLeft:'3%',
      marginTop: '2.8%'


    }
    return (
      <div onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} style={Container}>
        <div style={Img}>
        </div>
        <div style={Filter}>
          <h3 style={Txt}>{this.props.text}</h3>
        </div>
      </div>
    )
  }
}

class CardContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const Container = {
      width: '100%',
      height: '780px',
      display: 'grid',
      gridTemplateColumns: '400px 400px 400px 400px',
      gridTemplateRows: '450px 450px', 
      marginLeft: '-5%'
    }
    return (
     <div className="row">
      <div className="col-sm-12 bound" style={Container}>
        <Card width={400} height={440} url={'url(https://lumiere-a.akamaihd.net/v1/images/eu_maleficient_poh_r_0e47b6f4.jpeg?region=0,0,500,575&width=480)'} text={'Malefica Dueña del mal'}></Card>
        <Card width={400} height={440} marginLeft={5}  url={'url(https://lumiere-a.akamaihd.net/v1/images/feat_500x575_677ec2e1.jpeg?region=0,0,500,575&width=320)'} text={'#FELIZCUMPLEMICKY'}></Card>
        <Card width={400} height={440} marginLeft={10} url={'url(https://lumiere-a.akamaihd.net/v1/images/disney_poh_e7e86bd3.jpeg?region=0,0,500,576&width=480)'} text={'Disponible Proximamente'}></Card>
        <Card width={400} height={440} marginLeft={15} url={'url(https://lumiere-a.akamaihd.net/v1/images/disneyjunior-500x575_1_c1ddab5d.png?region=0,0,500,575&width=480)'} text={'Disney Junior Play'}></Card>
      </div>
      <div style={Container}>
        <Card width={470} height={500} marginTop={15} marginLeft={10} url={'url(https://lumiere-a.akamaihd.net/v1/images/eu_maleficient_poh_r_0e47b6f4.jpeg?region=0,0,500,575&width=480)'} text={'BIOSHOCK INFINITE SCREENSHOT'}></Card>
        <Card width={450} height={500} marginLeft={22} marginTop={15} url={'url(https://lumiere-a.akamaihd.net/v1/images/disney_poh_e7e86bd3.jpeg?region=0,0,500,576&width=480)'} text={'BIOSHOCK: THE COLLECTION LAUNCH TRAILER'}></Card>
        <Card width={450} height={500} marginLeft={22} marginTop={12} url={'url(https://lumiere-a.akamaihd.net/v1/images/disneyjunior-500x575_1_c1ddab5d.png?region=0,0,500,575&width=480)'} text={'BIOSHOCK INFINITE SCREENSHOT'}></Card>
      </div>
    
     </div>
    )
  }
}
export default CardContainer