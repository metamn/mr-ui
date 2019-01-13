import React from 'react'

import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import ES6 from './ES6'

describe('ES6 container', function() {
    it('should not overflow', () => {
        const wrapper = renderer.create(<ES6 />).toJSON()
        expect(wrapper).toHaveStyleRule('overflow', 'hidden')
    })
})
