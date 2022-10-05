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

            return response;
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                return error.response;
            }
        }
    };

    return output(data);
}

module.exports = {
    runRoomba
};
