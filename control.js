var player1Random= Math.floor((Math.random()*6)+1);
var player2Random= Math.floor((Math.random()*6)+1);

alert(player1Random);
alert(player2Random);   

if(player1Random==player2Random)
{
    document.querySelector("h1").innerHTML="Match Tie";
}
else if(player1Random>player2Random){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else{
    document.querySelector("h1").innerHTML="🚩Player 2 Wins";
}


/* Image changes */

var image1changed ="images/dice"+player1Random+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1changed);

var image2changed = "images/dice"+player2Random+".png";
document.querySelectorAll("img")[1].setAttribute("src",image2changed);

/*

var player1 = document.querySelector("img.img1");
var player2 = document.querySelector("img.img2");

switch(player1Random)
{
    case 1:
    {
        player1.src="images/dice1.png";
        break;
    }

    case 2:
    {
        player1.src="images/dice2.png";
        break;
    }

    case 3:
    {
        player1.src="images/dice3.png";
        break;
    }

    case 4:
    {
        player1.src="images/dice4.png";
        break;
    }

    case 5:
    {
        player1.src="images/dice5.png";
        break;
    }
    
    case 6:
    {
        player1.src="images/dice6.png";
        break;
    }
    
}


switch(player2Random)
{
    case 1:
    {
        player2.src="images/dice1.png";
        break;
    }

    case 2:
    {
        player2.src="images/dice2.png";
        break;
    }

    case 3:
    {
        player2.src="images/dice3.png";
        break;
    }

    case 4:
    {
        player2.src="images/dice4.png";
        break;
    }

    case 5:
    {
        player2.src="images/dice5.png";
        break;
    }
    
    case 6:
    {
        player2.src="images/dice6.png";
        break;
    }
    
}

*/