const superagent = require("snekfetch");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    superagent.get('https://nekos.life/api/v2/img/lizard')
        .end((err, response) => {
          message.channel.send({ file: response.body.url });
        });
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "lizard",
    category: "Animals",
    description: "Post a random image of a lizard",
    usage: "lizard"
};
