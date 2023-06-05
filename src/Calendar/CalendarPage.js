import React, { useState } from "react";
import Calendar from 'react-calendar';
import moment from 'moment';
import './CalendarPage.css';
// import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState([
        { title: "Event 1", date: "2023-05-30", url: "www.notreal.com", startTime: "2023-05-30T10:00:00", endTime:"2023-05-30T11:00:00", classID: 1, tutorID: 1 },
        { title: "Event 2", date: "2023-05-31", url: "www.notreal.com", startTime: "2023-05-31T10:00:00", endTime:"2023-05-31T11:00:00", classID: 2, tutorID: 2 },
        { title: "Event 3", date: "2023-06-01", url: "www.notreal.com", startTime: "2023-06-01T10:00:00", endTime:"2023-06-01T11:00:00", classID: 3, tutorID: 3 },
        { title: "Event 4", date: "2023-05-02", url: "www.notreal.com", startTime: "2023-05-02T10:00:00", endTime:"2023-05-02T11:00:00", classID: 4, tutorID: 4 },
        { title: "Event 5", date: "2023-07-01", url: "www.notreal.com", startTime: "2023-07-01T10:00:00", endTime:"2023-07-01T11:00:00", classID: 5, tutorID: 5 }
    ]);

    const tileContent = ({ date, view }) => {
        const formatDate = moment(date).format('YYYY-MM-DD');
        const dailyEvents = events.filter(event => moment(event.date).format('YYYY-MM-DD') === formatDate);

        //Add 
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
                selectable
                className="my-calendar"
                onChange={setDate}
                value={date}
                tileContent={tileContent}
                onSelectEvent={(event) => {
                    events(event);
                }}
            />
        </div>
    );
};

export default CalendarPage;

/**
 * using postman (not tested with backend yet):
 */
// import React, { useState, useEffect } from "react";
// import Calendar from 'react-calendar';
// import moment from 'moment';
// import './CalendarPage.css';

// const CalendarPage = () => {
//     const [date, setDate] = useState(new Date());
//     const [events, setEvents] = useState([]);

//     useEffect(() => {
//         const fetchEvents = async () => {
//             const response = await fetch('http://your-php-backend-url.com/api/events');
//             const data = await response.json();
//             setEvents(data);
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

/**
 * Using axios:
 */
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