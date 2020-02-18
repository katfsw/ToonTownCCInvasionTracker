import React from 'react'
import moment from 'moment'

var momentDurationFormatSetup = require("moment-duration-format");

const CogCard = (props) => {

    const timeDuration = moment.duration(props.inv.remaining_time, "seconds").format('m')

    return(
        <>
            <div className="cog-card-wrapper">
                <h3><b>Server Name:</b> <i>{props.inv.name}</i></h3>
                <div className="cog-card">
                        <p><b className="cog-text">Population:</b> <br/><i>{props.inv.population}</i></p>
                        <p><b className="cog-text">Cogs Attacking:</b> <br/><i>{props.inv.cogs_attacking}</i></p>
                        <p><b className="cog-text">Count Defeated:</b> <br/><i>{props.inv.count_defeated}</i></p>
                        <p><b className="cog-text">Count Total:</b> <br/><i>{props.inv.count_total}</i></p>
                        <p><b className="cog-text">Remaining Time:</b> <br/><i>{timeDuration} minute(s)</i></p>
                </div>
            </div>
        </>
    )
}

export default CogCard