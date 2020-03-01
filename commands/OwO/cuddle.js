const owo = require('../../utility/nekos.js');
// const config = require('config');
module.exports = {
    name: 'cuddle',
    description: 'Sends a cuddle gif/picture.',
    extended: '',
    usage: '',
    aliases: [],
    guildonly: false,
    developersOnly: false,
    args: false,
    category: 'OwO',
    memberPermission: '',
    botPermission: '',
    async execute(message, args, nekos) {
        const image = await owo.getImage(nekos, 'cuddle');
        const output = owo.embed(message.author)
            .setImage(image);
        if (args.length) {
            const member = owo.getMember(message, args, 0);
            if (member) output.setDescription(`*${member} was cuddled by ${message.author}*`);
        }
        message.channel.send(output);
    }
};