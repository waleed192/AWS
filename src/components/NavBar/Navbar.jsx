import './Navbar.css';

const NavBar = () => {

    const scrollTo = (id) => {
        if (typeof document !== 'undefined') {
            const elm = document.getElementById(id);
            elm.scrollIntoView();
        }
    }

    return <nav className="nav-bar">
        <ul className='label-container'>
            <label className='nav-label' onClick={() => scrollTo("about")}>About</label>
            <label className='nav-label' onClick={() => scrollTo("skills")}>Skills</label>
            <label className='nav-label' onClick={() => scrollTo("experience")}>Experience</label>
            <label className='nav-label' onClick={() => scrollTo("education")}>Education</label>
        </ul>

    </nav>
}
export default NavBar;
