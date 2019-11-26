import React, { Component } from "react"
const front = require("../Images/video1.png")
const front1 = require("../Images/video2.png")

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
      marginLeft: '3%',
      marginTop: '-95%'
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
      marginTop: `${this.props.marginTop}%`,

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
      marginLeft: '3%',
      marginTop: '-50%'


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

class CardImage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const Container = {
      width: '100%',
      height: '500px',
      display: 'grid',
      gridTemplateColumns: '465px 6900px',
      gridTemplateRows: '450px 450px',
      marginLeft: '-5%',
    }
    return (
      <div className="row">
        <div className="col-sm-12 bound" style={Container}>
          <Card width={800} height={350} url={'url(https://mundo.culturizando.com/wp-content/uploads/2019/11/thumb_600x0_image002-1.jpg)'} text={'Malefica Dueña del mal'}></Card>
          <Card width={800} height={350} marginLeft={5} url={'url(https://icdn6.digitaltrends.com/image/digitaltrends_es/star-wars-8-416x416.jpg)'} text={'#FELIZCUMPLEMICKY'}></Card>
        </div>
        <div>
            <img src={front}/>
        </div>
      </div>
    )
  }
}
export default CardImage