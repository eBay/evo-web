# EbaySvg

This is a helper component which holds all the SVG icons for your other `@ebay/ui-core-react` components.

## Install

```
yarn add @ebay/ui-core-react
```

## Usage

Import it and place at the end of your HTML and make sure that this component is only rendered on the server and never import it on the client side.

```jsx harmony
import { EbaySvg, EbayFlagsSvg } from "@ebay/ui-core-react/ebay-svg";

<Html>
    <Component1 />
    <Component2 />
    <EbaySvg />
    <EbayFlagsSvg />
</Html>;
```

### Use only necessary icons

In order to reduce the size of the HTML and the processing time of React, make sure to use only the necessary icons to your application by using the
`icons` attribute.

```jsx harmony
import { EbaySvg } from "@ebay/ui-core-react/ebay-svg";

<EbaySvg icons={["attention16", "information16"]} />;
```

## Attributes

| Name    | Type   | Stateful | Description |
| ------- | ------ | -------- | ----------- | -------------------------------------------------------------------- |
| `icons` | Icon[] | No       | Yes         | Use it to filter only the symbols that is needed in your application |
