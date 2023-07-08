
const img = document.querySelector('.main-img img');
const togglebtn = document.querySelector('.toggle');
const toggletext = document.querySelectorAll('.toggle-text');


let bool = true;
togglebtn.addEventListener('click', ()=>{
    if(bool === true)
    {
        img.src = "light.png";

        toggletext.forEach(text =>{
            text.innerText ="White ";
        });

        bool = false;
    }
    else
    {
        img.src ="dark.webp";

        toggletext.forEach(text =>{
            text.innerText ="Black";
        });

        bool = true;
    }

    document.body.classList.toggle('light-theme');

    togglebtn.firstElementChild.classList.toggle('fa-sun');
})