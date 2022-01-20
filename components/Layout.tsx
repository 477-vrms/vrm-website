// components/layout.tsx
import ResponsiveAppBar from "./navbar";

export default function Layout({ children }: any) {
    return (
        <div>
            <ResponsiveAppBar style={{position: "sticky"}}/>
            <div style={{maxWidth: 1080, margin: "0 auto"}}>{children}</div>
        </div>
    )
}
