export function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
    fn: F,
    ms: number,
): (...args: Parameters<F>) => void {
    let timer: ReturnType<typeof setTimeout>;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), ms);
    };
}
