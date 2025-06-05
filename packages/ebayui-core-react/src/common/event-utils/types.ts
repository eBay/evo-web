/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, KeyboardEvent, MouseEvent, FocusEvent, SyntheticEvent } from "react";

type ModifierKeys = "Alt" | "AltGraph" | "Control" | "Shift" | "CapsLock" | "Meta";
// | 'Fn' | 'FnLock' | 'Hyper' | 'NumLock' | 'ScrollLock' | 'Super' | 'Symbol' | 'SymbolLock'
type NavigationKeys =
    | "ArrowDown"
    | "ArrowLeft"
    | "ArrowRight"
    | "ArrowUp"
    | "Enter"
    | "Tab"
    | " "
    | "Escape"
    | "End"
    | "Home"
    | "PageDown"
    | "PageUp";
type NavigationKeysEdge = "Down" | "Left" | "Right" | "Up" | "Esc";
// type FunctionKeys = 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' |
// 'F13' | 'F14' | 'F15' | 'F16' | 'F17' | 'F18' | 'F19' | 'F20' | 'Soft1' | 'Soft2' | 'Soft3' | 'Soft4'
// type NumericKeypadKeys = 'Decimal' | 'Key11' | 'Key12' | 'Multiply' | 'Add' | 'Clear' | 'Divide' | 'Subtract' |
// 'Separator' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

export type Key = ModifierKeys | NavigationKeys | NavigationKeysEdge;

type BaseEventHandler<E extends SyntheticEvent<any>, P> = (event: E, props?: P) => void;

export type EbayEventHandler<ElementType = Element, PropsObject = Record<string, any>> = BaseEventHandler<
    SyntheticEvent<ElementType>,
    PropsObject
>;
export type EbayMouseEventHandler<ElementType = Element, PropsObject = Record<string, any>> = BaseEventHandler<
    MouseEvent<ElementType>,
    PropsObject
>;
export type EbayKeyboardEventHandler<ElementType = Element, PropsObject = Record<string, any>> = BaseEventHandler<
    KeyboardEvent<ElementType>,
    PropsObject
>;
export type EbayChangeEventHandler<ElementType = Element, PropsObject = Record<string, any>> = BaseEventHandler<
    ChangeEvent<ElementType>,
    PropsObject
>;
export type EbayFocusEventHandler<ElementType = Element, PropsObject = Record<string, any>> = BaseEventHandler<
    FocusEvent<ElementType>,
    PropsObject
>;
/*
    type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent<T>>;
    type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent<T>>;
    type DragEventHandler<T = Element> = EventHandler<DragEvent<T>>;
    type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;
    type TouchEventHandler<T = Element> = EventHandler<TouchEvent<T>>;
    type PointerEventHandler<T = Element> = EventHandler<PointerEvent<T>>;
    type UIEventHandler<T = Element> = EventHandler<UIEvent<T>>;
    type WheelEventHandler<T = Element> = EventHandler<WheelEvent<T>>;
    type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent<T>>;
    type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent<T>>;
*/
