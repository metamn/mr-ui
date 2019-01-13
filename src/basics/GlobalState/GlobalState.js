/**
 * The Global State example
 *
 */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Repeat from './../../helpers'

/**
 * The loading container
 */
const Loading = styled.div``

/**
 * The main container
 */
const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    padding: 1.25em;

    display: flex;
    flex-wrap: wrap;
`

/**
 * The Logo container
 */
const LogoContainer = styled.div`
    width: 100%;

    ${props =>
        props.type == 'large' &&
        css`
            font-size: 3em;
        `};
`

/**
 * The Article container
 */
const ArticleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid;
    padding: 1.25em;
    margin: 1.25em;

    width: ${props => (props.width ? props.width : 'auto')};
    height: ${props => (props.height ? props.height : 'auto')};

    cursor: pointer;
`

/**
 * The Logo class
 */
class Logo extends React.Component {
    render() {
        const { type, loading, className } = this.props

        if (loading) {
            return <Loading className={className}>Loading ...</Loading>
        }

        return (
            <LogoContainer type={type} className={className}>
                <div>Logo</div>
            </LogoContainer>
        )
    }
}

/**
 * The Article class
 */
class Article extends React.Component {
    render() {
        const { width, height, index, loading, className } = this.props

        if (loading) {
            return <Loading className={className}>Loading ...</Loading>
        }

        return (
            <ArticleContainer
                width={width}
                height={height}
                onClick={() => this.props.handleClick(index)}
                className={className}
            >
                <div>Click {index + 1}</div>
            </ArticleContainer>
        )
    }
}

/**
 * The main class
 */
class GlobalState extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            articles: Array(3).fill({
                width: '20em',
                height: '20em',
            }),
            logoType: 'large',
        }
    }

    handleClick(i) {
        const articles = this.state.articles.slice()
        let logoType = this.state.logoType

        articles[i] = {
            width: articles[i].width == '20em' ? '90vw' : '20em',
            height: articles[i].height == '20em' ? '90vh' : '20em',
        }

        logoType = articles.find(article => article.width == '90vw')
            ? 'small'
            : 'large'
        console.log('l:' + logoType)

        this.setState({
            articles: articles,
            logoType: logoType,
        })
    }

    render() {
        const { articles, logoType } = this.state

        return (
            <Container>
                <Logo type={logoType} />
                <Repeat numberOfTimes={articles.length} startAt="0">
                    {i => (
                        <Article
                            width={articles[i].width}
                            height={articles[i].height}
                            handleClick={i => this.handleClick(i)}
                            key={i}
                            index={i}
                        />
                    )}
                </Repeat>
            </Container>
        )
    }
}

/**
 * The prop types
 */
GlobalState.propTypes = {
    /**
     * Component is loading?
     */
    loading: PropTypes.bool,
}

/**
 * Default props
 */
GlobalState.defaultProps = {
    loading: false,
}

export default GlobalState
