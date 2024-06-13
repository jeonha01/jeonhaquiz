const plublem = [
    {
        Question: "1. 민지는 추석을 맞아 오랜만에 시골에 내려갔습니다. 고향은 시간이 흘러도 변함없이 여전했습니다. 민지가 볼 수 있는 풍경으로 알맞지 않은 것은 무엇인가요?",
        Choice: ["들판.png", "황소.png", "빌딩.png", "산.png"],
        Answer: "빌딩.png",
        number: 3
    }, {
        Question: "1. 민수는 김치를 만드려고 합니다. 그런데 재료 중에서 이상한 것이 있습니다. 김치를 만들기 위해서 알맞지 않은 재료는 무엇인가요?",
        Choice: ["고춧가루.png", "무.png", "배추.png", "사탕.png"],
        Answer: "사탕.png",
        number: 4
    }, {
        Question: "1. 길동이는 아빠와 낚시를 하러갑니다. 낚시를 하다가 금방 물고기들을 놓쳐버렸습니다. 놓친 물고기들 중 가장 물고기가 아닌것은 무엇인가요?",
        Choice: ["상어.png", "굴비.png", "고등어.png", "연어.png"],
        Answer: "상어.png",
        number: 1
    }
]

const result1 = document.getElementById('result1')
let randomnum = Math.floor(Math.random() * 3)
const first1 = document.getElementById('first1')

function pictureClick(event) {
    const clickedImageSrc = event.target.getAttribute('src');
    const Imagestring = plublem[randomnum].Answer.replace('.png', '')

    if (clickedImageSrc === plublem[randomnum].Answer) {
        result1.textContent = '정답입니다.'
    } else {
        result1.textContent = `틀렸습니다. 정답은 ${plublem[randomnum].number}번 ${Imagestring}`
    }
}

function showPicture() {
    first1.textContent = plublem[randomnum].Question

    const currentQuestion = plublem[randomnum];
    const Choices = currentQuestion.Choice;

    for (let i = 0; i < Choices.length; i++) {
        const image = document.getElementById(`pi${i + 1}`)
        image.setAttribute('src', plublem[randomnum].Choice[i])
    }
}

showPicture()

///////////////////

const plublemm = [
    {
        Question: "2. 나래는 살을 빼기 위해 수영장을 다니기로 했습니다. 나래가 챙겨야 할 준비물로 알맞지 않은 것은 무엇인가요?",
        Choice: ["수영모.png", "등산스틱.png", "물안경.png", "수영복.png"],
        Answer: "등산스틱.png",
        number: 2
    }, {
        Question: "2. 민주는 여름에 입을 옷을 고르려고 합니다. 다음 중 여름에 어울리지 않는 옷은 무엇인가요?",
        Choice: ["운동복.png", "패딩.png", "반팔.png", "반바지.png"],
        Answer: "패딩.png",
        number: 2
    }, {
        Question: "2. 민재는 일본으로 여행을 갔습니다. 다음 사진 중 일본에서 볼 수 있는 풍경으로 알맞지 않은 것은 무엇인가요?",
        Choice: ["사막.png", "초밥.png", "후지산.png", "일본건물.png"],
        Answer: "사막.png",
        number: 1
    }
]

const result2 = document.getElementById('result2')
let randomnumm = Math.floor(Math.random() * 3)
const second2 = document.getElementById('second2')

function pictureClickk(event) {
    const clickedImageSrc = event.target.getAttribute('src');
    const Imagestring = plublemm[randomnumm].Answer.replace('.png', '')

    if (clickedImageSrc === plublemm[randomnumm].Answer) {
        result2.textContent = '정답입니다.'
    } else {
        result2.textContent = `틀렸습니다. 정답은 ${plublemm[randomnumm].number}번 ${Imagestring}`
    }
}

function showPicturee() {
    second2.textContent = plublemm[randomnumm].Question

    const currentQuestion = plublemm[randomnumm];
    const Choices = currentQuestion.Choice;

    for (let i = 0; i < Choices.length; i++) {
        const image = document.getElementById(`pic${i + 1}`)
        image.setAttribute('src', plublemm[randomnumm].Choice[i])
    }
}

showPicturee()

