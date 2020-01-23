const moongose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DeveloperSchema = new moongose.Schema({
    name: String,
    github_user: String,
    bio: String,
    avatar_url: String,
    stacks: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = moongose.model('Developer', DeveloperSchema);