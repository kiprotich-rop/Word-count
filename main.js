let textArea = document.getElementById('text');
let wordDiv = document.getElementById('word');
let charecterDiv = document.getElementById('charectres');


console.log(textArea);
textArea.addEventListener("input",() => {
    let str = textArea.value;
    wordDiv.innerText= (str.trim()).length;
    if(str.length==0)
    {
        charecterDiv.innerText=0;    
    }else
    {
        charecterDiv.innerText= str.split(" ").length;
    }
})