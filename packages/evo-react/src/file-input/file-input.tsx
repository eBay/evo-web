import { useId, useState } from "react";
import type { ComponentProps } from "react";
import classNames from "classnames";
import { FileInputProvider } from "./context";
import { EvoIconUpload24 } from "../icon/icons/upload-24";
import type { EvoFileInputProps } from "./types";
import "@ebay/skin/file-input.mjs";

export function EvoFileInput({
  children,
  className,
  id,
  ref,
  onDragEnter,
  onDragOver,
  onDragLeave,
  onDrop,
  style,
  ...rest
}: EvoFileInputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [dragging, setDragging] = useState(false);

  const handleDragEnter: ComponentProps<"input">["onDragEnter"] = (e) => {
    setDragging(true);
    onDragEnter?.(e);
  };

  const handleDragOver: ComponentProps<"input">["onDragOver"] = (e) => {
    setDragging(true);
    onDragOver?.(e);
  };

  const handleDragLeave: ComponentProps<"input">["onDragLeave"] = (e) => {
    setDragging(false);
    onDragLeave?.(e);
  };

  const handleDrop: ComponentProps<"input">["onDrop"] = (e) => {
    setDragging(false);
    onDrop?.(e);
  };

  return (
    <FileInputProvider inputId={inputId}>
      <div className={classNames("file-input", className)} style={style}>
        <div
          className={classNames(
            "file-input__container",
            dragging && "file-input___container--dragged-over",
          )}
        >
          <div className="file-input__upload-icon">
            <EvoIconUpload24 />
          </div>
          <div className="file-input__content">{children}</div>
        </div>
        <input
          {...rest}
          ref={ref}
          id={inputId}
          type="file"
          className="file-input__input"
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        />
      </div>
    </FileInputProvider>
  );
}
