const launch_btn=document.getElementById("launch_btn");
const modal=document.getElementsByClassName("modal")[0];
const cross_btn=document.getElementById("modal_close_btn");

launch_btn.onclick=()=>{
    modal.style.display="block";

}
cross_btn.onclick=()=>{
    modal.style.display="none";
}
window.onclick=(e)=>{
    console.log(e.target)
    if (e.target===modal) {
        modal.style.display="none";
    }
}