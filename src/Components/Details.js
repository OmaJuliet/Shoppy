import React, { useState } from "react";
import list from "../data";
import Cards from "./Cards";

const Details = ({ handleClick }) => {
    return (
        <section className="container px-5 py-24 mx-auto">
            <section className="flex flex-wrap -m-4">
                {list.map((item) => (
                    <Cards key={item.id} item={item} handleClick={handleClick} />
                ))}
            </section>
        </section>
    );
};

export default Details;