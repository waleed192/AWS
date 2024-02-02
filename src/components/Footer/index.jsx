import './style.css'

const Footer = () => {

    const scrollTo = (id) => {
        if (typeof document !== 'undefined') {
            const elm = document.getElementById(id);
            elm.scrollIntoView({ block: "start", behavior: "smooth" });
            
        }
    }

    return <div className="footer-container">
        <div className="first"><div>Waleed Massadeh</div></div>
        <ul className='label-container footer-nav'>
            <label className='nav-label' onClick={() => scrollTo("about")}>About</label>
            <label className='nav-label' onClick={() => scrollTo("skills")}>Skills</label>
            <label className='nav-label' onClick={() => scrollTo("experience")}>Experience</label>
            <label className='nav-label' onClick={() => scrollTo("education")}>Education</label>
        </ul>
        <p style={{fontSize: '16px'}}>© 2024 Waleed Massadeh. All rights reserved.</p>
    </div>
}
export default Footer