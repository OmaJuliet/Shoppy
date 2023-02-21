import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
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
                //value.data.user
                if (value.data?.user) {
                    console.log(value.data.user)
                    setUser(value.data.user);
                }
            })
        }
        getUserData();
    }, [])


    const email = user?.user_metadata?.email;


    async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        navigate("/")
    }

    return (
        <>
            {Object.keys(user).length !== 0 ?
                <>
                {/* <div className="text-center items-center m-auto">
                    <h1 className="text-2xl font-bold mt-16">Successful login</h1>
                    <p>Welcome</p>
                    <button onClick={() => signOutUser()} className="bg-green-500 p-2 mt-8 rounded-lg text-white">Sign out</button>
                </div> */}
                    <Home />
                </>
                :
                <>
                    {/* <h1>User is not logged in</h1>
                    <button onClick={() => { navigate("/") }}>Go back home</button> */}
                    <NotLoggedIn />
                </>
            }
        </>
    );
}

export default Success;
