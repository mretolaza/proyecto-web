import React, { Component } from "react"
const front = "https://lumiere-a.akamaihd.net/v1/images/eu_the-lion-king_home-ents_no-disc_short-hero_v2_r_f1c8ed67.jpeg?region=0,0,1920,540&width=1200"

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
        return (
            <div onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} style={Margin}>
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
                <Button1 text={"APPLE TV"} href={"https://disneylatino.com/peliculas/star-wars-el-ascenso-de-skywalker"}></Button1>
                <Button1 text={"GOOGLE PLAY"} href={"https://disneylatino.com/peliculas/star-wars-el-ascenso-de-skywalker"}></Button1>
            </div>
        )
    }
}
class Logo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const CardComponent = {
            width: '50%',
            backgroundSize: 'cover',
            alignSelf: 'center',
            justifySelf: 'center',
            height: '540px',
            marginLeft: '1090px'
        }
        const TitleFront = {
            fontFamily: 'Noto Sans Kannada,Noto Sans Gurmukhi UI,sans-serif',
            color: 'white',
            fontSize: '80px',
            lineHeight: '1.5',
            fontWeight: 'bold',
            marginLeft: '160px'

        }
        const contentDetail = {
            display: 'inline-block',
            textDecoration: 'none'
        }


        return (
            <div style={CardComponent}>
                <a style={contentDetail} href="https://disneylatino.com/peliculas/star-wars-el-ascenso-de-skywalker">
                    <h1>
                        <b style={TitleFront}>El Rey León</b>
                    </h1>
                    <p>Disponible para descargar y disfrutar</p>
                </a>
            </div>
        )
    }
}
class CardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: `url(${front})`,
        }
    }
    render() {
        const CardComponent = {
            height: '500px',
            backgroundImage: this.state.image,
            backgroundSize: 'cover',
            backgroundPosition: '50%',
            display: 'Flex',
            justifyContent: 'Center',
            marginBottom: '100%'
        }
        return (
            <div>
                <div style={CardComponent}>
                    <ButtonMenu></ButtonMenu>
                    <Logo></Logo>
                </div>

            </div>

        )
    }
}

export default CardComponent