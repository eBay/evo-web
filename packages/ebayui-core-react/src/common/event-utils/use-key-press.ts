import { useEffect, useState } from "react";

const useKeyPress = (): [boolean, boolean] => {
    const [arrowUpPressed, setArrowUpPressed] = useState(false);
    const [arrowDownPressed, setArrowDownPressed] = useState(false);

    const upHandler = ({ key }) => {
        const fn = {
            ArrowUp: setArrowUpPressed,
            ArrowDown: setArrowDownPressed,
        }[key];

        if (fn) fn(false);
    };

    const downHandler = ({ key }) => {
        const fn = {
            ArrowUp: setArrowUpPressed,
            ArrowDown: setArrowDownPressed,
        }[key];

        if (fn) fn(true);
    };

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);

        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, []);

    return [arrowUpPressed, arrowDownPressed];
};

export default useKeyPress;
