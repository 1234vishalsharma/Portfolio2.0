let DocumentTitle = document.getElementById('docTitle'); 

window.addEventListener('blur' , ()=>{
    DocumentTitle.innerHTML = "Come Soon 😭";
})
window.addEventListener('focus' , ()=>{
    DocumentTitle.innerHTML = '@WebDev';
})

function btn_clicked(btn_id){
    window.open('../contact.html' , "_self")
}



function follow_on_insta(){
    window.open("https://www.instagram.com/01_vishal_sharma_01/","_blank");
}
function open_projects(project_id){
    if(project_id == "Memo_AI"){
        window.open("https://github.com/1234vishalsharma/AI-Assistance","_blank");
    }
    else if(project_id =="paint_app"){
        window.open("https://github.com/1234vishalsharma/DoPaint","_blank");
    }
    else if(project_id == "calc"){
        window.open("https://github.com/1234vishalsharma/Oasis-Infobyte/tree/main/My_calculator","_blank");
    }
    else if(project_id == "e_comm"){
        window.open("https://github.com/1234vishalsharma/E_commerce_APP","_blank");
    }
    else if(project_id=="temp_cnvrt"){
        window.open("https://github.com/1234vishalsharma/Bharat-Intern-Task/tree/main/TempCnvrt","_blank");
    }
    else if(project_id == "TTT"){
        window.open("https://github.com/1234vishalsharma/CodeClause-Internship-Task/tree/main/ZERO_KATA","_blank");
    }
    else if(project_id == "todo"){
        window.open("https://github.com/1234vishalsharma/Oasis-Infobyte/tree/main/Todolist","_blank");
    }
    else if(project_id == "FShare"){
        window.open("https://f-share.netlify.app/","_blank");
    }else if(project_id == 'videoTranscoder'){
        window.open("https://transcoder.vercel.app/" , "_blank");
    }else if(project_id == "RealEstate"){
        window.open("https://real-estste.vercel.app/" , "_blank");
    }
    else if(project_id == "stopwatch"){
        window.open("https://github.com/1234vishalsharma/Oasis-Infobyte/tree/main/StopWatch" , "_blak");
    }
    else{
        window.open('https://github.com/1234vishalsharma' , "_blank");
    }
}

function open_platforms(platform_id){
    if(platform_id == "leet_code"){
        window.open("https://leetcode.com/1234vishalsharma/","_blank");
    }
    else if(platform_id == "gfg"){
        window.open("https://auth.geeksforgeeks.org/user/vishalsharmatm","_blank");
    }
    else if(platform_id == "hrank"){
        window.open("https://www.hackerrank.com/profile/vishalsharma1511","_blank");
    }else if(platform_id == 'github'){
        window.open("https://github.com/1234vishalsharma/","_blank");
    }
}

function download_resume(){
    // to be implemented
    alert("Press Ok to download resume");
        try{
            window.location.href = "Resume/ResumeAI.pdf";
         }catch(e){}
}

function showMenu(){
    let menu = document.querySelector(".menu_header");
    menu.classList.toggle("show_menu");
}

// document.addEventListener('contextmenu', event => event.preventDefault());