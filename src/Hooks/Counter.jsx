import React, {useState, useEffect} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const [fullName, setFullName] = useState({ name: 'name', familyName: 'family' });
    const [title, setTitle] = useState('useEffect() in Hooks');

    useEffect(() => {
         console.log('useEffect has been called!');
         setFullName({ name: 'Chris P.', familyName: 'Bacon' });
     });


    useEffect(()=>{
        document.title = `Clicked ${count} times`;
        return( () => console.log(`Final: ${count}`));
    });

    return (
        <>
            <p>You have clicked the button {count} times</p>
            <button onClick={()=>setCount(count => count+1)}> Click me </button>

            <div>
             <h1>Title: {title}</h1>
             <h3>Name: <i>{fullName.name}</i></h3>
             <h3>Family Name: <i>{fullName.familyName}</i></h3>
             <hr/>
             <h4>Welcome, {fullName.name} {fullName.familyName}</h4>
         </div>
        </>
    );

    
}

export default Counter;