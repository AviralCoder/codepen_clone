import React from "react";

const Navbar = ({ title }) => {
    return (
        <section className="navbar">
            <h1>{title}</h1>

            <a href="https://github.com/AviralCoder/codepen_clone">
                <button>View On Github</button>
            </a>
        </section>
    );
};

export default Navbar;
