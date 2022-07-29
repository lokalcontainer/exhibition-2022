import { useFont } from "context/ContextFont";

export default function TextNavigation() {
    const { fonts, font, setFont } = useFont();

    return (
        <nav
            style={{
                position: "fixed",
                left: "50%",
                top: "4em",
                transform: "translateX(-50%)",
                zIndex: 2000
            }}
        >
            <ul
                style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "1em"
                }}
            >
                {fonts.map((item, i) => (
                    <li key={i}>
                        <button
                            style={{
                                fontSize: "inherit",
                                width: "8em",
                                height: "6em",
                                fontFamily: `"${item.family}"`,
                                fontVariationSettings: `"wght" 400, "wdth" 400`,
                                background: "none",
                                margin: 0,
                                border: `1px solid ${
                                    item !== font ? font.misc.foreground : "transparent"
                                }`,
                                cursor: "pointer",
                                backgroundColor:
                                    item === font ? item.misc.foreground : font.misc.background,
                                color: item === font ? item.misc.background : font.misc.foreground,
                                borderRadius: "1em",
                                overflow: "hidden",
                                whiteSpace: "pre-wrap",
                                lineHeight: 0.7,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow:
                                    item === font
                                        ? `0 0 2em 0 ${font.misc.foreground}`
                                        : `inset 0 0 0.3em 0 ${font.misc.foreground}`
                            }}
                            onClick={() => setFont(item)}
                        >
                            <span style={{ fontSize: "1.5em" }}>
                                {item.text.split(" ").join("\n")}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
