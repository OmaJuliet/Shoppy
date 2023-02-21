import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import NotLoggedIn from './NotLoggedIn';


const supabase = createClient(
    'https://amlztwycpfhonwfvzhca.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtbHp0d3ljcGZob253ZnZ6aGNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0ODI1NTksImV4cCI6MTk5MDA1ODU1OX0.NqV1vbExN3jpY11rTWPN4fEvEw-m5xjNmHVh2GwGIsI'
);


function Success() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                if (value.data?.user) {
                    console.log(value.data.user)
                    setUser(value.data.user);
                }
            })
        }
        getUserData();
    }, [])


    return (
        <>
            {Object.keys(user).length !== 0 ?
                <>
                    <Home />
                </>
                :
                <>
                    <NotLoggedIn />
                </>
            }
        </>
    );
}

export default Success;
