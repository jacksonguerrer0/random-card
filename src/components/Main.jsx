import React, { Component } from 'react'
import "../styles/main.css";
import Text from '../components/Text'
import Author from '../components/Author'
import Botons from '../components/Botons'
import styled from 'styled-components'
import Creador from '../components/Creador'

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:100vh;
  background-color: black;
`
const QuoteBox = styled.div`
  width: 700px;
  height: 300px;
  padding: 10px 20px;
  border-radius: 3px;
  background-color: whiteSmoke;
  display: flex;
  flex-flow: wrap column;
  justify-content: space-evenly;
`


export default class Main extends Component {
  constructor(props){
    super(props)
    this.state={

      mensaje: "Este es el mensaje",
      autor: "",
      frase: "",
      number: 0,
      colors: ["#51608C", "#8697A6", "#94a5a5","#BF8756", "#8C4F2B"],
      color: "",
      apiFrase: ""
    }
  };

  async componentDidMount(){
    const response = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
    const data = await response.json();
    const apiFrase =  await data.quotes;
    let aleatorio = await Math.floor(Math.random()*(apiFrase.length));
    const frase = apiFrase[aleatorio].quote;
    const autor = apiFrase[aleatorio].author;
    const colorRandom = Math.floor(Math.random()*(this.state.colors.length));
    const colorSelect = this.state.colors[colorRandom];
    this.setState({
      apiFrase : apiFrase,
      number: aleatorio,
      frase,
      autor,
      color: colorSelect
    });

  }
  _handleNumberRandom = async ()=>{
      const {apiFrase} = this.state
      let aleatorio =   Math.floor(Math.random()*(this.state.apiFrase.length));
      const frase =  apiFrase[aleatorio].quote;
      const autor =  apiFrase[aleatorio].author;
      const colorRandom = Math.floor(Math.random()*(this.state.colors.length));
      const colorSelect =  this.state.colors[colorRandom];
      this.setState({
        number: aleatorio,
        frase,
        autor,
        color: colorSelect
      });
  }

  render() {
    return(
    <Container style={{backgroundColor: `${this.state.color}`}}>
      <QuoteBox id="quote-box">
          <Text frase={this.state.frase} color={this.state.color}/>
          <Author autor={this.state.autor} color={this.state.color}/>
          <Botons  random={this._handleNumberRandom} color={this.state.color} frase={this.state.frase} autor={this.state.autor}/>
      </QuoteBox>
      <Creador/>
    </Container>
    )
  }
}
