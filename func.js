let game=[];
let beenThere=[];
let locaition=[];
let wereBooms=[];
let counter=0;
let flagCounter=10;
creatBoard();
settingBeenthere ();
setLocaition();
let counterScore=0;


// setting the bool area to see track with tiles the users already searched
function settingBeenthere (){
for(let L=0;L<9;L++)
{   
    beenThere[L]=[];
    for(let l=0; l<9 ; l++)
    {   
        beenThere[L][l]=false;
    }
}
console.log(beenThere);
}
// setting the array of locaitions to translate html id into array locaition
function setLocaition()
{
    locaition[0]=null;
    for(let h=1;h<82;h++)
        if (h==81)
        locaition[h]=[8,8];//81
        else if (h%9==0)
        locaition[h]=[Math.floor(h/9)-1,8];//right colom
        else
        locaition[h]=[Math.floor(h/9),h%9-1]// middle sells
    console.log(locaition)
}
// first set up of the board
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

// set the iner value of the board with the array value
function settingBoard()
{
    document.getElementById('flagCounterView').innerHTML=flagCounter;

    for(let kp=1;kp<82;kp++)
        document.getElementById(kp).innerHTML=kp;
     let count=1;
     
    while(count<=81)
        {   
          
            let tileNumber=parseInt(document.getElementById(count).innerHTML);

            if(tileNumber==81){
                document.getElementById(count).innerHTML=game[8][8];
            }
            else if (tileNumber%9==0)
            document.getElementById(count).innerHTML=game[Math.floor(tileNumber/9)-1][8];
            else{
            document.getElementById(count).innerHTML=game[Math.floor(tileNumber/9)][tileNumber%9-1];
                
            }
            if (  document.getElementById(count).innerHTML==9)
                wereBooms.push(count);
        
        count++;
    }
    // for (i=1;i<=81;i++)
    //          {
    //            if (document.getElementById(i).innerHTML==9)
    //            {
    //             document.getElementById(i).style.backgroundImage= "url(./photo/boomb.jpg)";
    //             document.getElementById(i).style.backgroundSize="30px"
    //             document.getElementById(i).style.backgroundRepeat="no-repeat"
    //             document.getElementById(i).style.fontSize="0px";
    //            }
    //          }
}
// a function that help translating the array into html disply 
function checkAroundSetup(r,c){
let sum=0;
if (game[r][c]==9)
{
return;
}
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
else if (r==0 && c==8) // courner top right
{
    if (game[r][c-1]==9)
        sum++;
    if (game[r+1][c]==9)
        sum++;
    if (game[r+1][c-1]==9)
        sum++;

        game[r][c]=sum;
        return;
}
else if (r==8 && c==0) // courner bottom left
{
    if (game[r][c+1]==9)
        sum++;
    if (game[r-1][c]==9)
        sum++;
    if (game[r-1][c+1]==9)
        sum++;

        game[r][c]=sum;
        return;
}
else if (r==8 && c==8)// courner bottom right
{
    if (game[r][c-1]==9)
        sum++;
    if (game[r-1][c]==9)
        sum++;
    if (game[r-1][c-1]==9)
        sum++;

        game[r][c]=sum;
        return;
}
else if (c==0)//left collum
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
else if (r==0)// top row
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
else if (c==8) //right colum
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
else if(r==8)// bottom row 
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
else // rest of board
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

//on pressing the button
function tileEvent(pIda)
{
    let searc=document.getElementById("flagSearch").value;

    /////////the game over///////////// 
    if (game[locaition[pIda][0]][locaition[pIda][1]]==9 && beenThere[locaition[pIda][0]][locaition[pIda][1]]==false && searc!="flag" )
    {   
        /// show corrent boomb
        document.getElementById(pIda).style.backgroundImage= "url(./photo/boomb.jpg)";
        document.getElementById(pIda).style.backgroundSize="30px";
        document.getElementById(pIda).style.backgroundRepeat="no-repeat";
        document.getElementById(pIda).style.fontSize="0px";
        document.getElementById(pIda).style.display="flex"; //display the tile after pressed
        document.getElementById(pIda).style.alignItems="center";
        document.getElementById(pIda).style.justifyContent="center";
        document.getElementById('resetLogo').src="./logo/smiley3.ico";
        alert("looser!"); 

        //// show all boombs  ///
        for (O=0; O<9 ; O++ )
            {
                
                document.getElementById(wereBooms[O]).style.backgroundImage= "url(./photo/boomb.jpg)";
                document.getElementById(wereBooms[O]).style.backgroundSize="30px";
                document.getElementById(wereBooms[O]).style.backgroundRepeat="no-repeat";
                document.getElementById(wereBooms[O]).style.fontSize="0px";
                document.getElementById(wereBooms[O]).style.display="flex"; //display the tile after pressed
                document.getElementById(wereBooms[O]).style.alignItems="center";
                document.getElementById(wereBooms[O]).style.justifyContent="center";
            }
            ////// disable the game ////
            for (i=0;i<9;i++)
                for(j=0; j<9;j++)
                    beenThere[i][j]=true;

    }
    //// disable the tile wich flag was pressed apon 
    if (searc=="flag" &&  beenThere[locaition[pIda][0]][locaition[pIda][1]]==false && flagCounter>0)
    {       
                if (document.getElementById(pIda).classList.contains("flagMark")){
                 document.getElementById(pIda).classList.remove("flagMark");
                 flagCounter++;
                 document.getElementById('flagCounterView').innerHTML=flagCounter;

                 return;
                }
                 else {
                document.getElementById(pIda).classList.add("flagMark");
                flagCounter--;
                document.getElementById('flagCounterView').innerHTML=flagCounter;
                 
                return;
                 }
    }
    
    if( searc=="search" && document.getElementById(pIda).classList.contains("flagMark"))
    {
        document.getElementById(pIda).classList.remove("flagMark");
        flagCounter++;
        document.getElementById('flagCounterView').innerHTML=flagCounter;   
    }
    ///// diable the bottons that were already pressed 
    if (beenThere[locaition[pIda][0]][locaition[pIda][1]]==true){
        return;
    }

    /// wont let you press a bottun with  a flag 
    if ( document.getElementById(pIda).style.fontSize=="0px")
    {
        return;
    }

   // neeeds to change - keeps track of the game 
 
            
    //adds to counter


    counterScore++;
    if(counterScore==71)
    {
        for (O=0; O<9 ; O++ )
        {
            
            document.getElementById(wereBooms[O]).style.backgroundImage= "url(./photo/boomb.jpg)";
            document.getElementById(wereBooms[O]).style.backgroundSize="30px";
            document.getElementById(wereBooms[O]).style.backgroundRepeat="no-repeat";
            document.getElementById(wereBooms[O]).style.fontSize="0px";
            document.getElementById(wereBooms[O]).style.display="flex"; //display the tile after pressed
            document.getElementById(wereBooms[O]).style.alignItems="center";
            document.getElementById(wereBooms[O]).style.justifyContent="center";
        }
        alert("WIN");
        document.getElementById('resetLogo').src="./logo/smiley.ico";
        
    }
    beenThere[locaition[pIda][0]][locaition[pIda][1]]=true;//add to array if activated

   

    document.getElementById(pIda).style.display="flex"; //display the tile after pressed
    document.getElementById(pIda).style.alignItems="center";
    document.getElementById(pIda).style.justifyContent="center";

    let valu=document.getElementById(pIda).innerHTML;
   

   
    
    if ( valu !=0){
        if (valu==1){
        document.getElementById(pIda).style.color="blue";
        document.getElementById(pIda).style.fontSize="14px";
        document.getElementById(pIda).style.fontWeight="600";
        }
        else if(valu==2){
            document.getElementById(pIda).style.color="green";
            document.getElementById(pIda).style.fontSize="14px";
            document.getElementById(pIda).style.fontWeight="600"; 
        }
        else if(valu==3){
            document.getElementById(pIda).style.color="orange";
            document.getElementById(pIda).style.fontSize="14px";
            document.getElementById(pIda).style.fontWeight="600"; 
        }
        else {
            document.getElementById(pIda).style.color="red";
            document.getElementById(pIda).style.fontSize="14px";
            document.getElementById(pIda).style.fontWeight="600"; 
        }
    }
    else
        {
            document.getElementById(pIda).style.fontSize="0";
            document.getElementById(pIda).style.backgroundColor="grey";
            checkAround(pIda);   
        }
        console.log(counterScore);
        
       
    }
// dfs search algorithim 
function checkAround (pId)
{
  
    if (pId==1)
    {
        if ( beenThere[locaition[pId+1][0]][locaition[pId+1][1]]!=true)tileEvent(pId+1);
        if ( beenThere[locaition[pId+9][0]][locaition[pId+9][1]]!=true)tileEvent(pId+9);
        if ( beenThere[locaition[pId+10][0]][locaition[pId+10][1]]!=true)tileEvent(pId+10);
    }
    //top lef 
    else if (pId==9)
    {
        if ( beenThere[locaition[pId-1][0]][locaition[pId-1][1]]!=true)tileEvent(pId-1);
        if ( beenThere[locaition[pId+8][0]][locaition[pId+8][1]]!=true)tileEvent(pId+8);
        if ( beenThere[locaition[pId+9][0]][locaition[pId+9][1]]!=true)tileEvent(pId+9);
    }
    // top right
    else if (pId==73)
    {
        if ( beenThere[locaition[pId+1][0]][locaition[pId+1][1]]!=true)tileEvent(pId+1);
        if ( beenThere[locaition[pId-8][0]][locaition[pId-8][1]]!=true)tileEvent(pId-8);
        if ( beenThere[locaition[pId-9][0]][locaition[pId-9][1]]!=true)tileEvent(pId-9);
    }
    // botom left
    else if (pId==81)
    {
        if ( beenThere[locaition[pId-1][0]][locaition[pId-1][1]]!=true)tileEvent(pId-1);
        if ( beenThere[locaition[pId-9][0]][locaition[pId-9][1]]!=true)tileEvent(pId-9);
        if ( beenThere[locaition[pId-10][0]][locaition[pId-10][1]]!=true)tileEvent(pId-10);
    }
    // botom right
    else if (pId%9==1)
    {
        if ( beenThere[locaition[pId+1][0]][locaition[pId+1][1]]!=true)tileEvent(pId+1);
        if ( beenThere[locaition[pId+10][0]][locaition[pId+10][1]]!=true)tileEvent(pId+10);
        if ( beenThere[locaition[pId-8][0]][locaition[pId-8][1]]!=true)tileEvent(pId-8);
        if ( beenThere[locaition[pId+9][0]][locaition[pId+9][1]]!=true)tileEvent(pId+9);
        if ( beenThere[locaition[pId-9][0]][locaition[pId-9][1]]!=true)tileEvent(pId-9);
    }
    // left col
    else if (pId%9==0)
    {
        if ( beenThere[locaition[pId-1][0]][locaition[pId-1][1]]!=true)tileEvent(pId-1);
        if ( beenThere[locaition[pId+8][0]][locaition[pId+8][1]]!=true)tileEvent(pId+8);
        if ( beenThere[locaition[pId-10][0]][locaition[pId-10][1]]!=true)tileEvent(pId-10);
        if ( beenThere[locaition[pId+9][0]][locaition[pId+9][1]]!=true)tileEvent(pId+9);
        if ( beenThere[locaition[pId-9][0]][locaition[pId-9][1]]!=true)tileEvent(pId-9);
    }
    // right col
    else if (pId>1 && pId<9)
    {
        if ( beenThere[locaition[pId+1][0]][locaition[pId+1][1]]!=true)tileEvent(pId+1);
        if ( beenThere[locaition[pId-1][0]][locaition[pId-1][1]]!=true)tileEvent(pId-1);
        if ( beenThere[locaition[pId+8][0]][locaition[pId+8][1]]!=true)tileEvent(pId+8);
        if ( beenThere[locaition[pId+9][0]][locaition[pId+9][1]]!=true)tileEvent(pId+9);
        if ( beenThere[locaition[pId+10][0]][locaition[pId+10][1]]!=true)tileEvent(pId+10);
    }
    // top rows
    else if (pId>73 && pId<81)
    {
        if ( beenThere[locaition[pId+1][0]][locaition[pId+1][1]]!=true)tileEvent(pId+1);
        if ( beenThere[locaition[pId-1][0]][locaition[pId-1][1]]!=true)tileEvent(pId-1);
        if ( beenThere[locaition[pId-8][0]][locaition[pId-8][1]]!=true)tileEvent(pId-8);
        if ( beenThere[locaition[pId-9][0]][locaition[pId-9][1]]!=true)tileEvent(pId-9);
        if ( beenThere[locaition[pId-10][0]][locaition[pId-10][1]]!=true)tileEvent(pId-10);
    }
    // bot row
    else
    {
        if ( beenThere[locaition[pId+10][0]][locaition[pId+10][1]]!=true)tileEvent(pId+10);
        if ( beenThere[locaition[pId+9][0]][locaition[pId+9][1]]!=true)tileEvent(pId+9);
        if ( beenThere[locaition[pId+8][0]][locaition[pId+8][1]]!=true)tileEvent(pId+8);
        if ( beenThere[locaition[pId-10][0]][locaition[pId-10][1]]!=true)tileEvent(pId-10);
        if ( beenThere[locaition[pId-9][0]][locaition[pId-9][1]]!=true)tileEvent(pId-9);
        if ( beenThere[locaition[pId-8][0]][locaition[pId-8][1]]!=true)tileEvent(pId-8);
        if ( beenThere[locaition[pId+1][0]][locaition[pId+1][1]]!=true)tileEvent(pId+1);
        if ( beenThere[locaition[pId-1][0]][locaition[pId-1][1]]!=true)tileEvent(pId-1);
    }
   // evry middle row 
}
//to change the value of the flag for the user to use 
function startFlag()
{
let flagOrsearch = document.getElementById("flagSearch").value;
if (flagOrsearch=="search"){
document.getElementById("flagSearch").value="flag";
document.getElementById('flagOnOff').style.display="block";
}
else{
document.getElementById("flagSearch").value="search";
document.getElementById('flagOnOff').style.display="none";
}
console.log(document.getElementById("flagSearch").value)
}

    

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

