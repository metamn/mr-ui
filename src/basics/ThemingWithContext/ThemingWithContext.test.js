import React from 'react'

import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import ThemingWithContext from './ThemingWithContext'

describe('ThemingWithContext container', function() {
    it('should not overflow', () => {
        const wrapper = renderer.create(<ThemingWithContext />).toJSON()
        expect(wrapper).toHaveStyleRule('overflow', 'hidden')
    })
})
