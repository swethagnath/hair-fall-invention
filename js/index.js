import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

$( document ).ready(function() {
   
        // const carousel = document.querySelector(".carousel")
        // let arrowIcons = document.querySelectorAll(".video-wrapper svg")
        // const firstImg =   document.querySelectorAll("video")[0]  
        // const IntervalText = document.getElementsByClassName('.diff-test-list') 


        // let isDragStart = false, prevPageX, prevScrollLeft;
        // let firstImgWidth = firstImg.clientWidth + 12; // getting first img width & adding 12 margin value from css of class video
        // let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // get max scrollable width

        (function(){
            const words= ["Dermatology", "Nutrition", "Ayurveda"]
            i = 0;
            setInterval(function(){
                document.getElementsByClassName("diff-test-list")[0].innerHTML = words[i = (i + 1) % words.length ]
            }, 1000)
        })()

        // const showHideIcons = () => {
        //     arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block"; 
        //     arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block"; 
        // }
        // console.log(arrowIcons)
        // arrowIcons.forEach(icon => {
        //     icon.addEventListener("click", () => {
        //         console.log("here inside arrow ico")
        //         // if clicked icon is left, reduce the width value from the carousel scroll left else add to it
        //         console.log("arrow icons click")
        //         console.log(firstImgWidth)
        //         carousel.scrollLeft += icon.id == "left" ? -(firstImgWidth*2) : firstImgWidth*2;
        //         console.log(scrollWidth)
        //         console.log(carousel.scrollLeft)
        //         setTimeout(() => showHideIcons(), 30)
        //     })
        // })

        
        // const dragStart = (e) => {
        //     isDragStart = true;
        //     prevPageX = e.pageX || e.touched[0].pageX;
        //     prevScrollLeft = carousel.scrollLeft;
        // }

        // const dragging = (e) => {
        //     if(!isDragStart) return
        //     e.preventDefault()
        //     carousel.classList.add("dragging");
        //     let positionDiff = (e.pageX ||  e.touched[0].pageX)- prevPageX;
        //     carousel.scrollLeft = prevScrollLeft - positionDiff;
        //     showHideIcons()
        // }

        // const dragStop = () => {
        //     isDragStart = false;
        //     carousel.classList.remove("dragging");
        // }

        // carousel.addEventListener("mousedown", dragStart)

        // carousel.addEventListener("mousemove", dragging)
              
        // carousel.addEventListener("mouseleave", dragStop)

      
                // var swiper = new Swiper('.swiper', {
                // slidesPerView: 3,
                // direction: getDirection(),
                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },
                // on: {
                //     resize: function () {
                //     swiper.changeDirection(getDirection());
                //     },
                // },
                // });
            
                // function getDirection() {
                // var windowWidth = window.innerWidth;
                // var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
            
                // return direction;
                // }
        
})
        

