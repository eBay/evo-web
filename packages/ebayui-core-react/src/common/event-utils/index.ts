/*
 * Based on https://github.com/eBay/ebayui-core/edit/master/src/common/event-utils/index.js
 */

import React from "react";
import { Key } from "./types";

type Callback = () => void;

/**
 * Generic keydown handler used by more specific cases
 * @param {Array} keyList: List of acceptable keys
 * @param {KeyboardEvent} e
 * @param {Function} callback
 */
function handleKeydown(keyList: Key[], e: React.KeyboardEvent, callback: Callback = () => {}): void {
    if (keyList.includes(e.key as Key)) {
        callback();
    }
}

// inverse of found keys
function handleNotKeydown(keyList: Key[], e: React.KeyboardEvent, callback: Callback = () => {}): void {
    if (!keyList.includes(e.key as Key)) {
        callback();
    }
}

export function handleEnterKeydown(e: React.KeyboardEvent, callback: Callback): void {
    if (e.key === "Enter") {
        callback();
    }
}

export function handleActionKeydown(e: React.KeyboardEvent, callback: Callback): void {
    if (isActionKey(e.key as Key)) {
        callback();
    }
}

export function isActionKey(key: Key): boolean {
    return [" ", "Enter"].includes(key);
}

export function handleEscapeKeydown(e: React.KeyboardEvent, callback: Callback): void {
    handleKeydown(["Esc", "Escape"], e, callback);
}

export function handleUpDownArrowsKeydown(e: React.KeyboardEvent, callback: Callback): void {
    handleKeydown(["Up", "ArrowUp", "Down", "ArrowDown"], e, callback);
}

export function handleLeftRightArrowsKeydown(e: React.KeyboardEvent, callback: Callback): void {
    handleKeydown(["Left", "ArrowLeft", "Right", "ArrowRight"], e, callback);
}

// only fire for character input, not modifier/meta keys (enter, escape, backspace, tab, etc.)
export function handleTextInput(e: React.KeyboardEvent, callback: Callback): void {
    const keyList: Key[] = [
        // Edge
        "Esc",
        "Left",
        "Up",
        "Right",
        "Down",
        // Browsers
        "Tab",
        "Enter",
        "Shift",
        "Control",
        "Alt",
        "CapsLock",
        "Escape",
        "ArrowLeft",
        "ArrowUp",
        "ArrowRight",
        "ArrowDown",
        "Meta",
    ];

    handleNotKeydown(keyList, e, callback);
}

export function preventDefaultIfHijax(e: React.KeyboardEvent, hijax: boolean): void {
    if (hijax) {
        e.preventDefault();
    }
}

type Handler = (e: KeyboardEvent | Event) => void;

const handlers: Handler[] = [];

export function addEventListener(_: unknown, handler: Handler): void {
    if (handlers.length === 0) {
        window.addEventListener("resize", handleResize);
    }
    handlers.push(handler);
}
export function removeEventListener(_: unknown, handler: Handler): void {
    if (handlers.length === 1) {
        window.removeEventListener("resize", handleResize);
    }
    handlers.splice(handlers.indexOf(handler), 1);
}
export function handleResize(e: KeyboardEvent | Event): void {
    window.removeEventListener("resize", handleResize);
    const callback = () => {
        if (handlers.length) {
            handlers.forEach((handler) => handler(e));
            window.addEventListener("resize", handleResize);
        }
    };
    if (window.requestAnimationFrame) {
        window.requestAnimationFrame(callback);
    } else {
        window.setTimeout(callback, 16);
    }
}

export function wrapEvent(parentEventHandler: Handler = () => {}, localEventHandler: Handler) {
    return (e: KeyboardEvent): void => {
        parentEventHandler(e);
        if (!e.defaultPrevented) {
            return localEventHandler(e);
        }
    };
}
