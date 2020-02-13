import React from 'react'

const CogCard = (props) => {
    return(
        <>
            <div className="cog-card-wrapper">
                <h3><b>Server Name:</b> <i>{props.inv.name}</i></h3>
                <div className="cog-card">
                        <p><b>Population:</b> <br/><i>{props.inv.population}</i></p>
                        <p><b>Cogs Attacking:</b> <br/><i>{props.inv.cogs_attacking}</i></p>
                        <p><b>Count Defeated:</b> <br/><i>{props.inv.count_defeated}</i></p>
                        <p><b>Count Total:</b> <br/><i>{props.inv.count_total}</i></p>
                        <p><b>Remaining Time:</b> <br/><i>{props.inv.remaining_time}</i></p>
                </div>
            </div>
        </>
    )
}

export default CogCard