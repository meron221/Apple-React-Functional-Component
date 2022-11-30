import React,{useEffect, useState} from 'react'

function RandomUser() {
    const [users, setUsers]= useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            return setUsers(data.results)
        });
    }, []);

    
    applerandom(e) {
        e.preventDefault ();
        return(
<button type="button">Click Here</button>
        )
    }

}

export default RandomUser