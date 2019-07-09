export default function smothScroll(e, id) {
    e.preventDefault();
    // 1. Get the element id to which you want to scroll
    const scrollElemId = id;
    
    // 2. find that node from the document
    const scrollEndElem = document.getElementById(scrollElemId);

    const scrollEndElemTop = scrollEndElem.offsetTop - 20;
    
    // 3. and well animate to that node.. 
    window.scrollTo({
        top: scrollEndElemTop,
        behavior: "smooth",
    })
}