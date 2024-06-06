import React, { useState } from 'react';
import axios from 'axios';
import style from '../CSS/Ui.module.css'

import AdminNavbar from './AdminNavbar'
 import { Card, CardBody } from 'react-bootstrap';
export default function AdminCards() {
    const [para, setPara] = useState("");
    const [link, setLink] = useState("");
    const [id, setId] = useState("");

 
    const handleChange = (e) => {
        setPara(e.target.value);
    };
    const handleChangeLink = (e) => {
      setLink(e.target.value);
  };
  const handleChangeId = (e) => {
    setId(e.target.value);
};

    const handleClick = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log(para);
        console.log(link);
        console.log(id);

        axios.post("http://localhost:4000/data", {
            para: para,
            link :link,
            id : id
        })
        .then((res) => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err, "err");
        });
    };

    return (
        <div>
             <AdminNavbar/>
          <Card className={style.root}>
            <CardBody className={style.card}>
            <form>
                <label htmlFor="dataInput">Enter Data:</label>
                <input
                    value={para}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="dataInput"
                    name="dataInput"
                    placeholder="Enter course"
                />
                 <input
                    value={link}
                    onChange={handleChangeLink}
                    type="text"
                    className="form-control"
                    id="dataInput"
                    name="dataInput"
                    placeholder="Enter link"
                />
                 <input
                    value={id}
                    onChange={handleChangeId}
                    type="text"
                    className="form-control"
                    id="dataInput"
                    name="dataInput"
                    placeholder="Enter Id"
                />
                <button
                    onClick={handleClick}
                    type="submit"
                    className="btn btn-primary"
                >
                    Add Data
                </button>
            </form>
            </CardBody>

            </Card>
        </div>
    );
}



// import axios from 'axios'
// import React, { useState } from 'react'

// export default function AdminCards() {
//     const [title, setTitle]= useState("")
//      const handleChange = (e) => {
//        setTitle(e.target.value)
//      }
//      const handleClick =() =>{
//       console.log(title)
//       axios.post("http://localhost:4000/data",
//         {
//           title : title
//         }
//       ).then((res)=>{
//         console.log(res.data)
//       }).catch(err => {
//         console.log(err,"err")
//       })
      
//      }
//   return (
//     <div>
//          <label for="dataInput">Enter Data:</label>
//       <input value={title}
//       onChange={handleChange}
//       type="text" class="form-control" id="dataInput" name="dataInput" placeholder="Enter Data"/>
  
//     <button 
//      onClick={handleClick}
//     type="submit" class="btn btn-primary">Add Data</button>

//     </div>
//   )
// }
