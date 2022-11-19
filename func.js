let game=[];

creatBoard()

function creatBoard()
{
   
    const colum=3;
    const rows=3;
    for(let i = 0; i<rows; i++)
        {
            game[i]=[];
            for (j=0; j<colum;j++)
            {
                game[i][j] = 0;
            }
        }

    console.log(game);
    

    let diff=2;
    let mineLocaitionRow=0,mineLocaitionCol=0;
    for (let i = 0; i<diff; i++)
    {
        mineLocaitionCol=Math.floor(Math.random() * 3);
        mineLocaitionRow=Math.floor(Math.random() * 3);

        if (game[mineLocaitionRow][mineLocaitionCol]==0)
        game[mineLocaitionRow][mineLocaitionCol]=1;
        else
        i--;
    }
    console.log(game);

    document.getElementById("tile1").style.backgroundColor="red";
    // document.getElementById("b").style.backgroundColor="red";
    // document.body.style.backgroundColor = "red";
    // drawBoard();
    
}


// function drawBoard()
// {
//     let tracker=1;
//     for (let i=0;i<game.length;i++)
//     {
//         for (let j=0; j<game.length;j++)
//             {
//                 // if (game[i][j]==1)
//                    { document.getElementById("#2").backgroundImage="url('./photo/boomb.jpg')";} 
//                 // else
//                 //    {} // document.getElementById(tracker).style.backgroundColor="red";

//                 // tracker++;
//             }
//     }
// }           




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

