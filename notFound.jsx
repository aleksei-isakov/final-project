import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <p style={{fontSize: 40, margin: 50, textAlign: 'center'}}>404 <br/> Not Found</p>
            <hr/>
            <Link to='/'><p style={{color: 'blue', textAlign: 'center'}}>Return to Pokedex home page</p></Link>
        </div>
    );
};

export default NotFound;