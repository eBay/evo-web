import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayFileInput, EbayFileInputHeader, EbayFileInputSubheader } from "../index";
import { EbayFilePreviewCardGroup } from "../../ebay-file-preview-card-group";
import { EbayFilePreviewCard } from "../../ebay-file-preview-card";
import { FilePreviewCardActionHandler } from "../../ebay-file-preview-card-group/types";
import { FileInputHandler } from "../types";

const meta: Meta<typeof EbayFileInput> = {
    title: "form input/ebay-file-input",
    component: EbayFileInput,
    argTypes: {
        multiple: {
            type: "boolean",
            control: { type: "boolean" },
            description: "Whether multiple files can be uploaded",
        },
        onInput: {
            action: "onInput",
            description: "Triggered when the file(s) are uploaded",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "event, { files }",
                },
            },
        },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayFileInput> = (args) => (
    <EbayFileInput {...args}>
        <EbayFileInputHeader>Upload your files</EbayFileInputHeader>
        <EbayFileInputSubheader>Supported formats: .jpg, .png</EbayFileInputSubheader>
        <span>Click or drag files here to upload</span>
    </EbayFileInput>
);

export const WithPreviewCards: StoryFn<typeof EbayFileInput> = (args) => {
    const [files, setFiles] = useState<File[]>([]);

    const handleInput = (_, data) => {
        setFiles(files.concat(Array.from(data.files)));
    };

    const handleDelete: FilePreviewCardActionHandler = (_, data) => {
        setFiles([...files.slice(0, data!.index), ...files.slice(data!.index + 1)]);
    };

    return (
        <>
            <EbayFileInput {...args} onInput={handleInput}>
                <EbayFileInputHeader>Custom Header</EbayFileInputHeader>
                <span>Click or drag files here to upload</span>
            </EbayFileInput>

            <EbayFilePreviewCardGroup onDelete={handleDelete} onCancel={handleDelete}>
                {files.map((file, i) => (
                    <EbayFilePreviewCard key={i} file={file} deleteText="Delete" a11yCancelUploadText="Cancel upload" />
                ))}
            </EbayFilePreviewCardGroup>
        </>
    );
};

export const WithMockUploads: StoryFn<typeof EbayFileInput> = (args) => {
    const [files, setFiles] = useState<[File, string?][]>([]);

    const handleInput: FileInputHandler = (_, data) => {
        const fileList = Array.from(data!.files);
        setFiles(files.concat(fileList.map((file) => [file, undefined])));

        fileList.forEach(async (file, index) => {
            await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000));
            setFiles((prevFiles) => [
                ...prevFiles.slice(0, index),
                [file, `https://fakeurl.com/${Math.random().toString(36).substring(7)}`],
                ...prevFiles.slice(index + 1),
            ]);
        });
    };

    const handleDelete: FilePreviewCardActionHandler = (_, data) => {
        setFiles([...files.slice(0, data!.index), ...files.slice(data!.index + 1)]);
    };

    return (
        <>
            <EbayFileInput multiple {...args} onInput={handleInput}>
                <EbayFileInputHeader>
                    <p>Multiple files</p>
                </EbayFileInputHeader>
                <span>Browse files</span>
            </EbayFileInput>

            <EbayFilePreviewCardGroup onDelete={handleDelete} onCancel={handleDelete}>
                {files.map(([file, url], i) => (
                    <EbayFilePreviewCard
                        key={i}
                        file={file}
                        deleteText="Delete"
                        status={!url ? "uploading" : undefined}
                        a11yCancelUploadText="Cancel upload"
                    />
                ))}
            </EbayFilePreviewCardGroup>
        </>
    );
};
