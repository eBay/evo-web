import React, {StrictMode} from 'react'
import { EbaySvg } from '../src/ebay-svg'

import "@ebay/skin"
import "@ebay/skin/dist/tokens/evo-core.css"
import "@ebay/skin/dist/tokens/evo-light.css"
import "@ebay/skin/dist/marketsans/marketsans.css"

export default {
    decorators: [
        Story => (
            <StrictMode>
                <EbaySvg/>
                <Story/>
            </StrictMode>
        )
    ],
    parameters: {
        controls: { expanded: true },
        options: {
            storySort: {
                order: [
                    "buttons",
                    "data display",
                    "dialogs",
                    "form input",
                    "graphics & icons",
                    "media",
                    "navigation & disclosure",
                    "notices & tips",
                    "progress",
                    "building blocks",
                ],
            },
        },
    }
}
