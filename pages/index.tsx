import TextView from "Components/TextView";
import TextNavigation from "Components/TextNavigation";

export default function Page() {
    return (
        <>
            <div
                id="__text_view"
                style={{
                    height: "100vh",
                    width: "100vw",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#151515",
                    color: "#f5f5f5",
                    overflow: "hidden"
                }}
            >
                <TextView />
            </div>
            <TextNavigation />
        </>
    );
}
