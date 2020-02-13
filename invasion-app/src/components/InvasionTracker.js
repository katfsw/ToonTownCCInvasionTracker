import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CogCard from './CogCard';

const InvasionTracker = () => {

    const [cog, setCog] = useState([])

    useEffect(()=>{
        axios
        .get("https://corporateclash.net/api/v1/districts.js")
        .then(res=>{
        console.log(res.data)
        setCog(res.data)
        })
        .catch(err=>{
        console.log(err)
        })
    },[])

    return(
        <div className="inv-bg">
            <div className="inv-bg">
                <img className="ttcc-logo" src="https://sitecdn.corporateclash.net/logo.png"/>
            </div>
            {
                cog.map(inv=>(
                    <CogCard inv={inv} key={cog.id}/>
                ))
            }
        </div>
    )
}

export default InvasionTracker