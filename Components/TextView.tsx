import { useEffect } from "react";
import { useFont } from "context/ContextFont";
import useMouseMove from "hooks/use-mouse-move";
import texts from "libs/texts.json";

export default function TextView() {
    const { fontFamily, axes, setAxes } = useFont();

    const { x, y } = useMouseMove();

    useEffect(() => {
        const doc = document.documentElement;

        const width = doc.clientWidth;
        const height = doc.clientHeight;
        const left = doc.clientLeft;
        const top = doc.clientTop;

        const newX = (x - left) / width;
        const newY = (y - top) / height;
        const _x = newX * 600;
        const _y = newY * 600;

        const parseWGHT = parseInt(_x.toFixed(0));
        const parseWDTH = parseInt(_y.toFixed(0));

        setAxes((prev) => {
            const wght = prev.find((item) => item.tag === "wght");
            const wdth = prev.find((item) => item.tag === "wdth");
            if (wght && wdth) {
                wght.value = parseWGHT;
                wdth.value = parseWDTH;
            }
            return [...prev];
        });
    }, [x, y]);

    const fontVariationSettings = axes.map((item) => `"${item.tag}" ${item.value}`).join(", ");

    return (
        <div
            style={{
                fontSize: "25em",
                fontFamily: `"${fontFamily}"`,
                fontVariationSettings,
                textAlign: "center",
                lineHeight: 0.7,
                whiteSpace: "pre-wrap",
                userSelect: "none",
                pointerEvents: "none"
            }}
        >
            {texts
                .find((item) => item.family === fontFamily)
                ?.text.split(" ")
                .join("\n")}
        </div>
    );
}
