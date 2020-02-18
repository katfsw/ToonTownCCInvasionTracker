import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CogCard from './CogCard';

const InvasionTracker = () => {

    const [cog, setCog] = useState([])

    useEffect(()=>{
        axios
        .get("https://corporateclash.net/api/v1/districts.js")
        .then(res=>{
        setCog(res.data)
        })
        .catch(err=>{
        console.log(err)
        })
    },[])

    useEffect(() => {
        let timer = setInterval(() => {
            axios
            .get("https://corporateclash.net/api/v1/districts.js")
            .then(res=>{
            setCog(res.data)
            })
            .catch(err=>{
            console.log(err)
            })
        }, 60000);
        return () => clearInterval(timer);
      }, [])

    
    return(
        <div className="inv-bg">
            <div className="inv-bg">
                <img className="ttcc-logo" src="https://sitecdn.corporateclash.net/logo.png"/>
            </div>
            <h3 className="inv-text"> Currently Active Invasions </h3>
            {
                cog.map(inv=>(
                    <CogCard inv={inv} key={cog.id}/>
                ))
            }
        </div>
    )
}

export default InvasionTracker