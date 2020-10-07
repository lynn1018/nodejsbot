const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
    console.log('켰다.');
});

client.on('message', (message) => {
    if(message.content === 'ping') {
        message.reply('pong');
    }
});

client.on('message', (message) => {
    if(message.content === 'hmmm') {
        message.reply('teresting');
    }
});

client.on('message', (message) => {
    if(message.content === "자라야") {
        message.reply("용건 없으면 자라");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 자라") {
        message.reply("내 대사다 따라하지 말고 자라");
    }
});


client.on('message', (message) => {
    if(message.content === "자라야 거북이") {
        message.reply("헛소리 하지 말고 자라");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 자니") {
        message.reply("자는구나 잘자");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 자니?") {
        message.reply("자는구나 잘자");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 안녕") {
        message.reply("안녕! 가서 자라");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 우냐?") {
        message.reply("훌쩍훌쩍... 이 아니라 자라");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 우냐") {
        message.reply("훌쩍훌쩍... 이 아니라 자라");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 넌 누구야") {
        message.reply("이 몸은 그리드를 따라하기 위해 만들어진 봇이올시다! 그러니깐 자라");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 스틸") {
        message.reply("자칭 서강준 닮은 아이돌... 은 무슨 개똥이지");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 바보") {
        message.reply("멍청이 자라");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 호감도") {
        message.reply("그딴 거 없으니깐 자라");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 무요") {
        message.reply("무요 가서 자라");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 그리드") {
        message.reply("나 자라를 창조한 아빠와도 같은 존재지! 그러니깐 자라");
    }
});

client.login(token);