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
                    gap: "1em"
                }}
            >
                {fonts.map((item, i) => (
                    <li key={i}>
                        <button
                            style={{
                                fontFamily: "inherit",
                                background: "none",
                                margin: 0,
                                padding: "1em",
                                border: "3px solid currentColor",
                                cursor: "pointer",
                                color: item === font ? item.misc.background : item.misc.foreground,
                                backgroundColor:
                                    item === font ? item.misc.foreground : item.misc.background,
                                borderRadius: "2em",
                                overflow: "hidden",
                                whiteSpace: "nowrap"
                            }}
                            onClick={() => setFont(item)}
                        >
                            <span style={{ fontSize: "2em" }}>{item.family}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
