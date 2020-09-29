import React from 'react'

export const JournalEntry = ({id, date, title, body, url }) => {
    console.log(id, date, title, body, url)
    return (
        <div className='journal__entry pointer'>
            <div className='journal__entry-picture'
            style={{
                backgroundSize:'cover',
                backgroundImage:'url(https://www.landuum.com/wp-content/uploads/2019/03/cultura_paisajeiluminado_landuum5.jpg)'
            }}
            >
            </div>
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un nuevo dia
                </p>
                <p className='journal__entry-content'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                make a type specimen book.
                </p>
            </div>
            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}

export default JournalEntry
