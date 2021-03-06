import React from 'react'

import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import TypographyClassic from './TypographyClassic'

describe('TypographyClassic container', function() {
    it('should not overflow', () => {
        const wrapper = renderer.create(<TypographyClassic />).toJSON()
        expect(wrapper).toHaveStyleRule('overflow', 'hidden')
    })
})
