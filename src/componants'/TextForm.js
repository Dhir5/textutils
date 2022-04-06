import React, { useState } from 'react'

// eslint-disable-next-line react-hooks/rules-of-hooks


export default function TextForm(props) {

    const handleClearText = () => {
        console.log("Clear Text  was clicked");
        let newText = '';

        setText(newText);
    }
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();

        setText(newText);
    }
    const handleLowClick = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();

        setText(newText);
    }

    const handleCopy = () => {
        console.log("Copy  was clicked");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = () => {
        console.log("Remove Extra Space  was clicked");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    //setText("new text");
    return ( <
        >
        <
        div className = "container" >
        <
        h1 > { props.heading } < /h1>  <
        div className = "mb-3" >
        <
        textarea className = "form-control"
        value = { text }
        onChange = { handleOnChange }
        id = "myBox"
        rows = "8" > < /textarea> 

        <
        /div>  <
        button className = "btn btn-danger mx-1"
        onClick = { handleClearText } > Clear Text < /button> <
        button className = "btn btn-primary mx-1"
        onClick = { handleUpClick } > Convert to Upper Case < /button>   <
        button className = "btn btn-dark mx-1"
        onClick = { handleLowClick } > Convert to Lower Case < /button>

        <
        button className = "btn btn-light mx-1"
        onClick = { handleCopy } > Copy Text < /button> <
        button className = "btn btn-secondary mx-1"
        onClick = { handleExtraSpace } > Remove Extra Space < /button>

        <
        /div>

        <
        div className = "container my-3" >
        <
        h1 > Your Text Summery < /h1> <
        p > { text.split(" ").length }
        words and { text.length }
        characters < /p>

        <
        p > { 0.008 * text.split(" ").length }
        Minute to Read < /p>

        <
        h2 > Preview < /h2>

        <
        p > { text.length > 0 ? text : "Enter Something for Preview" } < /p> <
        /div> <
        />
    )
}