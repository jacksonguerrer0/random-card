import React, { Component } from "react";
import styled from "styled-components";

const BotonsDiv = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  transition: all 1s ease-in-out

`;
const Icono = styled.a`
  margin: 5px;
  font-size: 40px;
  transition: all 1s ease-in-out;
  color: #8C4F2B;
`;
const BotonsButon = styled.button`
  width: 70px;
  height: 40px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  color: whitesmoke;
  background-color: #8C4F2B;
  transition: all 1s ease-in-out

`;

export default class Botons extends Component {
  render() {
    const { random, color, frase, autor } = this.props;
    return (
      <BotonsDiv id="Botons">
        <div>
          <Icono style={{color: `${color}`}}
            id="tweet-quote"
            target="_blank"
            href={`https://twitter.com/intent/tweet?hashtags=Citas&text=${frase}-${autor}`}
          >
            <i className="fab fa-twitter-square"></i>
          </Icono>
          <Icono style={{color: `${color}`}}
            href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=Citas&caption=${autor}&content=${frase}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
            id="tumblr-quote"
            target="_blank"
          >
            <i className="fab fa-tumblr-square"></i>
          </Icono>
        </div>
        <BotonsButon style={{backgroundColor: `${color}`}} id="new-quote" onClick={random}>
          Nuevo
        </BotonsButon>
      </BotonsDiv>
    );
  }
}
