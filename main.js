const NAME = document.getElementById("name");
const BUT1 = document.getElementById("opt1");
const BUT2 = document.getElementById("opt2");
const BUT3 = document.getElementById("opt3");

const LANGUAGECHANGEBTN = document.getElementById("languageChangeBtn");

let finalRank = 0;
let i = 0;

if (localStorage.getItem("language") == undefined){
    localStorage.setItem("language", "english");
}

LANGUAGECHANGEBTN.addEventListener("click", function(){
    switch(localStorage.getItem("language")){
        case "english":
            localStorage.setItem("language", "russian");
            location.reload();
            break;
        case "russian":
            localStorage.setItem("language", "english");
            location.reload();
            break;
    }
})

questLine = [
    { 
        name: "Where are you on a horizontal political spectrum?",
        options: [
            "Conservative",
            "Centrist",
            "Liberal"
        ],
        ranks: [
            1,
            0,
            -1
          ]
    }, 

    { 
        name: "What would you do if someone bested you in a videogame",
        options: [
            "Leave the game",
            "Ignore it",
            "Racial slurs"
        ],
        ranks: [
            -1,
            0,
            1
          ]
    }, 

    { 
        name: "Is Ryan Gosling / Patrick Bateman 'literally you'?",
        options: [
            "Yes",
            "No",
            "What are you talking about"
        ],
        ranks: [
            1,
            -1,
            0
          ]
    }, 

    { 
        name: "Are masks necessary in fighting the covid-19",
        options: [
            "Yes",
            "No",
            "I live under a rock sorry"
        ],
        ranks: [
            -1,
            1,
            0
          ]
    }, 

    { 
        name: "Are femboys pretty",
        options: [
            "Yes",
            "No",
            "This is what men turned into"
        ],
        ranks: [
            -1,
            0,
            1
          ]
    }, 

    { 
        name: "What do you think of Japan",
        options: [
            "The best country in the world",
            "I dont care",
            "Just a country"
        ],
        ranks: [
            0,
            1,
            -1
          ]
    }, 
]

questLineRus = [
    { 
        name: "Каково ваше нахождение на <br>горизонтальном политическом спектруме",
        options: [
            "Консерватизм",
            "Центризм",
            "Либерализм"
        ],
        ranks: [
            1,
            0,
            -1
          ]
    }, 

    { 
        name: "Что бы вы делали, <br>если бы вас жоско делали в видео игре",
        options: [
            "Ливнуть",
            "Игнорировать",
            "Расизм"
        ],
        ranks: [
            -1,
            0,
            1
          ]
    }, 

    { 
        name: "Вы прям как Раян Гослинг?",
        options: [
            "Да",
            "Нет",
            "Что?"
        ],
        ranks: [
            1,
            -1,
            0
          ]
    }, 

    { 
        name: "Мед. маски обязательны для <br>предотвращения распространения covid-19",
        options: [
            "Да",
            "Нет",
            "Кто такой ковид-19"
        ],
        ranks: [
            -1,
            1,
            0
          ]
    }, 

    { 
        name: "Фембои - круто?",
        options: [
            "Да",
            "Нет",
            "Говно полное"
        ],
        ranks: [
            -1,
            0,
            1
          ]
    }, 

    { 
        name: "Мнение насчёт Японии",
        options: [
            "Лучшая страна в мире",
            "Пофиг",
            "Просто страна"
        ],
        ranks: [
            0,
            1,
            -1
          ]
    }, 
]

function renderQuestions(obj){
    NAME.innerHTML = obj.name;
    BUT1.innerHTML = obj.options[0];
    BUT2.innerHTML = obj.options[1];
    BUT3.innerHTML = obj.options[2];
}

function gameEndRender(){
    let finalNaming;

    switch(true){
        case finalRank >= questLine.length / 3 * 2:
            finalNaming = "You are the type of guy to think <br>you're an alpha male.<br>That's a bad thing."
            break;
        case finalRank >= questLine.length / 3 && finalRank <= questLine.length / 3 * 2:
            finalNaming = "You don't have any strong opinions.<br>Maybe you 'borrow' those from influencers, who knows"
            break;
        case finalRank <= questLine.length / 3:
             finalNaming = "You're a twitter keyboard warrior.<br> On a real battlefield, you could be used as a decoy"
             break;

    }
    NAME.innerHTML = `You're done!<br>This is what the Algorithm thinks of you<br><br>${finalNaming}`;

    BUT1.innerHTML = "Try again";
    BUT2.innerHTML = "Try again";
    BUT3.innerHTML = "Try again";

    BUT1.addEventListener("click", function(){
        location.reload();
    })

    BUT2.addEventListener("click", function(){
        location.reload();
    })

    BUT3.addEventListener("click", function(){
        location.reload();
    })
}

function gameEndRenderRus(){
    let finalNaming;

    switch(true){
        case finalRank >= questLine.length / 3:
            finalNaming = "Вы думаете, что вы - смегма.<br>Это плохо"
            break;
        case finalRank >= 0 - questLine.length / 3 && finalRank <= questLine.length / 3:
            finalNaming = "У вас нет своего мнения.<br>Мб ты 'взаимствовывуешь' их у ютуберов"
            break;
        case finalRank <= 0 - questLine.length / 3:
             finalNaming = "Вы - диванный воин Твиттера<br>На настоящем поле боя, вы годитесь как бесплатная еда"
             break;

    }
    NAME.innerHTML = `Готово!<br>Вот что алгоритм о вас думает<br><br>${finalNaming}`;

    BUT1.innerHTML = "Попробуйте еще раз";
    BUT2.innerHTML = "Попробуйте еще раз";
    BUT3.innerHTML = "Попробуйте еще раз";

    BUT1.addEventListener("click", function(){
        location.reload();
    })

    BUT2.addEventListener("click", function(){
        location.reload();
    })

    BUT3.addEventListener("click", function(){
        location.reload();
    })
}


//main loop
function gameLoop(){
    if (questLine.length <= i){
        switch(localStorage.getItem("language")){
            case "english":
                gameEndRender();
                break;
            case "russian":
                gameEndRenderRus();
                break;
            default:
                console.error("No local storage instance");
                break;
        }
        return;
    }

    switch(localStorage.getItem("language")){
        case "english":
            renderQuestions(questLine[i])
            break;
        case "russian":
            renderQuestions(questLineRus[i])
            break;
        default:
            console.error("No local storage instance");
            break;
    }
    console.log(i)
    
}

BUT1.addEventListener("click", function(){
    finalRank += questLine[i].ranks[0];
    console.log("first button pressed");

    i++;
    gameLoop();
})

BUT2.addEventListener("click", function(){
    finalRank += questLine[i].ranks[1];
    console.log("second button pressed");

    i++;
    gameLoop();
})

BUT3.addEventListener("click", function(){
    finalRank += questLine[i].ranks[2];
    console.log("third button pressed");

    i++;
    gameLoop();
})

gameLoop();