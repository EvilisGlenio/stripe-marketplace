import Logo from "../Logo";

export default function Header() {
    return (<header className="sticky top-0 z-10 shadow">
        <div className="container ms-auto p-4 flex items-center justify-between">
            <Logo/>
        </div>
    </header>)
}