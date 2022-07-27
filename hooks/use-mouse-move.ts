import type { RefObject } from "react";
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

    const handlePointer = (e: PointerEvent) => {
        const { clientX, clientY } = e;
        setState((state) => ({
            ...state,
            x: clientX,
            y: clientY
        }));
    };

    const handleTouch = (e: TouchEvent) => {
        const x = e.changedTouches[0].clientX;
        const y = e.changedTouches[0].clientY;
        setState((prev) => ({ ...prev, x, y }));
    };

    // Used by Standard Mice
    useEffect(() => {
        if (typeof window === "undefined") return;
        const node = element ? element.current : document.documentElement;
        if (!node) return;

        node.addEventListener("pointermove", handlePointer);
        return () => {
            node.removeEventListener("pointermove", handlePointer);
        };
    }, []);

    // Used by Leap Motion
    useEffect(() => {
        if (typeof window === "undefined") return;
        const node = element ? element.current : document.documentElement;
        if (!node) return;

        node.addEventListener("touchmove", handleTouch);

        return () => {
            node.removeEventListener("touchmove", handleTouch);
        };
    }, []);

    return { x: state.x, y: state.y };
}
