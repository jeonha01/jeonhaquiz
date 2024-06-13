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
    const Imagestring = plublem[randomnum].Answer.substring(0, 2)

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

