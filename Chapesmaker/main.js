 
var c = document.getElementById("canvas");
var ctx = c.getContext("2d")



var xpos = document.getElementById('xpos').value;
var ypos = document.getElementById('ypos').value;

var RecWidth = document.getElementById('x').value;
var RecHeight = document.getElementById('y').value;



class shape {

     constructor (xpos, ypos, RecWidth, RecHeight){
         this.xpos = xpos;
         this.ypos = ypos;
         this.width = RecWidth;
         this.height = RecHeight;
     }

     draw() {

         var c = document.getElementById("canvas");
         var ctx = c.getContext("2d");
         ctx.beginPath();
         ctx.rect(xpos, ypos, RecWidth, RecHeight);
         ctx.stroke();


     }

}

let square = new shape(xpos, ypox, RecWidth, RecHeight);
let circle = new shape(xpos, ypos, RecWidth, RecHeight);

function setup(){

    var choice = document.getElementById("s1");
    var selectedchoice = choice.options[choice.selectedIndex].text;


     if (selectedchoice == 'Square'){

        var xpos = document.getElementById('xpos').value;
        var ypos = document.getElementById('ypos').value;

        var RecWidth = document.getElementById('x').value;
        var RecHeight = document.getElementById('y').value;


       var c = document.getElementById("canvas");
       var ctx = c.getContext("2d");
       ctx.beginPath();
       ctx.rect(xpos, ypos, RecWidth, RecHeight);
       ctx.stroke();
    
    }else if(selectedchoice == 'Circle'){

        var xpos = document.getElementById('xpos').value;
        var ypos = document.getElementById('ypos').value;
 
        var RecWidth = document.getElementById('x').value;
        var RecHeight = document.getElementById('y').value;

        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");

        ctx.beginPath();
        ctx.arc(xpos, ypos, RecWidth, RecHeight, 2 * Math.PI);
        ctx.stroke();

    }

}
































