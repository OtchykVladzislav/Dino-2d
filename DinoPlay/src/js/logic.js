const dinosaur = document.getElementById('dino');
const text = document.getElementById('text');
const game = document.getElementById('Game');
const modal = document.getElementById('modal');
var score = 0;
var highScore = 0;


document.getElementById("start").addEventListener('click', ()=>{
    modal.style.display = "none";
    game.style.display = "block";
    Score();
});

document.getElementById("restart").addEventListener('click', ()=>{
    modal.style.display = "none";
    game.style.display = "block";
    score = 0
});

document.addEventListener("keydown", event => {
    if (event.code === 'Space') {
        jump()
    }
})

function Score(){
    return setInterval(() => document.getElementById('score').innerText = "Score:" + (score++), 400)
}


function jump() {
    if(dinosaur.classList != "jump"){
        dinosaur.classList.add("jump")
    }

    setTimeout(function(){ dinosaur.classList.remove("jump");}, 600)
}

function save (score){
    window.localStorage.getItem('HighScore', 0)
    if(window.localStorage.getItem('HighScore') < score){
        window.localStorage.removeItem('HighScore');
        window.localStorage.setItem('HighScore',score);
    }
    return window.localStorage.getItem('HighScore');
}

function Start(title){
    text.innerText = title;
    modal.style.display = "flex"
    game.style.display = "none"
    if(title == "Play!!!"){
        document.getElementById("restart").style.display = "none"
        document.getElementById("start").style.display = "flex"
        document.getElementById("body").innerText = `Just do it. Best Score: ${save(score)}`
    }
    else{
        document.getElementById("start").style.display = "none"
        document.getElementById("restart").style.display = "flex"
        document.getElementById("body").innerText = `Score: ${score}.Best Score: ${save(score)}`
        score = 0
        clearInterval(Score())

    }
}

let Dinamic = setInterval(() => {
    let trabls;
    let dino;
    let background;
    let wrapper;

    if(score > 200){
        document.getElementById('bird').style.display = "block";
    }
    else{
        document.getElementById('bird').style.display = "none";
    }

    if(score > 100 && score < 300){
        trabls = `url('../images/cacti-dark.png')`;
        dino = `url('../images/t-rex-dark.png')`;
        background = `url('../images/t-rex-background-dark.png')`;
        wrapper = `url('../images/animate-rengoku.gif')`;
    }
    else{
        trabls = `url('../images/cacti.png')`;
        dino = `url('../images/t-rex.png')`;
        background = `url('../images/t-rex-background.png')`;
        wrapper = `url('../images/rengoku.jpg')`;
    }
    document.documentElement.style.setProperty('--trabl', trabls)
    document.documentElement.style.setProperty('--dino', dino)
    document.documentElement.style.setProperty('--background', background)
    document.documentElement.style.setProperty('--wrapper', wrapper)
}, 10);

let ALive = setInterval(function(){
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactus1Left = parseInt(window.getComputedStyle(trabl1).getPropertyValue("left"));
    let cactus2Left = parseInt(window.getComputedStyle(trabl2).getPropertyValue("left"));
    let birdLeft = parseInt(window.getComputedStyle(bird).getPropertyValue("left"));
    
    if(dinoBottom < 56 && cactus1Left > 0 && cactus1Left <= 55 || dinoBottom < 56 && cactus2Left > 0 && cactus2Left <= 55){
        Start("Game Over!!!");
    }
    else if( dinoBottom > 70 && dinoBottom < 120 && birdLeft > 0 && birdLeft <= 45 ){
        Start("Game Over!!!")
    }

},10)


