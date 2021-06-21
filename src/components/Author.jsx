import React from 'react'
import styled from 'styled-components'

const AuthorDiv = styled.div`
    color: whitesmoke;
    font-size: 18px;
    font-style: italic;
    text-align: right;
    margin-top: 20px;

`
const Author = () => {
    return (
        <AuthorDiv id="author">
            <p id="author">-Soy el autor</p>
        </AuthorDiv>
    )
}

export default Author
