export default function smothScroll(top) {
    window.scrollTo({ 
        top: top, 
        behavior: "smooth" 
    });
}