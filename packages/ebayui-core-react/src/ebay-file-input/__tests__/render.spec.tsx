import React from 'react'
import { composeStories } from '@storybook/react'

import * as stories from './index.stories'
import { render } from '@testing-library/react'

const { Default, WithMockUploads, WithPreviewCards } = composeStories(stories)

describe('<EbayFileInput /> rendering', () => {
    it('renders default story correctly', () => {
        const { container } = render(<Default />)
        expect(container).toMatchSnapshot()
    })

    it('renders with preview cards', () => {
        const { container } = render(<WithPreviewCards />)
        expect(container).toMatchSnapshot()
    })

    it('renders with mock uploads', () => {
        const { container } = render(<WithMockUploads />)
        expect(container).toMatchSnapshot()
    })
})
