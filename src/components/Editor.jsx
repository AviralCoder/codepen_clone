import React from "react";
import Prism from "prismjs";
import "../styles/prism.css";

const Editor = ({ lang, value, onChange }) => {
    return (
        <div className="editor">
            <h1>{lang}</h1>
            <textarea
                value={value}
                onChange={onChange}
                onKeyDown={(e) => {
                    if (e.key === "Tab") {
                        e.preventDefault();
                    }
                }}
            ></textarea>
        </div>
    );
};

export default Editor;
