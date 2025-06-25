document.addEventListener("DOMContentLoaded", function() {
    // Create an observer with a callback function
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Element is in view!');
                entry.target.classList.add("animate__fadeIn");
                
            } else {
                console.log('Element is out of view!');
                entry.target.classList.remove('visible');
            }
        });
    });

    // Select the element to be observed
    const target = document.querySelectorAll('.target');
    
    // Start observing the selected element
    target.forEach(e=>{
        observer.observe(e);
    })
    
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const carouselN= document.querySelector('.glider-next');
    const carouselP= document.querySelector('.glider-prev');
    next.addEventListener('click',_=>{
        carouselN.click();


    })
    prev.addEventListener('click',_=>{
carouselP.click();
    })
    const scroller = document.getElementById('scroller');
    window.onscroll = function () {
        if (scrollY >= 400 && window.innerWidth>=1200) {
          scroller.classList.remove("hidden");
          scroller.classList.add("animate__fadeIn");
        } else {
          scroller.classList.remove("animate__fadeIn");
          scroller.classList.add("hidden");
        }
      };
      scroller.onclick = function () {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      };
      new Glider(document.querySelector('.glider'), {
        slidesToShow: 7,
        slidesToScroll: 1,
        draggable: false,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [
          {
            // screens greater than >= 1024px
            breakpoint: 1200,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 1
            }
        },
        {
          breakpoint:640,
          settings:{
            slidesToShow: 4,
            slidesToScroll:1
          }
        }

        ]
    });
    new Glider(document.querySelector('.gliderr'), {
      slidesToShow: 5,
      slidesToScroll: 1,
      draggable: false,
     
      arrows: {
        prev: '.glider-prevv',
        next: '.glider-nextt'
      },
      responsive:[
        {
          breakpoint:1200,
          settings:{
            slidesToShow:5,
            slidesToScroll:1
          }
        },
        {
          breakpoint:640,
          settings:{
            slidesToShow:3,
            slidesToScroll:1
          }
        },
        {
          breakpoint:300,
          settings:{
            slidesToShow:1,
            slidesToScroll:1
          }
        }
      ]
    });
    const glider = new Glider(document.querySelector('.main-glider'), {
      slidesToShow: 1,
      dots: '.main-dots',
      draggable: true,
      arrows: {
        prev: '.main-glider-prev',
        next: '.main-glider-next'
      }
    });
    
    
    function autoScroll() {
      let slideIndex = 0;
      const slideCount = glider.slides.length;
    
      setInterval(() => {
        slideIndex = (slideIndex + 1) % slideCount; 
        glider.scrollItem(slideIndex);
       
      }, 8000); 
      
    }
    
  
    autoScroll();
    
 
    let gliderInstance = null;
    if(window.innerWidth<=640){
      if(!gliderInstance){
        gliderInstance = new Glider(document.querySelector('.glider_track'), {
          slidesToShow: 1,
          dots: '#dots_track',
          draggable: true,
          arrows: {
            prev: '.glider-prev-track',
            next: '.glider-next-track'
          }
        })
      }
    }
    else{
      if(gliderInstance){
        gliderInstance.destroy();
        gliderInstance = null;
      }
    }

    let gliderInstance2 = null;
    if(window.innerWidth<=640){
      if(!gliderInstance2){
        gliderInstance2 = new Glider(document.querySelector('.glider-trackk'),{
          slidesToShow: 3,
          dots: '#dots-trackk',
          draggable: true,
          arrows: {
            prev: '.glider-prev-trackk',
            next: '.glider-next-trackk'
          }
        })
      }
     
    }
    else{
      if(gliderInstance2){
        gliderInstance2.destroy();
        gliderInstance2=null;
      }
    }
    
    
});
