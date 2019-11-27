import React, { Component } from "react"
import TopBar from "../Components/TopBar.jsx"
import Front from "../Components/Front.jsx"
import CardContainer from "../Components/CardContainer.jsx"
import CardComponent from "../Components/CardComponent.jsx"
import { Container} from 'reactstrap'
import CardImage from "../Components/CardImage.jsx"

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
     <Container>
        <div>
        <TopBar></TopBar>
        <Front></Front>
        <CardContainer></CardContainer>
        <CardComponent></CardComponent>
        <CardImage></CardImage>
      </div>
     </Container>
    )
  }
}
export default App