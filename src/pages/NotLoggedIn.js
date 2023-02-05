import React from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';




const supabase = createClient(
    'https://amlztwycpfhonwfvzhca.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtbHp0d3ljcGZob253ZnZ6aGNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0ODI1NTksImV4cCI6MTk5MDA1ODU1OX0.NqV1vbExN3jpY11rTWPN4fEvEw-m5xjNmHVh2GwGIsI'
);


const NotLoggedIn = () => {
    const navigate = useNavigate();


    async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        navigate("/")
    }


    return (
        <>
            <section className="relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">User is not logged in</h1>
                        <div className="p-2 w-full">
                            <button onClick={() => { navigate("/") }} className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Go back home</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default NotLoggedIn