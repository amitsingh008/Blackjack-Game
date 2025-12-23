
function getRandomCard()
{
    let newC=Math.floor(Math.random()*12)+2;
    if(newC===1)
    {
        newC=11
    }
    else if(newC===11||newC===12||newC===13)
    {
        newC=10;
    }
    return newC;
}
let player={
    name:"amit",
    chips:200,
    sayHello: function(){
        console.log("amit");
    }
}
player.sayHello();
let hasBlackJack=false;
let isAlive=false;
let message="";
let card;
let sum;
const startEl=document.getElementById("btn");
const cardsEl=document.getElementById("cards");
const sumEl=document.getElementById("sum");
const messageEl=document.getElementById("message-el");
const btn1El=document.querySelector("#btn1");
const chipsEl=document.getElementById('player-el');
chipsEl.textContent=`${player.name} : ${"$"+player.chips}`;
isGameActive=false;
startEl.addEventListener('click',()=>{
    startGame();
    sumEl.textContent=`Sum:${sum}`;
    cardsEl.textContent=`Cards:${card[0]+","+card[1]}`;
    messageEl.textContent=`${message}`;
})
function newCard()
{
    let newCard=getRandomCard();
      card.push(newCard);
      sum+=card[(card.length)-1];
      if(!isAlive&&!hasBlackJack)
      {
        messageEl.textContent="Start new Game..."
        return;
      }

      if(sum<21)
    {
        isAlive=true;
       messageEl.textContent="Want to play a round?..."
        // console.log(sum,newCard);
        // Cashino(sum);
    }

    else if(sum===21)
    {
        hasBlackJack=true;
        messageEl.textContent="yepeeee!! You won black jack..";
        // hasBlackJack=true;
        // hasBlackJack=true;
    }
     else
    {
       messageEl.textContent="Want to play again? Click start button to start game";
        isAlive=false;
    }
    sumEl.textContent=`Sum:${sum}`;
    cardsEl.textContent+=`,${newCard}`;
    messageEl.textContent=`${message}`;
}
btn1El.addEventListener('click',()=>{
     newCard();
})

function startGame(){
    let firstCard=getRandomCard();
   let secondCard=getRandomCard();
   card=[];
   sum=0;
   card.push(firstCard,secondCard);
   sum=card[0]+card[1];
   if(sum<21)
   {
    isAlive=true;
    message="Want to play a round?..."
   }
   else if(sum===21)
   {
    hasBlackJack=true;
    message="yepeeee!! You won black jack..";
   }
   else{
    isAlive=false;
    message="Want to play again? Click start button to start game";
    return;
   }
}