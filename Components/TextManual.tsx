import { useFont } from "context/ContextFont";

export default function TextManual() {
    const { axes, font } = useFont();
    return (
        <div
            style={{
                position: "fixed",
                bottom: "2em",
                left: "50%",
                transform: "translateX(-50%)",
                height: "6em",
                backgroundColor: font.misc.foreground,
                color: font.misc.background,
                borderRadius: "1em",
                padding: "1em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 1em 0 ${font.misc.foreground}`
            }}
        >
            <ul
                style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.65em"
                }}
            >
                {axes.map((item, i) => (
                    <li
                        key={i}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "2fr 3fr 1.5fr",
                            alignItems: "center",
                            textTransform: "uppercase",
                            fontSize: "1.3em"
                        }}
                    >
                        <span style={{ fontFeatureSettings: `"case"` }}>{item.tag}</span>
                        <label style={{ display: "inline-flex" }}>
                            <input
                                type="range"
                                min={item.min}
                                max={item.max}
                                step={1}
                                value={item.value}
                                onChange={() => ({})}
                                style={{
                                    width: "100%",
                                    pointerEvents: "none",
                                    touchAction: "none"
                                }}
                            />
                        </label>
                        <span style={{ fontFeatureSettings: `"tnum"`, textAlign: "right" }}>
                            {item.value}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
