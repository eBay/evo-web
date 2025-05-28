import React from 'react'
import { render } from '@testing-library/react'
import {
    EbayFilePreviewCardProps,
    EbayFilePreviewCard
} from '../../ebay-file-preview-card'
import { EbayFilePreviewCardGroup } from '../'

describe('<EbayFilePreviewCardGroup> render', () => {
    it('renders with more than 15 cards', () => {
        const cards: EbayFilePreviewCardProps[] = Array.from(
            { length: 20 },
            () => ({
                file: {
                    name: 'file-name.jpg',
                    type: 'image',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                },
                a11yCancelUploadText: 'Cancel upload',
                deleteText: 'Delete label',
            })
        )
        const { asFragment } = render(
            <EbayFilePreviewCardGroup a11ySeeMoreText="see more text">
                {cards.map((cardFile, index) => (
                    <EbayFilePreviewCard key={index} {...cardFile} />
                ))}
            </EbayFilePreviewCardGroup>
        )
        expect(asFragment()).toMatchSnapshot()
    })
    it('renders with less than 15 cards', () => {
        const cards = Array.from({ length: 3 }, () => ({
            file: {
                name: 'file-name.jpg',
                type: 'image',
                src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
            },
            a11yCancelUploadText: 'Cancel upload',
            deleteText: 'Delete label',
        }))
        const { asFragment } = render(
            <EbayFilePreviewCardGroup className="test-class">
                {cards.map((cardFile, index) => (
                    <EbayFilePreviewCard key={index} {...cardFile} />
                ))}
            </EbayFilePreviewCardGroup>
        )
        expect(asFragment()).toMatchSnapshot()
    })
    it('renders as div', () => {
        const cards: EbayFilePreviewCardProps[] = Array.from(
            { length: 3 },
            () => ({
                file: {
                    name: 'file-name.jpg',
                    type: 'image',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                },
                a11yCancelUploadText: 'Cancel upload',
                as: 'div',
                deleteText: 'Delete label',
            })
        )
        const { asFragment } = render(
            <EbayFilePreviewCardGroup>
                {cards.map((cardFile, index) => (
                    <EbayFilePreviewCard key={index} {...cardFile} />
                ))}
            </EbayFilePreviewCardGroup>
        )
        expect(asFragment()).toMatchSnapshot()
    })
})
