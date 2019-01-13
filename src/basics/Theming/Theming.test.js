import React from 'react'

import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Theming from './Theming'

describe('Theming container', function() {
    it('should not overflow', () => {
        const wrapper = renderer.create(<Theming />).toJSON()
        expect(wrapper).toHaveStyleRule('overflow', 'hidden')
    })
})
