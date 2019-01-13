import React from 'react'

import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import StylingWithStyledComponents from './StylingWithStyledComponents'

describe('StylingWithStyledComponents container', function() {
    it('should not overflow', () => {
        const wrapper = renderer
            .create(<StylingWithStyledComponents />)
            .toJSON()
        expect(wrapper).toHaveStyleRule('overflow', 'hidden')
    })
})
