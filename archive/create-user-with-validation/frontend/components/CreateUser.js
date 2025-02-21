import React, {useRef, useState} from 'react';
import useStore from "../store/main";

const CreateUser = () => {

        const {setUsers, setError} = useStore(state => state);

        const [validation, setValidation] = useState([false, false, false, false])

        // const [usernameError, setUsernameError] = useState(false);
        // const [ageError, setAgeError] = useState(false);
        // const [genderError, setGenderError] = useState(false);
        // const [raceError, setRaceError] = useState(false);

        const refs = {
            username: useRef(),
            age: useRef(),
            gender: useRef(),
            race: useRef(),
        };

        function create() {
            const user = {
                username: refs.username.current.value,
                age: refs.age.current.value,
                gender: refs.gender.current.value,
                race: refs.race.current.value,
            };
            let invalid = [false, false, false, false];
            if (typeof user.username === "string" && user.username.length > 0 && user.username[0] !== user.username[0].toUpperCase()) {
                invalid[0] = true;
            }
            if (user.username.length > 20 || user.username.length < 4) {
                invalid[0] = true;
            }
            if (Number(user.age) < 18 || Number(user.age) > 80) {
                invalid[1] = true;
            }
            if (user.gender !== "male" && user.gender !== "female") {
                invalid[2] = true;
            }
            if (user.race !== "european" && user.race !== "african" && user.race !== "indian") invalid[3] = true;

            if (invalid.includes(true)) {
                setValidation(invalid);
                return
            }

            const options = {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(user),
            };
            setError(null);
            setValidation([null, null, null, null])

            fetch("http://localhost:2001/create", options)
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        return setError(data.message)
                    }
                    setUsers(data.users);
                    // setError(null)
                    refs.username.current.value = "";
                    refs.age.current.value = "";
                    refs.gender.current.value = "";
                    refs.race.current.value = "";


                    console.log(data)
                });

        }

        return (
            <div className="container">
                <h2>Create User</h2>
                <div className="d-block ">
                    <input type="text" className="d-block m-2" placeholder="Enter username" ref={refs.username} style={{backgroundColor: validation[0] ? "#ffa5a5" : "white"}}/>
                    <input type="number" className="d-block m-2" placeholder="Enter age min 18 max 80" ref={refs.age} style={{backgroundColor: validation[1] ? "#ffa5a5" : "white"}}/>

                    <label htmlFor="gender" className="d-block ms-2">Select Gender </label>
                    <select id="gender" className="d-block ms-2" ref={refs.gender} style={{backgroundColor: validation[2] ? "#ffa5a5" : "white"}}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    <label htmlFor="race" className="d-block ms-2 mt-2">Select Race </label>
                    <select id="race" className="d-block ms-2" ref={refs.race} style={{backgroundColor: validation[3] ? "#ffa5a5" : "white"}}>
                        <option value="european">European</option>
                        <option value="african">African</option>
                        <option value="asian">Asian</option>
                        <option value="indian">Indian</option>
                    </select>

                    <button onClick={create} className="d-block m-2">Create user</button>
                </div>
            </div>
        );
    }
;

export default CreateUser;