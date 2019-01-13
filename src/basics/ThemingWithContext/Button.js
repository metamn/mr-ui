/**
 * A Button component loading its styling from a theme.
 */
import styled from 'styled-components'

const Button = styled.button`
    padding: 1.25em;
    border: 1px solid;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.foreground};
`
export default Button
