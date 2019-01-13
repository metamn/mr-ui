import React from 'react'

import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import TypographicGrid from './TypographicGrid'

describe('TypographicGrid container', function() {
    it('should not overflow', () => {
        const wrapper = renderer.create(<TypographicGrid />).toJSON()
        expect(wrapper).toHaveStyleRule('overflow', 'hidden')
    })
})
