document.getElementById("nav-icon").onclick=function(){this.classList.toggle("opened"),document.getElementById("nav-list").classList.toggle("opened")};const navbar=document.querySelector(".navbar"),margintop=parseFloat(getComputedStyle(navbar).getPropertyValue("margin-top")),sections=Array.from(document.getElementsByTagName("section")),contents=(window.addEventListener("scroll",()=>{scrollY>=margintop?navbar.classList.add("fixed"):navbar.classList.remove("fixed"),sections.forEach(e=>{scrollY+navbar.offsetHeight>=e.offsetTop&&scrollY+navbar.offsetHeight<=e.offsetTop+e.offsetHeight&&(e.classList.contains("bg-light")?navbar.classList.add("nav-dark"):navbar.classList.remove("nav-dark"))})}),{"nav-home":"Home","nav-about":"About","nav-testimonials":"Testimonials","nav-certifications":"Certifications","main-welcome":"Hello, we are Monshed Company. We specialize in","main-title":"Social Media and Digital Marketing Services","main-bief":"We have a course that teaches you digital marketing from scratch","main-link":"Book Now!","about-headding-h":"About Us","about-headding-p":"All you need to know about us.","card1-h":"Monshed Company","card1-p":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum alias ea officiis distinctio totam perferendis porro voluptas hic delectus suscipit.","card1-span1":"Based In: Tanta, Egypt","card1-span2":"Stablish Date: xx - xx - xxxx","card1-span3":"Work Field: Social Media Services","card2-h":"Zaid Osama","card2-p":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum alias ea officiis distinctio totam perferendis porro voluptas hic delectus suscipit.","card2-span1":"Based In: Tanta, Egypt","card2-span2":"Work Field: Digital Marketing","card2-span3":"Work Experience: +x yr","card3-h":"Monshed Company","card3-p":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum alias ea officiis distinctio totam perferendis porro voluptas hic delectus suscipit.","card3-span1":"Based In: Tanta, Egypt","card3-span2":"Stablish Date: xx - xx - xxxx","card3-span3":"Work Field: Social Media Services","testimonials-headding-h":"Testimonials","testimonials-headding-p":"What them sayed about us.","testimonials-slider-prev":"prev","testimonials-slider-next":"next","certifications-headding-h":"Certifications","certifications-headding-p":"Some of Zaid certifications.","certification-1":"certification in something","certification-2":"certification in something","certification-3":"certification in something","certification-4":"certification in something","certification-5":"certification in something","certification-6":"certification in something","last-interact-p":"Don't forget to join our Digital Markteing course.","last-interact-btn":"Join Now","footer-home":"Home","footer-about":"About","footer-testimonials":"Testimonials","footer-certifications":"Certifications"}),html=document.getElementsByTagName("html")[0],switcher=document.getElementById("lang-switcher"),switcherImg=switcher.firstElementChild;let dir=html.dir;function toggleContent(){"rtl"===dir?html.lang="ar":html.lang="en",html.dir=dir,[switcherImg.src,switcherImg.dataset.alt]=[switcherImg.dataset.alt,switcherImg.src],Array.from(document.querySelectorAll("[data-name]")).forEach(e=>{[contents[e.dataset.name],e.textContent]=[e.textContent,contents[e.dataset.name]]})}switcher.onclick=()=>{dir="rtl"===dir?"ltr":"rtl",localStorage.setItem("dir",dir),toggleContent()},window.addEventListener("load",()=>{dir=localStorage.getItem("dir")||html.dir,console.log(dir),"ltr"===dir&&toggleContent()});const slider=document.querySelector(".testimonials .slider"),slides=Array.from(slider.children);slides.shift();let count=parseInt(getComputedStyle(slider).getPropertyValue("--images-count")),gap=parseFloat(getComputedStyle(slider).getPropertyValue("gap")),sliderWidth=parseFloat(getComputedStyle(slider).getPropertyValue("width")),slideWidth=(sliderWidth-gap*(count-1))/count;function resizeSlides(){count=parseInt(getComputedStyle(slider).getPropertyValue("--images-count")),gap=parseFloat(getComputedStyle(slider).getPropertyValue("gap")),sliderWidth=parseFloat(getComputedStyle(slider).getPropertyValue("width")),slideWidth=(sliderWidth-gap*(count-1))/count,slides.forEach((e,t)=>{e.style.width=slideWidth+"px"}),slider.firstElementChild.style.width=slideWidth+"px",slide()}window.addEventListener("load",resizeSlides),window.addEventListener("resize",resizeSlides);const prevBtn=document.querySelector(".slider-controls .prev"),nextBtn=document.querySelector(".slider-controls .next");let moves=0;function slide(){slides.forEach((e,t)=>{e.style.setProperty("--space",(t-moves)*(slideWidth+gap)+"px")}),prevBtn.onclick=null,nextBtn.onclick=null,setTimeout(()=>{prevBtn.onclick=moveBack,nextBtn.onclick=moveForward},333)}function moveBack(){moves--,slide(),nextBtn.classList.remove("disabled"),moves<=0?this.classList.add("disabled"):this.classList.remove("disabled")}function moveForward(){moves++,slide(),prevBtn.classList.remove("disabled"),moves>=slides.length-count?this.classList.add("disabled"):this.classList.remove("disabled")}prevBtn.onclick=moveBack,nextBtn.onclick=moveForward;