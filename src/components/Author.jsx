import React, { Component } from 'react'
import styled from 'styled-components'

const AuthorDiv = styled.div`
    color: whitesmoke;
    font-size: 18px;
    font-style: italic;
    text-align: right;
    margin-top: 20px;

`


export default class Author extends Component {
    render() {
        const { autor, color } = this.props
        return (
            <AuthorDiv style={{color: `${color}`}}>
                <p>{autor}</p>
            </AuthorDiv>
        )
    }
}

