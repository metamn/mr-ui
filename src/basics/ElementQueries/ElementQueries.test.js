import React from 'react'

import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import ElementQueries from './ElementQueries'

describe('ElementQueries container', function() {
    it('should not overflow', () => {
        const wrapper = renderer.create(<ElementQueries />).toJSON()
        expect(wrapper).toHaveStyleRule('overflow', 'hidden')
    })
})
