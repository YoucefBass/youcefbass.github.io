const text=document.getElementById("introText");

text.innerHTML="In a quiet night of March 2006...";

setTimeout(()=>{

    text.style.opacity=1;

},500);

setTimeout(()=>{

    text.style.opacity=0;

},4500);
