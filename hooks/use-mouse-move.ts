import type { MouseEvent, RefObject } from "react";
import { useState, useEffect } from "react";

type MoveAxes = {
    x: number;
    y: number;
    cWidth: number;
    cHeight: number;
    cTop: number;
    cLeft: number;
};

export default function useMouseMove<T extends HTMLElement = HTMLDivElement>(
    element?: RefObject<T>
) {
    const [state, setState] = useState<MoveAxes>({
        x: 0,
        y: 0,
        cWidth: 0,
        cHeight: 0,
        cTop: 0,
        cLeft: 0
    });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement, MouseEvent> | globalThis.MouseEvent) => {
        const { clientX, clientY } = e;

        setState((state) => ({
            ...state,
            x: clientX,
            y: clientY
        }));
    };

    useEffect(() => {
        if (typeof window === "undefined") return;
        const node = element ? element.current : document.documentElement;
        if (!node) return;
        node.addEventListener("mousemove", handleMouseMove);
        return () => node.removeEventListener("mousemove", handleMouseMove);
    }, [element]);

    return { x: state.x, y: state.y };
}
