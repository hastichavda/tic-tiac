var turn = document.getElementById("turn"),
// boxes => all boxes
// X_or_O => to set X or O into the box
   boxes = document.querySelectorAll("#main div"), X_or_O = 0;
  var  count = 0;
  var pColor1, pColor2, pName1, pName2;

  var $dropdown1 = $("select[name='dropdown1']");
var $dropdown2 = $("select[name='dropdown2']");


//dropdown disabled
$dropdown1.change(function() {
    $dropdown2.find('option').prop("disabled", false);
    var selectedItem = $(this).val();
    if (selectedItem) {
        $dropdown2.find('option[value="' + selectedItem + '"]').prop("disabled", true);
    }
});

//select winners
function selectWinnerBoxes(b1,b2,b3){
   b1.classList.add("win");
   b2.classList.add("win");
   b3.classList.add("win");
   turn.innerHTML = b1.innerHTML + " Won Congrats";
   turn.style.fontSize = "40px";
   count=0;
}
replay();

//check possibilities
function getWinner(){
   
   let box1 = document.getElementById("box1"),
       box2 = document.getElementById("box2"),
       box3 = document.getElementById("box3"),
       box4 = document.getElementById("box4"),
       box5 = document.getElementById("box5"),
       box6 = document.getElementById("box6"),
       box7 = document.getElementById("box7"),
       box8 = document.getElementById("box8"),
       box9 = document.getElementById("box9");

    // get all posibilites
    if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
    selectWinnerBoxes(box1,box2,box3);

    else if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
    selectWinnerBoxes(box4,box5,box6);

    else if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
    selectWinnerBoxes(box7,box8,box9);

    else if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
    selectWinnerBoxes(box1,box4,box7);

    else  if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
    selectWinnerBoxes(box2,box5,box8);

    else if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
    selectWinnerBoxes(box3,box6,box9);

    else if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
    selectWinnerBoxes(box1,box5,box9);

    else if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
    selectWinnerBoxes(box3,box5,box7);

    else if(count > 8){
       alert("tie");
       count=0;
    }
   
}


// set event onclick
for(var i = 0; i < boxes.length; i++){
   boxes[i].onclick = function(){
         count++;
       // not allow to change the value of the box
       if(this.innerHTML !== "X" && this.innerHTML !== "O"){
       if(X_or_O%2 === 0){
          console.log(X_or_O);
          this.innerHTML = "X"; 
          this.style.backgroundColor = document.getElementById('p1-bg').value;
          turn.innerHTML = document.getElementById('p2-name').value + " Turn Now";
          getWinner();
          X_or_O += 1;
          
       }else{
           console.log(X_or_O);
          this.innerHTML = "O";
          this.style.backgroundColor = document.getElementById('p2-bg').value;
          turn.innerHTML = document.getElementById('p1-name').value + " Turn Now";
          getWinner();
          X_or_O += 1;  
       }
   }


   }; 
   
}
//startbutton

function startGame(ele) {
   var cont = document.getElementById('main');
   if (cont.style.display == 'block') {
       cont.style.display = 'none';
   }
   else {
       cont.style.display = 'block';
   }
}
 
 
//replaybutton
function replay(){
   var cont = document.getElementById('main');
   if (cont.style.display == 'none') {
      cont.style.display = 'block';
  }
  else {
      cont.style.display = 'none';
  }

   for(var i = 0; i < boxes.length; i++){
       boxes[i].classList.remove("win");
       boxes[i].innerHTML = "";
       boxes[i].style.backgroundColor = "#fff";
       turn.innerHTML = document.getElementById('p1-name').value + " Turn Now";
       turn.style.fontSize = "25px";
   
      
   }
   
}

//works as document.getelementbyid
function dgi(a)
{
   return document.getElementById(a);
}


function setPlayerName( player, name ){
    dgi('errBox').innerHTML = '';
    dgi('startbutton').disabled = false;
    switch(player){
        case 1:
            if( name == pName2 ){
                dgi('errBox').innerHTML = 'Two players cannot have the same name!';
                dgi('startbutton').disabled = true;
                return false;
            }
            pName1 = name;
            return true;
            break;
        case 2:
            if( name == pName1 ){
                dgi('errBox').innerHTML = 'Two players cannot have the same color!';
                dgi('startbutton').disabled = true;
                return false;
            }
            pName2 = name;	
            return true;			
            break;
    }
    dgi('p1-name').innerHTML = name;
    dgi('p2-name').innerHTML = name;
}