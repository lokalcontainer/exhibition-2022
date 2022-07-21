import {
    createContext,
    useContext,
    PropsWithChildren,
    useState,
    Dispatch,
    SetStateAction,
    useEffect
} from "react";
import useMouseMove from "hooks/use-mouse-move";

type Axis = { tag: string; value: number; min: number; max: number; defaultValue: number };

type ContextFontProps = {
    fontWeight: number;
    setFontWeight: Dispatch<SetStateAction<number>>;

    fontFamily: string;
    setFontFamily: Dispatch<SetStateAction<string>>;

    axes: Axis[];
    setAxes: Dispatch<SetStateAction<Axis[]>>;
};

const ContextFont = createContext<ContextFontProps>(undefined!);
export const useFont = () => useContext(ContextFont);

export const ConsumerFont = ContextFont.Consumer;

export const ProviderFont = (props: PropsWithChildren) => {
    const { children } = props;
    const [fontWeight, setFontWeight] = useState(400);
    const [fontFamily, setFontFamily] = useState("VAR 2");

    const [axes, setAxes] = useState<Axis[]>([
        { tag: "wght", value: 400, min: 100, max: 600, defaultValue: 300 },
        { tag: "wdth", value: 300, min: 100, max: 600, defaultValue: 300 }
    ]);

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

    return (
        <ContextFont.Provider
            value={{ fontWeight, setFontWeight, fontFamily, setFontFamily, axes, setAxes }}
        >
            {children}

            {/* <pre
                style={{
                    position: "fixed",
                    top: "1em",
                    left: "1em",
                    zIndex: 2002,
                    color: "magenta"
                }}
            >
                {JSON.stringify(fontFamily, null, 2)}
            </pre> */}
        </ContextFont.Provider>
    );
};
