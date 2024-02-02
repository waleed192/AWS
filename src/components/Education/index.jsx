import axios from "axios";
import { useEffect, useState } from "react";

const Education = () => {

    const [edu,  setEdu] = useState([]);

    useEffect(() => {
        axios.get("https://viu7lniwx9.execute-api.us-east-2.amazonaws.com/v1/port-education")
            .then((res) => setEdu(res.data.response.Items))
            .catch((err) => console.log(err))
    }, [])
    console.log(edu);

    return <div className="div-clip-path main-container" id="education">
        <p>Education</p>
        <div className="timeline">
            <div className="outer">
                {edu?.map((e, index) => {
                    return  <div className="card" key={index}>
                    <div className="info">
                        <h3 className="title">{e.uniName.S}</h3>
                        <p className='year'>{e["date "].S}</p>
                    </div>
                </div>
                })}
            </div>
        </div>
    </div>
}
export default Education