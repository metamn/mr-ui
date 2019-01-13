import React from 'react'

import { LinkHTML } from './HTML'
import { LinkCSS } from './CSS'
import styled from 'styled-components'

export const Link = styled(LinkHTML)`
    ${LinkCSS()}
`
