import * as React from "react";
import DialogBase from "../components/dialogBase";
import EbayDialogFooter from "../components/dialog-footer";
import EbayDialogHeader from "../components/dialog-header";

export const DialogDefaultProps = {
    id: "dialog-id",
    classPrefix: "lightbox-dialog",
    className: "lightbox-dialog--mask-fade",
    windowClass: "lightbox-dialog__window--fade",
    a11yCloseText: "close",
    children: "body content",
};

export const Dialog = (props) => (
    <DialogBase {...DialogDefaultProps} {...props}>
        {props.children || DialogDefaultProps.children}
    </DialogBase>
);

export const HeaderFooterDialogDefaultProps = {
    id: "dialog-footer-id",
    classPrefix: "lightbox-dialog",
    className: "lightbox-dialog--mask-fade",
    windowClass: "lightbox-dialog__window--fade",
    a11yCloseText: "close",
    footer: <EbayDialogFooter>footer content</EbayDialogFooter>,
    header: <EbayDialogHeader>title content</EbayDialogHeader>,
    children: "body content",
};

export const HeaderFooterDialog = (props) => (
    <DialogBase {...HeaderFooterDialogDefaultProps} {...props}>
        {props.children || DialogDefaultProps.children}
    </DialogBase>
);

export const DialogOpen = (props) => <Dialog open {...props} />;
