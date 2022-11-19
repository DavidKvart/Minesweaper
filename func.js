let game=[];
let counter=0;

creatBoard();
function creatBoard()
{
   
    const colum=9;
    const rows=9;
    // creat new empy array
    for(let i = 0; i<rows; i++)
        {
            game[i]=[];
            for (j=0; j<colum;j++)
            {
                game[i][j] = 0;
            }
        }

    console.log(game);//for test
    
    // random the boombs 
    let diff=10;
    let mineLocaitionRow=0,mineLocaitionCol=0;
    for (let i = 0; i<diff; i++)
    {
        mineLocaitionCol=Math.floor(Math.random() * 9);
        mineLocaitionRow=Math.floor(Math.random() * 9);

        if (game[mineLocaitionRow][mineLocaitionCol]==0)
        game[mineLocaitionRow][mineLocaitionCol]=9;
        else
        i--;
    }

    console.log(game);// for test
    // pot value into all of the array with are not boombs
    for(a=0;a<9;a++)
        for (b=0; b<9;b++)
            checkAroundSetup(a,b);

         console.log(game); // for test
        //  console.log(Math.ceil(document.getElementById(1).value/9));// round it up - number of row
    
}

function settingBoard()
{
    for (let p=1;p<=5; p++)
    {
        document.getElementById(p).innerHTML=p;
        console.log(  document.getElementById(p).innerHTML);
    }

}



function checkAroundSetup(r,c){
  
let sum=0;
if (game[r][c]==9)
return;
else
{
if (r==0 && c==0)// courner top left
{
    if (game[r][c+1]==9)
        sum++;
    if (game[r+1][c]==9)
        sum++;
    if (game[r+1][c+1]==9)
        sum++;

        game[r][c]=sum;
        return;
}
if (r==0 && c==8) // courner top right
{
    if (game[r][c-1]==9)
        sum++;
    if (game[r+1][c]==9)
        sum++;
    if (game[r+1][c-1]==0)
        sum++;

        game[r][c]=sum;
        return;
}
 if (r==8 && c==0) // courner bottom left
{
    if (game[r][c+1]==9)
        sum++;
    if (game[r-1][c]==9)
        sum++;
    if (game[r-1][c+1]==0)
        sum++;

        game[r][c]=sum;
        return;
}
if (r==8 && c==8)// courner bottom right
{
    if (game[r][c-1]==9)
        sum++;
    if (game[r-1][c]==9)
        sum++;
    if (game[r-1][c-1]==0)
        sum++;

        game[r][c]=sum;
        return;
}
if (c==0)//left collum
{   
     if (game[r-1][c+1]==9)
                sum++;
     if (game[r][c+1]==9)
                sum++;
     if (game[r+1][c+1]==9)
                sum++;     
     if (game[r+1][c]==9)
                sum++;     
     if (game[r-1][c]==9)
                sum++;   
    
        game[r][c]=sum;
         return;  
}
if (r==0)// top row
{
    if (game[r+1][c-1]==9)
        sum++;
    if (game[r+1][c]==9)
        sum++;
    if (game[r+1][c+1]==9)
        sum++;
    if (game[r][c+1]==9)
        sum++;
    if (game[r][c-1]==9)
        sum++;

        game[r][c]=sum;
        return;
} 
if (c==8) //right colum
{
    if (game[r+1][c-1]==9)
        sum++;
    if (game[r][c-1]==9)
        sum++;
    if (game[r-1][c-1]==9)
        sum++;
    if (game[r+1][c]==9)
        sum++;
    if (game[r-1][c]==9)
        sum++;

        game[r][c]=sum;
        return;
} 
if(r==8)// bottom row 
{
    if (game[r-1][c-1]==9)
        sum++;
    if (game[r-1][c]==9)
        sum++;
    if (game[r-1][c+1]==9)
        sum++;
    if (game[r][c+1]==9)
        sum++;
    if (game[r][c-1]==9)
        sum++;

        game[r][c]=sum;
        return;
} 
else 
{
    for(let i=-1; i<2 ; i++)
    {
        for(let j=-1; j<2 ; j++){
           if  (game[r+i][c+j]==9)
                sum++;
        }  
    }
    game[r][c]=sum;
    return;
        
}
}

}



// function startFlag()
// {
// let flagOrsearch = document.getElementById("flagSearch").value;
// if (flagOrsearch=="search")
// document.getElementById("flagSearch").value="flag";
// else
// document.getElementById("flagSearch").value="search";

// console.log(document.getElementById("flagSearch").value)
// }



// function changeBack(x)
// {
//     let y=document.getElementById(x).src;
//     console.log(y);

//     if(document.getElementById("flagSearch").value=="search" ){}
//     //function to detect mines
//     else{
//         if(y=="http://127.0.0.1:5500/photo/flag.png"){
//         document.getElementById(x).style.display="none";
//         document.getElementById(x).src="./photo/boomb.jpg";
//         }
//         else{
//         document.getElementById(x).src="./photo/flag.png";
//         document.getElementById(x).style.display="block";
//         }
//     }
    
// }

