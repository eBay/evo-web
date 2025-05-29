import { useEffect, useState } from "react";

export const randomId = (): string => Math.random().toString(16).slice(-4);

export const useRandomId = (): string => {
    const [id, setId] = useState("");

    useEffect(() => {
        setId(randomId());
    }, []);

    return id;
};
