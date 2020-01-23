const DeveloperModel = require('../model/developer');
const { getUser } = require('./githubController');

const store = async (req, res) => {
    const { github_username, stacks, latitude, longitude } = req.body;

    const github_response = await getUser(github_username);

    const { name = login, avatar_url, bio } = github_response.data;
    const stacksArray = stacks.split(',').map(stack => stack.trim());

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    const dev = await DeveloperModel.create({
        github_username,
        name,
        avatar_url,
        bio,
        stacks: stacksArray,
        location
    });

    res.send(dev);
}

module.exports = {
    store
}