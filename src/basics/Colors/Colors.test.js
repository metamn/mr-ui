import React from 'react'

import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Colors from './Colors'

describe('Colors container', function() {
    it('should not overflow', () => {
        const wrapper = renderer.create(<Colors />).toJSON()
        expect(wrapper).toHaveStyleRule('overflow', 'hidden')
    })
})
