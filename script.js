const contianerEl = document.querySelector("#container");

function changeStyle()

{
contianerEl.style.border = '2px solid black';
for (let i =1; i <= 4; i++)
{
    const  sqaureRawDiv= document.createElement("div");
    sqaureRawDiv.setAttribute("id", "row")
    sqaureRawDiv.style.border = '2px solid black';
    sqaureRawDiv.style.width = '100%';
    sqaureRawDiv.style.height = '100%'; 
    sqaureRawDiv.style.display = 'flex';
    sqaureRawDiv.style.flexDirection = "column";
    for (let c =1; c <= 4; c++)
        {
        const  sqaureColomnDiv= document.createElement("div");
        sqaureColomnDiv.setAttribute("id", `column_r${i}_c${c}`)
        sqaureColomnDiv.style.border = '2px solid black';
        sqaureColomnDiv.style.width = '100%';
       
        sqaureColomnDiv.style.height = '100%'; 
        sqaureColomnDiv.style.display = 'flex';
        sqaureRawDiv.appendChild(sqaureColomnDiv);
        }

    contianerEl.appendChild(sqaureRawDiv);
       
    
}

}

function getSquareId()
{const squares = document.querySelectorAll("[id ^=column_r]");
squares.forEach((square) => {
    let squareId = square.id;
    square.addEventListener("mouseover", ()=>
    {
        console.log(squareId);
        square.style.backgroundColor = 'grey'
        
    });
}
    
)}

    


changeStyle();

getSquareId();