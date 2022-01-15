import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
// import api from '../config/axiosConfig';
import useAxios from '../utils/useAxios';

const HomePage = () => {
    const [notes, setNotes] = useState([]);
    // const { authTokens, logoutUser } = useContext(AuthContext);
    const api = useAxios();

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        const response = await api.get('/api/notes/');
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: 'Bearer ' + String(authTokens.access)
        //     }
        // });
        // const data = await response.json();

        if (response.status === 200) {
            setNotes(response.data);
        }
    };

    return (
        <div>
            <p>You are logged to the home page!</p>

            <ul>
                {notes.map(note => (
                    <li key={note.id} >{note.body}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
