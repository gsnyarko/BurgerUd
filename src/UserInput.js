
import React from 'react';

function UserInput(props) {
    const style = {
        border: '2px solid red',
        width: '300px'  
    }
    
        return (
            <div>
                <input style={style} type="text" onChange={props.changed}/>
            </div>
        );
    
}

export default UserInput;