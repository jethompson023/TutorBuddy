import React, { useState } from "react";
import Calendar from 'react-calendar';
import moment from 'moment';
import './CalendarPage.css';
// import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState([
        { title: "Event 1", date: "2023-05-30" },
        { title: "Event 2", date: "2023-05-31" },
        { title: "Event 3", date: "2023-06-01" },
        { title: "Event 4", date: "2023-05-02" },
        { title: "Event 5", date: "2023-07-01 "}
    ]);

    const tileContent = ({ date, view }) => {
        const formatDate = moment(date).format('YYYY-MM-DD');
        const dailyEvents = events.filter(event => moment(event.date).format('YYYY-MM-DD') === formatDate);

        return (
            <>
                {dailyEvents.map((event, index) => (
                    <p key={index}>{event.title}</p>
                ))}
            </>
        );
    };

    return (
        <div className="calendar-container">
            <Calendar
                className="my-calendar"
                onChange={setDate}
                value={date}
                tileContent={tileContent}
            />
        </div>
    );
};

export default CalendarPage;

// import React, { useState, useEffect } from "react";
// import Calendar from 'react-calendar';
// import axios from 'axios';
// import moment from 'moment';
// import './CalendarPage.css';

// const CalendarPage = () => {
//     const [date, setDate] = useState(new Date());
//     const [events, setEvents] = useState([]);

//     useEffect(() => {
//         const fetchEvents = async () => {
//             const res = await axios.get('http://your-php-backend-url.com/api/events');
//             setEvents(res.data);
//         };

//         fetchEvents();
//     }, []);

//     const tileContent = ({ date, view }) => {
//         const formatDate = moment(date).format('YYYY-MM-DD');
//         const dailyEvents = events.filter(event => moment(event.date).format('YYYY-MM-DD') === formatDate);

//         return (
//             <>
//                 {dailyEvents.map((event, index) => (
//                     <p key={index}>{event.title}</p>
//                 ))}
//             </>
//         );
//     };

//     return (
//         <div>
//             <Calendar
//                 onChange={setDate}
//                 value={date}
//                 tileContent={tileContent}
//             />
//         </div>
//     );
// };

// export default CalendarPage;