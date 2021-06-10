import React,{useRef,useState} from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import "./calendar.css";
import AddEventModal from "./AddEventModal"
// import { Form } from 'react-bootstrap';
// import AddItem from './Additem';



const Calendar = () => {
  // const [state,setState]=useState( [
  //   { title: 'event 1', date: '2021-05-16' },
  //   { title: 'event 2', date: '2021-05-17' }
  // ]
  // );
 const calendarRef = useRef(null);
  
  const onEventAdded=(event)=>{
    let calendarApi = calendarRef.current.getApi()
    calendarApi.addEvent(event)
  }
  const [modalOpen, setModalOpen] = useState(false)
  // const editstate=(data)=>{
  //   setState([data]);
  //   console.log(state);
  //   return state;
  // }
  
  // const nameshandler=()=>{
  //   return state;
  // }
  return (
    <div className="eventcalendar container">
      
         
         <button onClick={()=>setModalOpen(true)}>Add event</button>
         
           <div style={{position:"relative",zIndex: 0}}>
           <FullCalendar
                plugins={[ dayGridPlugin ]}
                ref={calendarRef}
                initialView="dayGridMonth"       
      />
           </div>
      <AddEventModal isOpen={modalOpen} onClose={()=>setModalOpen(false)} onEventAdded={event =>onEventAdded(event)}/>
{/* <AddItem  editstate={editstate}/> */}      
        </div>
  )
}

export default Calendar

 



