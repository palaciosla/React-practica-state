import React, {useState} from 'react';
import TextInput from './TextInput';
import TextResult from './TextResult';
import getAction from './helpers/getAction';
import './TextEditor.css'

function TextEditor(props) {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.id)
        setResult(getAction(value,e.target.id))
    }

    // console.log(value)

    return ( 
        <div className='text-editor'>
            <h2>Editor de Texto</h2>
            <TextInput handleSubmit={handleSubmit} handleChange={handleChange} value={value}/>
            <TextResult result={result}/>
        </div>
     );
}

export default TextEditor;