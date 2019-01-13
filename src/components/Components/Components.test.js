import React from 'react'

import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Components from './Components'

describe('Components container', function() {
    it('should not overflow', () => {
        const wrapper = renderer.create(<Components />).toJSON()
        expect(wrapper).toHaveStyleRule('overflow', 'hidden')
    })
})
