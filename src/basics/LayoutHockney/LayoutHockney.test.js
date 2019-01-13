import React from 'react'

import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import LayoutHockney from './LayoutHockney'

describe('LayoutHockney container', function() {
    it('should not overflow', () => {
        const wrapper = renderer.create(<LayoutHockney />).toJSON()
        expect(wrapper).toHaveStyleRule('overflow', 'hidden')
    })
})
