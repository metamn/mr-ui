import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import ReactMarkdown from 'react-markdown'

import 'normalize.css'
import md from './Styling.md'

const Container = styled.div`
    width: 100%;
    height: 100;
    padding: 1.25em;

    align-self: flex-start;
    margin-right: auto;

    font-family: monospace;
    font-size: 150%;
    max-width: 45em;
    line-height: 1.5;
`

class Styling extends Component {
    render() {
        return (
            <Container>
                <ReactMarkdown source={md} />
            </Container>
        )
    }
}

export default Styling
