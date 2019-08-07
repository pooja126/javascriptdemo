var correct = 0;

var firstresult = prompt("Name of first sub is Marathi?")
if(firstresult.toUpperCase() === "AMRUTA")
{
    correct += 1;
    console.log(correct);
}

var secondresult = prompt("Name of first sub is Marathi?")
if(secondresult.toUpperCase() === "POOJA")
{
    correct +=1;
    console.log(correct);
}

var thirdresult = prompt("Name of first sub is Marathi?")
if(thirdresult.toUpperCase() === "RESHMA")
{
    correct +=1;
    console.log(correct);
}

var fourthresult = prompt("Name of first sub is Marathi?")
if(fourthresult.toUpperCase() === "SAYALI")
{
    correct +=1;
    console.log(correct);
}

var fifthresult = prompt("Name of first sub is Marathi?")
if(fifthresult.toUpperCase() === "NIKITA")
{
    correct +=1;
    console.log(correct);
}

document.write("<p>the result is out of 5</p>");
if(correct === 5)
{
    document.write("<p>you are first ranker</p>")
}
   else if(correct >=3)
    {
        document.write("<p>you are second</p>");
    }
    
   else if(correct >=1)
    {
        document.write("<p>you are third</p>");
    }

 var x = Math.floor(Math.random() * 6) + 1;
 alert("you have rolled the number " + x);
