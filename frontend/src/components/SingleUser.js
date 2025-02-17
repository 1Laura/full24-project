import React from 'react';
import http from "../plugins/https";
import useStore from "../store/main";

const SingleUser = ({userInfo}) => {
    const {setUsers} = useStore(state => state);

    return (
        <div className="post-card flex-wrap" >
            {/*<p>{userInfo.username}</p>*/}
            {/*<p>{userInfo.age}</p>*/}
        </div>
    );
};

export default SingleUser;