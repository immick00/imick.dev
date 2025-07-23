export default function Navbar() {
    return (
        <header className="bg-[#333333] w-full shadow-lg mb-16">
            <nav className="flex justify-center items-center min-h-18">
                <ul className="flex font-semibold gap-30">
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#skills">Skills</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}