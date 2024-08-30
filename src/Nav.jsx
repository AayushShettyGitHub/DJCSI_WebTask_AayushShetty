
import './index.css';

const Nav = () => {
    return (
        <header className="header">
            <div className="figure">
            <img src="code.jfif" />
                <h1>DJS CODESTARS</h1>
            </div>
            <nav>
                <ul className="nav-list">
                    <li><a href="/" className="nav-link">Home</a></li>
                    <li><a href="#about-us" className="nav-link">About</a></li>
                    <li><a href="#contact-us" className="nav-link">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
