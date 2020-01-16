const moongose = require('mongoose');

const DeveloperSchema = new moongose.Schema({
    name: String,
    github_user: String,
    bio: String,
    avatar_uri: String,
    stack: [String],
});

module.exports = moongose.model('Developer', DeveloperSchema);