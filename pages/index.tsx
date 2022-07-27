import TextView from "Components/TextView";
import TextNavigation from "Components/TextNavigation";
import { useFont } from "context/ContextFont";

export default function Page() {
    const { font } = useFont();
    return (
        <>
            <div
                style={{
                    height: "100vh",
                    width: "100vw",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    backgroundColor: font.misc.background,
                    color: font.misc.foreground
                }}
            >
                <TextView />
            </div>
            <TextNavigation />
        </>
    );
}
