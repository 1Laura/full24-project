import React, {useRef} from 'react';

const CreateUser = () => {
    const usernameRef = useRef();
    const ageRef = useRef();
    const genderRef = useRef();
    const raceRef = useRef();

    function create() {
        const user = {
            username: usernameRef.current.value,
            age: ageRef.current.value,
            gender: genderRef.current.value,
            race: raceRef.current.value,
        };
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user),
        };
        fetch("http://localhost:2002/create", options)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    return console.log(data.error)
                }
                console.log(data)
            });
        usernameRef.current.value = "";
        ageRef.current.value = "";
        genderRef.current.value = "";
        raceRef.current.value = "";
    }

    return (
        <div className="container">
            <h2>Create User</h2>
            <div className="d-block ">
                <input type="text" className="d-block m-2" placeholder="Enter username" ref={usernameRef}/>
                <input type="number" className="d-block m-2" placeholder="Enter age min 18 max 80" ref={ageRef}/>

                <label htmlFor="gender" >Select Gender </label>
                <select id="gender" className="d-block m-1" ref={genderRef}>
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <label htmlFor="race">Select Race </label>
                <select id="race" className="d-block m-1" ref={raceRef}>
                    <option value="">Select...</option>
                    <option value="european">European</option>
                    <option value="african">African</option>
                    <option value="asian">Asian</option>
                    <option value="indian">Indian</option>
                </select>

                <button onClick={create} className="d-block m-2">Create user</button>
            </div>
        </div>
    );
};

export default CreateUser;