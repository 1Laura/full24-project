import React from 'react';
import useStore from "../store/main";
import http from "../plugins/https"

const SingleUser = ({userInfo}) => {
    const {setCurrentUser, currentUser, setError} = useStore();

    async function poke() {
        if (!currentUser) return alert("Please login first!");

        const user = {
            secretKey: currentUser.secretKey,
            usernameToPoke: userInfo.username
        }
        const options = {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(user)
        };

        fetch("http://localhost:2001/poke", options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    return setError(data.message)
                }
                setCurrentUser({username: user.username, secretKey: data.secretKey});

            })


        // const res = await http("http://localhost:2001/poke", "POST", {
        //     secretKey: currentUser.secretKey,
        //     usernameToPoke: userInfo.username
        // });
        //
        // alert(res.message);
    }

    return (
        <div className="post-card flex-wrap">
            <p className="m-2">{userInfo.username}</p>
            <button onClick={poke} className="m-2">Poke</button>
        </div>
    );
};

export default SingleUser;