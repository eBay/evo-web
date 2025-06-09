import { Children, ComponentProps, FC, ReactElement, ReactNode } from "react";
import "./array.polyfill.flat"; // for Mobile Safari 11

export function findComponent<T extends FC>(
    nodes: ReactNode = [],
    componentType: T,
): ReactElement<ComponentProps<T>> | null {
    const elements = Children.toArray(nodes) as ReactElement<ComponentProps<T>>[];
    return elements.find(({ type }) => type === componentType) || null;
}

export function excludeComponent<T extends FC>(
    nodes: ReactNode = [],
    componentType: T,
): ReactElement<ComponentProps<T>>[] {
    const elements = Children.toArray(nodes) as ReactElement<ComponentProps<T>>[];
    return elements.filter(({ type }) => type !== componentType);
}

export function filterByType<T extends FC>(
    nodes: ReactNode = [],
    componentType: T | T[],
): ReactElement<ComponentProps<T>>[] {
    const elements = Children.toArray(nodes) as ReactElement<ComponentProps<T>>[];
    const types = [componentType].flat();
    return elements.filter(({ type }) => types.includes(type as T));
}

export function filterBy(nodes: ReactNode = [], predicate: (el: ReactElement) => boolean): ReactElement[] {
    const elements = Children.toArray(nodes) as ReactElement[];
    return elements.filter(predicate);
}
