import React from 'react'
import styled from 'styled-components'


const BotonsDiv = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`
const Tweet = styled.a`
    width: 40px;
    font-size: 40px;
    color: aqua;
`
const BotonsButon= styled.button`
    width: 70px;
    border: 1px black solid;
    border-radius: 10px;
    font-size: 15px;
    :hover{
        background-color: aqua;
    }
`
const Botons = () => {
    return (
        <BotonsDiv id="Botons">
            <Tweet 
            id="tweet-quote"
            target="_blank"
            href="https://twitter.com/intent/tweet"
            >
            <i class="fab fa-twitter"></i>
            </Tweet >
            <BotonsButon id="new-quote">Nuevo</BotonsButon>
        </BotonsDiv>
    )
}

export default Botons
