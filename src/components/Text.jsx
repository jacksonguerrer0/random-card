import React, { Component } from 'react'
import styled from 'styled-components'

const TextDiv= styled.div`
    color: whitesmoke;
    font-size: 25px;
    text-align: center;
    transition: all 1s ease-in-out
`



export default class Text extends Component {
    render() {
        const {  frase, color } = this.props
        return (
            <TextDiv id="text" style={{color: `${color}`}} >
                <p>{frase}</p>
            </TextDiv>
        )
    }
}

