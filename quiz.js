var Quest = new Array(10);  //this sets up an array for all of the answers that are given 

function populate() { 
// alert("function populate started"); 
// this function gives each of the answers 0 points so if someone doesn't answer a question 
// the whole thing will continue to work 
  for(var i=0; i<10; i++) { Quest[i]=0; } 
} 

function total() { 
// alert("function total started"); 
// this function adds the number of points each answer is worth together 
  myScore=0; 
  for (var i=0; i<10; i++) { myScore=myScore+Quest[i]; } 
  analyzer(myScore); 
} 

myContents = new Array(); 
  myContents[0] = "Vincent van Gogh"   + ""; 
  myContents[1] = "Salvador Dalí"  + ""; 
  myContents[2] = "pablo picasso" + "";
  myContents[3] = "Frida Kahlo"  + "";  
  myContents[4] = "Claude Monet"   + "";  
  myContents[5] = "Michelangelo"  + ""


function analyzer (myScore) { 
// this function uses the total calculated score to figure out which personality type they are 
  if (myScore>34)            { myContentsPtr = 5; } //6
    else { if (myScore > 27) { myContentsPtr = 4; } //5
    else { if(myScore>20)    { myContentsPtr = 3; } //4
    else { if(myScore>13)    { myContentsPtr = 2; } //3
    else { if(myScore>6)     { myContentsPtr = 1; } //2
    else                     { myContentsPtr = 0; } //1
        } 
      } 
    } 
  } 
  myDisplay(myContents[myContentsPtr]) 
} 


function myDisplay(myContents) { 
//This function will open a new window and show the results calculated 
// alert(myContents); **use alert for testing only**. 
document.getElementById("result").innerHTML = (myContents);
} 

function saver(q, points) { 
// this function puts the points that each answer is worth into the array 
  q=q-1; 
  Quest[q]=points 
} 


