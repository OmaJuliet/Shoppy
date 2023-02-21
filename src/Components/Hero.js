import React from 'react';
import { createClient } from '@supabase/supabase-js';
// import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';
import hero from "../images/hero.jpg";



const supabase = createClient(
    'https://amlztwycpfhonwfvzhca.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtbHp0d3ljcGZob253ZnZ6aGNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0ODI1NTksImV4cCI6MTk5MDA1ODU1OX0.NqV1vbExN3jpY11rTWPN4fEvEw-m5xjNmHVh2GwGIsI'
);


const Hero = () => {
    const navigate = useNavigate();


    async function signOutUser() {
        // const { error } = await supabase.auth.signOut();
        navigate("/")
    }


    return (
        <>
            <section>
                <div className="container mx-auto flex px-5 lg:py-24 py-12 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">MyShopping Paddy</h1>
                        <p className="mb-8 leading-relaxed">The ideal shopping hub for everyone. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="flex justify-center">
                            <button onClick={() => signOutUser()} className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Sign Out</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={hero} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero