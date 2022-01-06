import React from 'react';

function TextResult(props) {
    let styles = {
        resize: "none",
        backgroundColor: "#fff",
        padding: "2rem",
        margin: "1rem"
    }
    return ( 
        <div className='result'>
            <textarea style={styles} value={props.result} disabled={true}></textarea>
        </div>
     );
}

export default TextResult;