import React from 'react'

import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import ColorsHSL from './ColorsHSL'

describe('ColorsHSL container', function() {
    it('should not overflow', () => {
        const wrapper = renderer.create(<ColorsHSL />).toJSON()
        expect(wrapper).toHaveStyleRule('overflow', 'hidden')
    })
})
