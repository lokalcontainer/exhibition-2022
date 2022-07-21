import { useFont } from "context/ContextFont";
import texts from "libs/texts.json";

export default function TextNavigation() {
    const { setFontFamily, fontFamily } = useFont();

    return (
        <nav
            style={{
                position: "fixed",
                left: "50%",
                top: "4em",
                transform: "translateX(-50%)",
                zIndex: 2000
                // backgroundColor: "red"
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
                {texts.map((item, i) => (
                    <li key={i}>
                        <button
                            style={{
                                fontFamily: "inherit",
                                background: "none",
                                margin: 0,
                                padding: "1em",
                                border: "3px solid",
                                cursor: "pointer",
                                color: "#f5f5f5",
                                backgroundColor: fontFamily === item.family ? "#0000ff" : "#151515",
                                borderRadius: "2em",
                                overflow: "hidden"
                            }}
                            onClick={() => setFontFamily(item.family)}
                        >
                            <span style={{ fontSize: "3em", fontWeight: 200 }}>{item.family}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
