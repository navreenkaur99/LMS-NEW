import React, { useState, useEffect } from 'react';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminNavbar from "./AdminNavbar"
import { Table } from 'react-bootstrap';
export default function Dashboard() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch("http://localhost:4000/getAlluser")
            .then((res) => res.json())
            .then((data) => {
                setData(data.data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    const deleteUser = (id, name) => {
        if (window.confirm(`Are you sure you want to delete ${name}?`)) {
            fetch("http://localhost:4000/deleteuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userid: id })
            })
            .then((res) => res.json())
            .then((data) => {
                alert(data.data);
                fetchData(); // Refresh data after deletion
            })
            .catch(error => console.error('Error deleting user:', error));
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = data.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
             <AdminNavbar/>
                 <h3>Welcome Admin</h3>
            <h6>User List</h6>
      
            <input
            style={{width:"600px",marginBottom:"20px"}}
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearch}
            />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Table striped bordered hover width="800" style={{ border: '2px solid black' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black' }}>ID</th>
                            <th style={{ border: '1px solid black' }}>Name</th>
                            <th style={{ border: '1px solid black' }}>Email</th>
                            <th style={{ border: '1px solid black' }}>User Type</th>
                            <th style={{ border: '1px solid black' }}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((user) => (
                                <tr key={user._id}>
                                    <td style={{ border: '1px solid black' }}>{user._id}</td>
                                    <td style={{ border: '1px solid black' }}>{user.name}</td>
                                    <td style={{ border: '1px solid black' }}>{user.email}</td>
                                    <td style={{ border: '1px solid black' }}>{user.userType}</td>
                                    <td style={{ border: '1px solid black' }}>
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            onClick={() => deleteUser(user._id, user.name)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No users found.</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            )}
        </div>
    );
}



// // Frontend: Dashboard component

// import React, { useState, useEffect } from 'react';
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// export default function Dashboard() {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = () => {
//         fetch("http://localhost:4000/getAlluser")
//             .then((res) => res.json())
//             .then((data) => {
//                 setData(data.data);
//                 setLoading(false);
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     };

//     const deleteUser = (id, name) => {
//         if (window.confirm(`Are you sure you want to delete ${name}?`)) {
//             fetch("http://localhost:4000/deleteuser", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ userid: id })
//             })
//             .then((res) => res.json())
//             .then((data) => {
//                 alert(data.data);
//                 fetchData(); // Refresh data after deletion
//             })
//             .catch(error => console.error('Error deleting user:', error));
//         }
//     };

//     return (
//         <div style={{backgroundColor:"rgb(203, 223, 245)"}}>
//             <h1>User List</h1>
//             <h3>Welcome Admin</h3>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <table width="1000" style={{ border: '2px solid black' }}>

//                  {/* <table width="1000" border="2" bordercolor="blue" border-style="solid"> */}
//                     <thead>
//                         <tr>
//                             <th style={{ border: '1px solid black' }}>ID</th>
//                             <th style={{ border: '1px solid black' }}>Name</th>
//                             <th style={{ border: '1px solid black' }}>Email</th>
//                             <th style={{ border: '1px solid black' }}>User Type</th>
//                             <th style={{ border: '1px solid black' }}>Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.length > 0 ? (
//                             data.map((user) => (
//                                 <tr key={user._id}>
//                                     <td style={{ border: '1px solid black' }}>{user._id}</td>
//                                     <td style={{ border: '1px solid black' }}>{user.name}</td>
//                                     <td style={{ border: '1px solid black' }}>{user.email}</td>
//                                     <td style={{ border: '1px solid black' }}>{user.userType}</td>
//                                     <td style={{ border: '1px solid black' }}>
//                                         <FontAwesomeIcon
//                                             icon={faTrash}
//                                             onClick={() => deleteUser(user._id, user.name)}
//                                             style={{ cursor: 'pointer' }}
//                                         />
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="5">No users found.</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// }



// import React, { useState, useEffect } from 'react';
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// export default function Dashboard() {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = () => {
//         fetch("http://localhost:4000/getAlluser")
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data, "userdata");
//                 setData(data.data);
//                 setLoading(false);
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     };

//     const deleteUser = (id, name) => {
//         if (window.confirm(`Are you sure you want to delete ${name}?`)) {
//             fetch("http://localhost:4000/deleteuser", {
//                 method: "POST",
//                 body: JSON.stringify({ userid: id })
//             })
//             .then((res) => res.json())
//             .then((data) => {
//                 // console.log(data, "userdata");
//                 alert(data.data);
//                 // Refresh data after deletion
//                 fetchData();
//             })
//             .catch(error => console.error('Error deleting user:', error));
//         }
//     };

//     return (
//         <div>
//             <h1>User List</h1>
//             <h3>Welcome Admin</h3>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 // <table width="1000" border="2">
//                 //     <thead>
//                 //         <tr>
//                 //             <th>ID</th>
//                 //             <th>Name</th>
//                 //             <th>Email</th>
//                 //             <th>User Type</th>
//                 //             <th>Delete</th>
//                 //         </tr>
//                 //     </thead>
//                 //     <tbody>
//                 //         {data.length > 0 ? (
//                 //             data.map((user) => (
//                 //                 <tr key={user._id}>
//                 //                     <td>{user._id}</td>
//                 //                     <td>{user.name}</td>
//                 //                     <td>{user.email}</td>
//                 //                     <td>{user.userType}</td>
//                 //                     <td>
//                 //                         <FontAwesomeIcon
//                 //                             icon={faTrash}
//                 //                             onClick={() => deleteUser(user._id, user.name)}
//                 //                             style={{ cursor: 'pointer' }}
//                 //                         />
//                 //                     </td>
//                 //                 </tr>
//                 //             ))
//                 //         ) : (
//                 //             <tr>
//                 //                 <td colSpan="5">No users found.</td>
//                 //             </tr>
//                 //         )}
//                 //     </tbody>
//                 // </table>
//                 <table width="1000" border="2" bordercolor="blue" border-style="solid">
//     <thead>
//         <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>User Type</th>
//             <th>Delete</th>
//         </tr>
//     </thead>
//     <tbody>
//         {data.length > 0 ? (
//             data.map((user) => (
//                 <tr key={user._id}>
//                     <td>{user._id}</td>
//                     <td>{user.name}</td>
//                     <td>{user.email}</td>
//                     <td>{user.userType}</td>
//                     <td>
//                         <FontAwesomeIcon
//                             icon={faTrash}
//                             onClick={() => deleteUser(user._id, user.name)}
//                             style={{ cursor: 'pointer' }}
//                         />
//                     </td>
//                 </tr>
//             ))
//         ) : (
//             <tr>
//                 <td colSpan="5">No users found.</td>
//             </tr>
//         )}
//     </tbody>
// </table>

//             )}
//         </div>
//     );
// }



// import React, { useState, useEffect } from 'react';
// import { faTrash } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// export default function Dashb() {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         fetch("http://localhost:4000/getAlluser",{
//             method :"GET"
//         }
//     )
//     .then((res)=> res.json()).then((data)=>{
//         console.log(data, "userdata")
//         setData(data.data);
//     })
// },[])
// const deleteuser = ( id,name) =>{
//    if(window.confirm(`are you sure you want to delete ${name}`)){
//     fetch("http://localhost:4000/deleteuser",{
//         method :"POST",
//     body:JSON.stringify({
//        userid: id
//     })
//     }

// )
// .then((res)=> res.json()).then((data)=>{
//     console.log(data, "userdata")
//     alert(data.data);
// })
// } else{

//     }
//    }

//     return (
//         <div>
//             <h1>User List</h1>
//           <h3>Welcom Admin</h3>
// <table width={"1000"}  border={"2"}>
// <tr border={"2"}>
// <th>ID</th>
// <th>Name</th>
// <th>Email</th>
// <th>User Type</th>
// <th>Delete</th>
// </tr>
// {data.map((i)  => {
// return(
// <tr  border={"2"}>
// <td>{i._id}</td>
// <td>{i.name}</td>
// <td>{i.email}</td>
// <td>{i.userType}</td>
// <td> < FontAwesomeIcon icon={faTrash} onClick={()=> deleteuser(i._id,i.name)}/></td>
// </tr>
// )
// })}
// </table>
//         </div>
//     );
// }
