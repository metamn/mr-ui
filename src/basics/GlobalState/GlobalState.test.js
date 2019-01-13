import React from 'react'

import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import GlobalState from './GlobalState'

describe('GlobalState container', function() {
    it('should not overflow', () => {
        const wrapper = renderer.create(<GlobalState />).toJSON()
        expect(wrapper).toHaveStyleRule('overflow', 'hidden')
    })
})
