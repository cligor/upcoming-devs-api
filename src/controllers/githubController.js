const axios = require('axios');

const getUser = async (github_username) => {
    const github_response = await axios.get(`http://api.github.com/users/${github_username}`);

    return github_response;
}

module.exports = { getUser };
