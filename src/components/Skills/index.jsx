import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'

const Skills = () => {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        axios.get("https://viu7lniwx9.execute-api.us-east-2.amazonaws.com/v1/port-skills")
            .then((res) => setSkills(res.data.response.Items))
            .catch((err) => console.log(err))
    }, [])


    return <div className="div-clip-path main-container" id='skills'>
        <p>Skills</p>
        <div className='box-container'>
            {
                skills?.map((e, index) => {
                    return <div className='div-box' key={index}>
                        {e.SkillName.S
                        }
                    </div>
                })
            }
        </div>


    </div>
}
export default Skills