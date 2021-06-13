var startbtn=document.getElementById('start-btn');
var question=document.getElementById('Question');
var ansbox=document.getElementById('answers-container');

const quebox=[
  {
    question:"Where India Located?",
    c1:[
      {text:"Asia"},
      {text:"Europe"},
      {text:"Africa"},

    ],
    ans:"Asia",
  },
  {
     question: "Who are you?",
     c1:[{text:"Human"},
        {text:"God"},
          {text:"Animal"}],
    ans:"Human",

        },
  {
          question:"2+2?",
          c1:[
            {text:"2"},
            {text:"2*2"},
            {text:"4*2"},],
          ans:"2*2",
        },
    {
          question:"Select Fruit Name From below?",
          c1:[
            {text:"Horse"},
            {text:"Ram"},
            {text:"Apple"}
          ],
          ans:"Apple",
        }
      ]



startbtn.addEventListener("click", Startgame)
function Startgame(){

  document.getElementById('start-btn').style.display="none";
  document.getElementById('enter').style.display="none";

  document.getElementById('questionbox').style.visibility = 'visible';
  document.getElementById('next-btn').style.visibility = 'visible';
  document.getElementById('opt').style.visibility="visible";

  console.log("Started")
  startbtn.classList.add("hide");
  index=0
  var score=0;
  var wrong=0;

  nextquestion();


  }



function nextquestion(){
  if(index<quebox.length){
    var t=showquestion(quebox[index]);
    index=index+1
    buttonreset()

    //document.getElementById('scr').style.display="none";



  }
  else{
    document.getElementById('questionbox').style.visibility = 'hidden';
    document.getElementById('next-btn').style.visibility = 'visible';

    document.getElementById('final').style.visibility = 'visible';
  console.log("End");}




}
function buttonreset(){
  var cross=document.querySelectorAll(".btn");
  for (var bid=0;bid<cross.length;bid++){
    var s=cross[bid].parentElement
    s.style.backgroundColor="white"
  }


}

function answer(index){
  count=1


  var cross=document.querySelectorAll(".btn");
  var option=quebox[index].ans;
  var sc=document.getElementById('score');


  for (var bid=0;bid<cross.length;bid++){
    var cli;
    //console.log(cross[bid]);
    cross[bid].onclick=function(){
      cli=this.parentElement;
    //  console.log(cli);
      var c=parseInt(sc.innerText)
      if(this.innerText==option){
        cli.style.backgroundColor="green";

        sc.innerText=c+1;
      }
      else{
        cli.style.backgroundColor="red";
        sc.innerText=c-1;

      }






    }

}




}
function showquestion(q){
  question.innerText=q.question;
  var check=document.querySelectorAll(".btn");
  //console.log(check);
  var i=0;
  for (var c=0;c<check.length;c++){
    for(var i=c;i<c+1;i++){
      check[i].innerText=q.c1[i].text;
    }


  }
  answer(index);






}
var nxtbtn=document.getElementById('next-btn');
nxtbtn.addEventListener("click",nextquestion);
