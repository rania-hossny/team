import React, {useState} from 'react'
import Modal from "react-modal"
import Datetime from "react-datetime";
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars"

export default function AddEventModal({isOpen,onClose,onEventAdded}){
    const [title, setTitle] = useState("")
    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())
   const onSubmit =(event)=>{
    event.preventDefault();
    onEventAdded({
        title,
        start,
        end
    })
    onClose();
   }
    
    return(
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
                <input placeholder="title" value={title} onChange={e=> setTitle(e.target.value)}/>
                <div>
                    <label>Start Date</label>
                  {/* <Datetime value={start} onChange={date=>setStart(date)} /> */}

                <DateTimePickerComponent placeholder="choose start date and time" onChange={date=>setStart(date.value)}></DateTimePickerComponent>
                </div>

                <div>
                    <label>End Date</label>
                <DateTimePickerComponent placeholder="choose end date and time" onChange={date=>setEnd(date.value)}></DateTimePickerComponent>

                  {/* <Datetime value={end} onChange={date=>setEnd(date)} /> */}

                </div>
                <button>Add event</button>
            </form>
        </Modal>
    )
}
