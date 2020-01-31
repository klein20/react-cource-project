import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      setTimeout(() => {
        alert('Saved data from cloud!');
      },1000);
      return () => {
        console.log('[Cockpit.js] cleanup use in useEffect');
      }
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup use in 2nd useEffect');
      }
    });


    const assignedclasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
      assignedclasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedclasses.push(classes.bold);
    }


    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedclasses.join(' ')}>This is really working!</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;


