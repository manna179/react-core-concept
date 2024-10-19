import { useEffect, useState } from "react"

export default function Users(){
    const [Users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return(
        <div>
            <h3>Users: {Users.length} </h3>
        </div>
    )
}

// declare a state to hold the data
// useEffect with callback & dependency array
// use load data by fetch