import React, { useState, useContext } from "react";
import { members } from '../data/member';

// Bước 1: Khởi tạo 1 context API
const PersonContext = React.createContext({});

/* Component ông */
const ContextApi = () => {
    const [people, setPeople] = useState(members);

    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((p) => p.id !== id)
        });
    }

    return (
        /* Bước 2: Khởi tạo 1 provider tại component ông, để wrapper lại component con, và component cháu, chắt */
        <PersonContext.Provider value={{ people, removePerson }}>
            <UserList />
        </PersonContext.Provider>
    )
}

/* Component cha */
const UserList = () => {
    // Bước 3: Sử dụng data từ component ông nội truyền xuống
    const peopleData = useContext(PersonContext);
    console.log('data-from-component-ong-noi', peopleData);
    return (
        <>
            {peopleData.people.map((member, index) => {
                return <SinglePerson key={index} {...member} />
            })}
        </>
    )
}

/* Component cháu */
const SinglePerson = (props) => {
    const { removePerson } = useContext(PersonContext);
    return (
        <>
            <h1>{props.name}</h1>
            <button onClick={() => removePerson(props.id)}>Remove user</button>
            <br />
        </>
    )
}

export default ContextApi;