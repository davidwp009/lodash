//const input = document.getElementById('searchInput');
//function fetchData(query) {
//    console.log('запит', query)
//}




//const trorrleFetch = _.throrrle(fetchData, 500);
//input.addEventListener('input', (e) => {
//    trorrleFetch(e.target.value);
//
//})



//function debounce(func, delay) {
//    return function (...args) {
//      clearTimeout(timeout);
//      timeout = setTimeout(() => func.apply(this, args), delay);
//    };
//  }
//  
//  function resizeImage() {
//    const newSize = slider.value; 
//    image.style.width = `${newSize}px`; 
//  }
  
//  slider.addEventListener("input", debounce(resizeImage, 100));




// const slider = document.querySelector(".slider__input");
// const image = document.querySelector(".slider__image");
// const size = document.querySelector("#size");
// slider.addEventListener('input', _.debounce(() => {
//     image.style.width = `${slider.value}px`;
//     image.style.height = `${slider.value}px`;
//     size.textContent = slider.value;

// }, 300));




// const box = document.querySelector("#box");
// const muveBox = (x, y) => {
//     box.style.top = `${y}px`;
//     box.style.left = `${x}px`;
// }
// const debounceBox = _.debounce((x, y) => muveBox(x, y),100)  
// document.addEventListener('mousemove', (ev) => {
//     const x = ev.clientX;
//     const y = ev.clientY;
//     debounceBox(x, y)
// })




// document.addEventListener('DOMContentLoaded', () => {
//     const fruit = document.querySelectorAll('fruit-list li');

//     const obserever = new IntersectionObserver((entries) => {
//         entries.forEarch((entry) => {
//             const img = entry.target.querySelector('img');


//             if(entry.isIntersecting) {
//                 img.src = img.getAttribute('data-high-res')
//                 entry.target.classList.add('visible');

//             } else {
//                 img.src = img .src.replace('-high', 'low')
//                 entries.target.classList.remove('visible');
//             }
//         })
//         })
//         fruits.forEarch((fruit) => obserever.observe(fruit))
  
// })
  





document.getElementById('load-img').addEventListener('click', () => {
    const images = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => img.classList.add('loaded');
                observer.unobserve(img);
            }
        })
    },
    {rootMargin:'50px'});
    images.forEach((img) => {
        observer.observe(img)
    })
})
  
  
  