import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarX({ dateFilter }) {
    const [value, onChange] = useState(new Date());
    const [show, setShow] = useState(false)


    return (
        <>
            <button className='px-10 py-4 bg-purple-600 text-white mx-6' onClick={() => show ? setShow(false) : setShow(true)} >Date</button>
            <div className={`absolute right-1 z-10 ${show ? null : "hidden"}`}>
                <Calendar returnValue="range" selectRange={true} onChange={async (value, event) => {
                    onChange()
                    let dates = await Promise.allSettled(value.map((item, index) => {
                        const inputDate = new Date(item);
                        let day = index === 0 ? parseInt(inputDate.getDate().toString().padStart(2, '0')) - 1 : parseInt(inputDate.getDate().toString().padStart(2, '0')) + 1

                        const formattedDate = `${inputDate.getFullYear()}-${inputDate.getMonth().toString().padStart(2, '0')}-${day}`

                        return (formattedDate);
                    }))

                    dateFilter(dates)

                    setShow(false)
                }
                } value={value} />
            </div>
        </>
    );
}

export default CalendarX;