import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';

const Experience = () => {
    const [exp,  setExp] = useState([]);

    useEffect(() => {
        axios.get("https://viu7lniwx9.execute-api.us-east-2.amazonaws.com/v1/port-exps")
            .then((res) => setExp(res.data.response.Items))
            .catch((err) => console.log(err))
    }, [])

    return <div className="div-clip-path main-container" id='experience'>
        <p>Experience</p>
        <div className="timeline">
            <div className="outer">
                {exp?.map((e, index) => {
                    return   <div className="card" key={index}>
                    <div className="info">
                        <h3 className="title">{e.company.S}</h3>
                        <p className='year'>{e.date.S}</p>
                        <p className='year'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
                })}
            </div>
        </div>
         </div>
}
export default Experience