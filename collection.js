var productcont=document.getElementById("pro")
var searchbo=document.getElementById("search")
var proli=productcont.querySelectorAll("div")
searchbo.addEventListener("keyup",function()
{
    var enterval= event.target.value.toUpperCase()

    for(count=0;count<proli.length;count=count+1)
    {
        var produname=proli[count].querySelector("p").textContent
        if(produname.toUpperCase().indexOf(enterval)<0){
            proli[count].style.display="none"
        }
        else{
            proli[count].style.display="block"
        }
    }
    
})