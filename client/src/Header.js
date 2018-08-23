import React from 'react';

// Functional Component
function Header( props ) {
    /*
        {
            name: '',
            old: ''
        }
    */

    // test.name
    // test.old

    // JSX
    return(
        <div>
            <h2>I am the Header </h2>
            <p>Name: { props.name  }</p>
            <p>Age: { props.old  }</p>
        </div>
    );
};

export default Header;