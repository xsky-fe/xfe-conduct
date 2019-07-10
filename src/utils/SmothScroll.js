export default function smothScroll(e, id) {
    e.preventDefault();
    const scrollElemId = id;
    
    const scrollEndElem = document.getElementById(scrollElemId);

    const scrollEndElemTop = scrollEndElem.offsetTop - 20;
    
    window.scrollTo({
        top: scrollEndElemTop,
        behavior: "smooth",
    })
}