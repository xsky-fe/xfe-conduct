export default function smothScroll(e, id) {
    e.preventDefault();
    
    const scrollEndElem = document.getElementById(id);

    const scrollEndElemTop = scrollEndElem.offsetTop - 20;
    
    window.scrollTo({
        top: scrollEndElemTop,
        behavior: "smooth",
    })
}