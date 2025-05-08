import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { EbayFilePreviewCardProps } from '../../ebay-file-preview-card'
import { EbayFilePreviewCardGroup } from '../'

describe('<EbayFilePreviewCardGroup>', () => {
    it('click on see more show more images', async () => {
        const cards = Array.from({ length: 20 }, () => ({
            file: {
                name: 'file-name.jpg',
                type: 'image',
                src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
            }
        }))
        render(
            <EbayFilePreviewCardGroup
                a11yCancelUploadText="Cancel upload"
                cards={cards}
            />
        )

        const imagesBeforeClick = screen.getAllByRole('img')
        expect(imagesBeforeClick.length).toBe(16)

        const seeMoreBtn = screen.getByText('+5')
        await userEvent.click(seeMoreBtn)

        const imagesAfterCLick = screen.getAllByRole('img')
        expect(imagesAfterCLick.length).toBe(20)
    })
    it('click on cancel fire onCancel event', async () => {
        const cards: EbayFilePreviewCardProps[] = Array.from(
            { length: 2 },
            () => ({
                status: 'uploading',
                file: {
                    name: 'file-name.jpg',
                    type: 'image',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                }
            })
        )
        const onCancelClick = jest.fn()
        render(
            <EbayFilePreviewCardGroup
                a11yCancelUploadText="Cancel upload"
                cards={cards}
                onCancel={onCancelClick}
            />
        )
        const buttonEl = screen.getAllByRole('button', {
            name: 'Cancel upload'
        })[0]

        expect(buttonEl).toBeInTheDocument()
        await userEvent.click(buttonEl)
        expect(onCancelClick).toHaveBeenCalled()
    })
    it('click on menu action fire onMenuAction event', async () => {
        const cards: EbayFilePreviewCardProps[] = Array.from(
            { length: 2 },
            () => ({
                file: {
                    name: 'file-name.jpg',
                    type: 'image',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                }
            })
        )
        const onDeleteClick = jest.fn()
        const onMenuAction = jest.fn()
        render(
            <EbayFilePreviewCardGroup
                deleteText="Delete"
                a11yCancelUploadText="Cancel upload"
                cards={cards}
                menuActions={[
                    {
                        event: 'edit',
                        label: 'Edit'
                    },
                    {
                        event: 'download',
                        label: 'Download'
                    }
                ]}
                onMenuAction={onMenuAction}
                onDelete={onDeleteClick}
            />
        )
        const buttonEl = screen.getAllByRole('button')[0]

        expect(buttonEl).toBeInTheDocument()
        await userEvent.click(buttonEl)
        const editEl = screen.getByRole('menuitem', { name: 'Edit' })
        await userEvent.click(editEl)
        expect(onMenuAction).toHaveBeenCalledWith(
            expect.any(Object),
            expect.objectContaining({
                cardIndex: 0,
                checked: [0],
                eventName: 'edit',
                index: 0
            })
        )
        expect(onDeleteClick).not.toHaveBeenCalled()
    })
    it('click on delete fire onDelete event', async () => {
        const cards: EbayFilePreviewCardProps[] = Array.from(
            { length: 2 },
            () => ({
                file: {
                    name: 'file-name.jpg',
                    type: 'image',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                }
            })
        )
        const onDeleteClick = jest.fn()
        render(
            <EbayFilePreviewCardGroup
                deleteText="Delete"
                a11yCancelUploadText="Cancel upload"
                cards={cards}
                onDelete={onDeleteClick}
            />
        )
        const buttonEl = screen.getAllByRole('button', {
            name: 'Delete'
        })[0]

        expect(buttonEl).toBeInTheDocument()
        await userEvent.click(buttonEl)
        expect(onDeleteClick).toHaveBeenCalled()
    })
})
