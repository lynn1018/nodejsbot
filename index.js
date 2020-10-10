const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
    console.log('켰다.');
});

client.on('message', (message) => {
    if(message.content === "자라야 끝말잇기") {
        message.reply("이리듐");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 리니") {
        message.reply('이 서버의 부관리자야! 나 자라봇의 창조자이기도 하지!');
    }
});

client.on('message', (message) => {
    if(message.content === "자라야") {
        message.reply("왜 불러 용건 없으면 자라");
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
        message.reply("안울어");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 우냐") {
        message.reply("안울어");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 죽어") {
        message.reply("ㅠㅠ");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 꺼져") {
        message.reply("그 말 사람한테 하면 주의 받을 수 있다?");
    }
});


client.on('message', (message) => {
    if(message.content === "자라야 넌 누구야") {
        message.reply("나? 동물농장을 소개하기 위해 만들어진 세계관 최강의 봇이지! 그러니깐 자라");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 스틸") {
        message.reply("동물농장 마을의 이장이야! 서버 총관리자지");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 Steel") {
        message.reply("동물농장 마을의 이장이야! 서버 총관리자지");
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
    if(message.content === "자라야 도움말") {
        message.reply("나에게 이 서버에 관해 궁금한 걸 물어보면 돼! ```예) 자라야 Steel```");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 명령어") {
        message.reply("나에게 이 서버에 관해 궁금한 걸 물어보면 돼! ```예) 자라야 Steel```");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 그리드") {
        message.reply("이 서버의 부관리자야! 부관리자는 임시라서 나중에 해고될 가능성이...(속닥속닥)");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 Greed") {
        message.reply("이 서버의 부관리자야! 이 부관리자는 임시라서 나중에 해고될 가능성이...(속닥속닥)");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 Eva") {
        message.reply("이 서버의 부관리자야!");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 끄투") {
        message.reply("자라투스트라는이렇게말했다... 가 아니라 게임 선택 채널에서 끄투 역할을 받을 수 있어");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 끄투온라인") {
        message.reply("자라투스트라는이렇게말했다... 가 아니라 게임 선택 채널에서 끄투 역할을 받을 수 있어");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 마크") {
        message.reply("게임 선택 채널에서 마크 역할을 받을 수 있어! 관심 있으면 받아봐");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 마인크래프트") {
        message.reply("게임 선택 채널에서 마크 역할을 받을 수 있어! 관심 있으면 받아봐");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 롤") {
        message.reply("게임 선택 채널에서 롤 역할을 받을 수 있어! 관심 있으면 받아봐");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 리그오브레전드") {
        message.reply("게임 선택 채널에서 롤 역할을 받을 수 있어! 관심 있으면 받아봐");
    }
});
client.on('message', (message) => {
    if(message.content === "자라야 메이플스토리") {
        message.reply("게임 선택 채널에서 메이플스토리 역할을 받을 수 있어! 관심 있으면 받아봐");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 어몽") {
        message.reply("임포스터는 바로 너... 가 아니라 게임 선택 채널에서 어몽어스 역할을 받을 수 있어! 관심 있으면 받아봐");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 어몽어스") {
        message.reply("임포스터는 바로 너... 가 아니라 게임 선택 채널에서 어몽어스 역할을 받을 수 있어! 관심 있으면 받아봐");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 옵치") {
        message.reply("게임 선택 채널에서 오버워치 역할을 받을 수 있어! 관심 있으면 받아봐");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 오버워치") {
        message.reply("게임 선택 채널에서 오버워치 역할을 받을 수 있어! 관심 있으면 받아봐");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 규칙") {
        message.reply("서버 규칙 채널을 꼭 확인하길 바래!");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 자라자라") {
        message.reply("내 대사라고 했지?! 너나 자라");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 동물농장") {
        message.reply("우리 서버 이름이야! 잘 지었지? ^^");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 공부") {
        message.reply("싫어요 안돼요 하지마세요... 가 아니라 관심 있다면 우리 서버의 공부 동아리 역할을 받아봐!");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 시험") {
        message.reply("시험이 왜 시험인지 알아? 시험시험(쉬엄쉬엄)하라고 그런 거야");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 크시") {
        message.reply("늑대보단 자라지... 명령어는 걔한테 직접 물어봐");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 마냥") {
        message.reply("고양이보단 자라지... 명령어는 걔한테 직접 물어봐");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 미육") {
        message.reply("아 걔? 맨날 레벨업했다고 귀찮게 멘션하는?");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 그루비") {
        message.reply("걔... 나보다 노래 잘 불러...ㅠㅠ 명령어는 걔한테 직접 물어봐");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 Groovy") {
        message.reply("걔... 나보다 노래 잘 불러...ㅠㅠ 명령어는 걔한테 직접 물어봐");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 Fredboat") {
        message.reply("걔... 나보다 노래 잘 불러...ㅠㅠ 명령어는 걔한테 직접 물어봐");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 프레드봇") {
        message.reply("걔... 나보다 노래 잘 불러...ㅠㅠ 명령어는 걔한테 직접 물어봐");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 아야나") {
        message.reply("걔... 나보다 노래 잘 불러...ㅠㅠ 심지어 다른 기능도 많더라 명령어는 걔한테 직접 물어봐");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 Ayana") {
        message.reply("걔... 나보다 노래 잘 불러...ㅠㅠ 심지어 다른 기능도 많더라 명령어는 걔한테 직접 물어봐");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 배추") {
        message.reply("배추는 포기 세는 단위...(?) 가 아니라 배추봇 말하는 거지?");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 배추봇") {
        message.reply("걔 나보다 기능 많더라 명령어는 걔한테 직접 물어봐");
    }
});

client.on('message', (message) => {
    if(message.content === "자라야 역할") {
        message.reply("역할을 얻고 싶다면 자동 지급방과 수동 지급방을 이용하면 돼! 단, 관리자 역할은 못 줘~");
    }
});

client.login(token);
