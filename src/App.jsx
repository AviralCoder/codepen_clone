import React from "react";

//hooks import
import { useState, useEffect } from "react";

//css imports
import "./styles/style.css";

//component imports
import Navbar from "./components/Navbar";
import Editor from "./components/Editor";
import { Grid } from "./components/Grid";

const App = () => {
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");

    const [code, setCode] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCode(`
            <html>
                ${html}
                <style>${css}</style>
                <script>${js}</script>
            </html>
        `);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [html, css, js]);

    return (
        <>
            <Navbar title="Code HTML, CSS and JS in your browser!" />

            <Grid>
                <Editor
                    lang="HTML"
                    value={html}
                    onChange={(e) => setHtml(e.target.value)}
                />
                <Editor
                    lang="CSS"
                    value={css}
                    onChange={(e) => setCss(e.target.value)}
                />
                <Editor
                    lang="JS"
                    value={js}
                    onChange={(e) => setJs(e.target.value)}
                />
            </Grid>

            <iframe
                srcDoc={code}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                className="output"
            />
        </>
    );
};

//exports
export default App;
