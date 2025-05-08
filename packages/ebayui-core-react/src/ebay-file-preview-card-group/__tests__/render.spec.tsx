import React from 'react'
import { render } from '@testing-library/react'
import { EbayFilePreviewCardGroup } from '../'

describe('<EbayFilePreviewCardGroup> render', () => {
    it('renders with more than 15 cards', () => {
        const cards = Array.from({ length: 20 }, () => ({
            file: {
                name: 'file-name.jpg',
                type: 'image',
                src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
            }
        }))
        const { asFragment } = render(
            <EbayFilePreviewCardGroup
                a11yCancelUploadText="Cancel upload"
                cards={cards}
            />
        )
        expect(asFragment()).toMatchSnapshot()
    })
    it('renders with less than 15 cards', () => {
        const cards = Array.from({ length: 3 }, () => ({
            file: {
                name: 'file-name.jpg',
                type: 'image',
                src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
            }
        }))
        const { asFragment } = render(
            <EbayFilePreviewCardGroup
                a11yCancelUploadText="Cancel upload"
                cards={cards}
            />
        )
        expect(asFragment()).toMatchSnapshot()
    })
})
