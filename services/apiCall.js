'use strict';

const axios = require('axios');


function runRoomba(data) {
    const output = async () => {
        try {
            const response = await axios.post(
                'http://localhost:8080/v1/cleaning-sessions',
                data
            );

            console.log(data);
            console.log(response.data);

            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return output(data);
}

module.exports = {
    runRoomba
};