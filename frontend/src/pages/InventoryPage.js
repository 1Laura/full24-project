import React, {useEffect} from 'react';
import http from "../plugins/https"

const InventoryPage = () => {

    useEffect(() => {
        http.getToken("http://localhost:2001/inventory")
            .then(response => {
                console.log(response)
            })
    }, []);


    return (
        <div>
            <h3>Inventory</h3>
        </div>
    );
};

export default InventoryPage;