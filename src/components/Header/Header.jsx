import './Header.css'

const Header = () => {
    return <div className='header' id='about'>
            <div className="container">
                <p className='hello-p'>Hi, I am</p>
                <section className="animation">
                    <div className="first"><div>Waleed Massadeh</div></div>
                    <div className="second"><div>Software Engineer</div></div>
                    <div className="third"><div>Backend Developer</div></div>
                </section>
            </div>

            <p className='about'>
                I am an accomplished Software Engineer with 4-years track record, primarily within the dynamic entertainment sector. My expertise lies in front-end development utilizing NextJS and React, as well as back-end proficiency with NodeJs and Python. In addition, I possess a strong command of database technologies including MySQL and MongoDB.
            </p>

    </div>
}
export default Header