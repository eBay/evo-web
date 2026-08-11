import { createElement, FC, ReactNode } from "react";

type Props = {
    as?: string;
    children?: ReactNode;
};

const EbayProgressTitle: FC<Props> = ({ as: TitleComponent = "h4", children }) =>
    createElement(TitleComponent, {}, children);

export default EbayProgressTitle;
