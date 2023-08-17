const NAME = document.getElementById("name");
const BUT1 = document.getElementById("opt1");
const BUT2 = document.getElementById("opt2");
const BUT3 = document.getElementById("opt3");

let finalRank = 0;
let i = 0;

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

function renderQuestions(obj){
    NAME.innerHTML = obj.name;
    BUT1.innerHTML = obj.options[0];
    BUT2.innerHTML = obj.options[1];
    BUT3.innerHTML = obj.options[2];
}

function gameEndRender(){
    let finalNaming;

    switch(true){
        case finalRank > questLine.length / 3 * 2:
            finalNaming = "You are the type of guy to think you're an alpha male.<br>That's a bad thing."
            break;
        case finalRank > questLine.length / 3:
            finalNaming = "You don't have any strong opinions.<br>Maybe you 'borrow' those from influencers, who knows"
            break;
        case finalRank < questLine.length / 3:
             finalNaming = "You're a twitter keyboard warrior. On a real battlefield, you could be used as a decoy"
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


//main loop
function gameLoop(){
    if (questLine.length <= i){
        gameEndRender();
        return;
    }

    renderQuestions(questLine[i]); 
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