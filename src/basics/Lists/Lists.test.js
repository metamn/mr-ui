import React from 'react'

import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Lists from './Lists'

describe('Lists container', function() {
    it('should not overflow', () => {
        const wrapper = renderer.create(<Lists />).toJSON()
        expect(wrapper).toHaveStyleRule('overflow', 'hidden')
    })
})
