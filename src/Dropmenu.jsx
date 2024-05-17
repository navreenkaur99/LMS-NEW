import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function TimerReminder() {
  const [show, setShow] = useState(false);
  const [reminderText, setReminderText] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTimerStarted(false);
  };

  const handleSaveReminder = () => {
    console.log('Reminder saved:', reminderText);
    handleClose();
    setTimerStarted(true);
  };

  useEffect(() => {
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (timerStarted) {
      const timerInterval = setInterval(() => {
        totalSeconds--;

        if (totalSeconds <= 0) {
          clearInterval(timerInterval);
          alert('Time is up!');
        } else {
          const hrs = Math.floor(totalSeconds / 3600);
          const mins = Math.floor((totalSeconds % 3600) / 60);
          const secs = totalSeconds % 60;

          setHours(hrs);
          setMinutes(mins);
          setSeconds(secs);
        }
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [hours, minutes, seconds, timerStarted]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Set Timer Reminder
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Timer Reminder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="reminderForm">
            <Form.Label>Reminder Text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter reminder text"
              value={reminderText}
              onChange={(e) => setReminderText(e.target.value)}
            />
            <Form.Label>Hours</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter hours"
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
            />
            <Form.Label>Minutes</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter minutes"
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
            />
            <Form.Label>Seconds</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter seconds"
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value))}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> 
          <Button variant="primary" onClick={handleSaveReminder}>
            Save Reminder
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TimerReminder;




// import React, { useState, useEffect } from 'react';
// import { Button, Form, Modal } from 'react-bootstrap';

// function TimerReminder() {
//   const [show, setShow] = useState(false);
//   const [reminderText, setReminderText] = useState('');
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);
//   const [timer, setTimer] = useState(null);

//   const handleClose = () => {
//     setShow(false);
//     clearInterval(timer);
//   };

//   const handleShow = () => setShow(true);

//   const handleSaveReminder = () => {
//     console.log('Reminder saved:', reminderText);
//     handleClose();
//     // Here you can send the reminder data to your server for email sending
//   };

//   useEffect(() => {
//     let totalSeconds = hours * 3600 + minutes * 60 + seconds;
//     if (totalSeconds < 0) totalSeconds = 0; // Ensure timer doesn't go negative

//     if (totalSeconds === 0) {
//       clearInterval(timer);
//       alert('Time is up!');
//     }

//     const newTimer = setInterval(() => {
//       setSeconds((prevSeconds) => {
//         if (prevSeconds === 0 && totalSeconds > 0) {
//           totalSeconds--;
//           return 59;
//         } else if (prevSeconds > 0) {
//           return prevSeconds - 1;
//         } else {
//           return prevSeconds;
//         }
//       });
//     }, 1000);
    
//     setTimer(newTimer);

//     return () => clearInterval(newTimer);
//   }, [hours, minutes, seconds]);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Set Timer Reminder
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Timer Reminder</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form.Group controlId="reminderForm">
//             <Form.Label>Reminder Text</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter reminder text"
//               value={reminderText}
//               onChange={(e) => setReminderText(e.target.value)}
//             />
//             <Form.Label>Hours</Form.Label>
//             <Form.Control
//               type="number"
//               placeholder="Enter hours"
//               value={hours}
//               onChange={(e) => setHours(parseInt(e.target.value))}
//             />
//             <Form.Label>Minutes</Form.Label>
//             <Form.Control
//               type="number"
//               placeholder="Enter minutes"
//               value={minutes}
//               onChange={(e) => setMinutes(parseInt(e.target.value))}
//             />
//             <Form.Label>Seconds</Form.Label>
//             <Form.Control
//               type="number"
//               placeholder="Enter seconds"
//               value={seconds}
//               onChange={(e) => setSeconds(parseInt(e.target.value))}
//             />
//           </Form.Group>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSaveReminder}>
//             Save Reminder
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default TimerReminder;



// import React from 'react';

// const Dropmenu = () => {
//   return (
//     <nav id="sidebar" className="bg-light">
//       <div className="sidebar-header">
//         <h3>My Sidebar</h3>
//       </div>
//       <ul className="list-unstyled components">
//         <li>
//           <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
//             Home
//           </a>
//           <ul className="collapse list-unstyled" id="homeSubmenu">
//             <li>
//               <a href="#">Home 1</a>
//             </li>
//             <li>
//               <a href="#">Home 2</a>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <a href="#">About</a>
//         </li>
//         <li>
//           <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
//             Pages
//           </a>
//           <ul className="collapse list-unstyled" id="pageSubmenu">
//             <li>
//               <a href="#">Page 1</a>
//             </li>
//             <li>
//               <a href="#">Page 2</a>
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Dropmenu;
