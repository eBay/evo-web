import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import {
    EbayItemTile,
    EbayItemTileSectionSuperTitle,
    EbayItemTileSectionTitle,
    EbayItemTileSectionSubTitle,
    EbayItemTileSectionDescription,
    EbayItemTileAction
} from '../'

describe('<EbayItemTile>', () => {
    it('renders component with action', () => {
        const { asFragment } = render(
            <EbayItemTile
                file={{
                    name: 'file-name.jpg',
                    type: 'image',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                }}
            >
                <EbayItemTileAction aria-label="action-label" icon="heart16" />
                <EbayItemTileSectionSuperTitle>
                    Time Sensitive
                </EbayItemTileSectionSuperTitle>
                <EbayItemTileSectionTitle href="/collection">
                    Apple iPhone 11 Pro Max{' '}
                </EbayItemTileSectionTitle>
                <EbayItemTileSectionSubTitle>
                    256GB Space Gray
                </EbayItemTileSectionSubTitle>
                <EbayItemTileSectionDescription className="price">
                    $29.99
                </EbayItemTileSectionDescription>
                <EbayItemTileSectionDescription as="div">
                    <a href="https://ebay.com">Buy it now</a>
                </EbayItemTileSectionDescription>
                <EbayItemTileSectionDescription>
                    Free shipping
                </EbayItemTileSectionDescription>
            </EbayItemTile>
        )
        expect(asFragment()).toMatchSnapshot()
    })
    it('renders component without action', () => {
        const { asFragment } = render(
            <EbayItemTile
                file={{
                    name: 'file-name.jpg',
                    type: 'image',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                }}
            >
                <EbayItemTileSectionSuperTitle>
                    Time Sensitive
                </EbayItemTileSectionSuperTitle>
                <EbayItemTileSectionTitle href="/collection">
                    Apple iPhone 11 Pro Max{' '}
                </EbayItemTileSectionTitle>
                <EbayItemTileSectionSubTitle>
                    256GB Space Gray
                </EbayItemTileSectionSubTitle>
                <EbayItemTileSectionDescription className="price">
                    $29.99
                </EbayItemTileSectionDescription>
                <EbayItemTileSectionDescription as="div">
                    <a href="https://ebay.com">Buy it now</a>
                </EbayItemTileSectionDescription>
                <EbayItemTileSectionDescription>
                    Free shipping
                </EbayItemTileSectionDescription>
            </EbayItemTile>
        )
        expect(asFragment()).toMatchSnapshot()
    })
    it('renders component without secondary section', () => {
        const { asFragment } = render(
            <EbayItemTile
                file={{
                    name: 'file-name.jpg',
                    type: 'image',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                }}
            >
                <EbayItemTileSectionSuperTitle>
                    Time Sensitive
                </EbayItemTileSectionSuperTitle>
                <EbayItemTileSectionDescription className="price">
                    $29.99
                </EbayItemTileSectionDescription>
                <EbayItemTileSectionDescription as="div">
                    <a href="https://ebay.com">Buy it now</a>
                </EbayItemTileSectionDescription>
                <EbayItemTileSectionDescription>
                    Free shipping
                </EbayItemTileSectionDescription>
            </EbayItemTile>
        )
        expect(asFragment()).toMatchSnapshot()
    })
    it('renders component without description', () => {
        const { asFragment } = render(
            <EbayItemTile
                file={{
                    name: 'file-name.jpg',
                    type: 'image',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                }}
            >
                <EbayItemTileSectionSuperTitle>
                    Time Sensitive
                </EbayItemTileSectionSuperTitle>
                <EbayItemTileSectionTitle href="/collection">
                    Apple iPhone 11 Pro Max{' '}
                </EbayItemTileSectionTitle>
                <EbayItemTileSectionSubTitle>
                    256GB Space Gray
                </EbayItemTileSectionSubTitle>
            </EbayItemTile>
        )
        expect(asFragment()).toMatchSnapshot()
    })
})
