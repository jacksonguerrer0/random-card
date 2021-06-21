import React from 'react'
import styled from 'styled-components'

const TextDiv= styled.div`
    color: whitesmoke;
    font-size: 25px;
    text-align: center;
`

const Text = () => {
    return (
        <TextDiv id="text">
            <p >Soy el texto Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quos obcaecati doloremque rem placeat commodi suscipit deleniti maiores pariatur accusamus mollitia laborum aliquam, harum eos, qui itaque repellat error voluptatum!</p>
        </TextDiv>
    )
}

export default Text
