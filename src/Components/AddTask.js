import React, { useState } from "react";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@material-ui/core/TextField';


const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault()
    if (!task) {
      alert("Please fill this field");
      return
    }
    onAdd({ task, date, reminder });
    setTask('')
    setDate('')
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control" >
        <label>Add Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={task}
          onChange={(e) => 
            setTask(e.target.value)}
        />
      </div>


      <div className="form-control">
      <label> Add your date
        Date</label>
      <TextField style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}
        type="date"
        value={date}
        placeholder="Add Date"
        defaultValue=""
         InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>

      {/* <div className="form-control">
        <label>Date and Time</label>
        < DatePicker />
        <input 
          type="text"
          placeholder="Add Date and Time"
          value={date}
          onChange={(e) => 
            setDate(e.target.value)
          }
        />
       
      </div> */}
      
      <div className="form-control-check" >
        <label style={{ padding: '5px' }}>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => 
            setReminder(e.currentTarget.checked)
          }
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
