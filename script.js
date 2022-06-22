document.getElementById("toggleTheme").addEventListener("click",changeBg);
document.querySelector("body").style.backgroundColor=localStorage.getItem("bg");
document.querySelector("body").style.color=localStorage.getItem("color");
if(localStorage.getItem("bg")=="white"){
    document.getElementById("activeTheme").innerText = "Active Theme: light"
}
else if(localStorage.getItem("bg")=="black"){
    document.getElementById("activeTheme").innerText = "Active Theme: dark"
}
else{
    document.getElementById("activeTheme").innerText = "Active Theme: none"
}

function changeBg(){
    if(document.querySelector("body").style.backgroundColor=="black"){
        localStorage.setItem("bg","white");
        localStorage.setItem("color","black");
        document.querySelector("body").style.backgroundColor=localStorage.getItem("bg");
        document.querySelector("body").style.color=localStorage.getItem("color");
        if(localStorage.getItem("bg")=="white"){
            document.getElementById("activeTheme").innerText = "Active Theme: light"
        }
        else{
            document.getElementById("activeTheme").innerText = "Active Theme: dark"
        }
    }
    else{
        localStorage.setItem("bg","black");
        localStorage.setItem("color","white");
        document.querySelector("body").style.backgroundColor=localStorage.getItem("bg");
        document.querySelector("body").style.color=localStorage.getItem("color");
        if(localStorage.getItem("bg")=="white"){
            document.getElementById("activeTheme").innerText = "Active Theme: light"
        }
        else{
            document.getElementById("activeTheme").innerText = "Active Theme: dark"
        }
    }  
}