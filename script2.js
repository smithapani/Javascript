let row = +prompt("Enter row",'');
for(var i=1;i<=row;i++){
    for(var j=1;j<=row;j++){
        if(j <= i){
            document.write("* ");
        }
        else{
            document.write(" ");
        }  
    }
    document.write('<br>');
}

document.write('<br>');
document.write('<br>');

let rowc = +prompt("Enter row",'');
for(var k=1;k<=rowc;k++){
    for(var x=1;x<=rowc;x++){
        if(x >= rowc+1-k){
            document.write("*");
        }
        else{
            document.write("&nbsp;&nbsp;");
        }
    }
    document.write('<br>');
}

document.write('<br>');
document.write('<br>');

let rowcount = +prompt("Enter row",'');
var toggle=1;
for(var c=1;c<=rowcount;c++){
    for(var d=1;d<=(2*rowcount)-1;d++){
        if(d>=rowcount+1-c && d<=rowcount-1+c && toggle){
            document.write("*");
            var toggle=0;
        }
        else{
            document.write("&nbsp;");
            var toggle=1;
        }
    }
    document.write("<br>");
}

document.write('<br>');
document.write('<br>');

let rowco = +prompt("Enter row",'');
for(var a=1;a<=rowco;a++){
    for(var b=1;b<=rowco;b++){
        if(b == a || b == rowco+1-a){
            document.write("*");
        }
        else{
            document.write("&nbsp;");
        } 
    }
    document.write('<br>');
}