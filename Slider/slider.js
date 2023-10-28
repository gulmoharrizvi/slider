console.log("it works");


const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const length = 4;
let slideNumber = 1;
let arr = Array.from(document.getElementsByClassName("button"))


function last_slide()
{
    slider.style.transform = `translateX(-${(length-1) * 800}px)`
}

function first_slide()
{
    slider.style.transform = `translateX(0px)`
}

function left_click()
{
    if(slideNumber===1)
    {
        arr[0].classList.remove("selected_button")
        slideNumber=length; 
        arr[length-1].classList.add("selected_button") 
        console.log(slideNumber)
        last_slide()
    }
    else
    {   arr[slideNumber-1].classList.remove("selected_button")
        slideNumber--;
        arr[slideNumber-1].classList.add("selected_button")
        console.log(slideNumber)
        slider.style.transform = `translate(-${(slideNumber-1)*800}px)`
    }
}

function right_click()
{
    if(slideNumber==length)
    {
        arr[length-1].classList.remove("selected_button")
        slideNumber=1;
        arr[slideNumber-1].classList.add("selected_button")
        console.log(slideNumber)
        first_slide()
    }
    else
    {
        arr[slideNumber-1].classList.remove("selected_button")
        slideNumber++;
        console.log(slideNumber)
        arr[slideNumber-1].classList.add("selected_button")
        slider.style.transform = `translate(-${(slideNumber-1)*800}px)`
    }

}

left.addEventListener("click",left_click)

right.addEventListener("click", right_click)

function position(i)
{
    if(slideNumber===(i+1))
    {
        console.log(slideNumber)
        return;
    }
    else if(slideNumber>(i+1))
    {
        arr[slideNumber-1].classList.remove("selected_button");
        slider.style.transform = `translate(-${i*800}px)`
        arr[i].classList.add("selected_button");
        slideNumber=i+1;
        console.log(slideNumber)
    }
    else
    {
        arr[slideNumber-1].classList.remove("selected_button");
        slider.style.transform = `translate(-${i*800}px)`
        arr[i].classList.add("selected_button")
        slideNumber=i+1;
        console.log(slideNumber)
    }
}

for(let i=0;i<length;i++)
{
    // alert(i , "clicked");
    arr[i].addEventListener("click",()=>{
        //alert(i , "clicked");
        position(i)
    });
}



