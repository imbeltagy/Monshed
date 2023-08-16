document.getElementById("nav-icon").onclick=function(){this.classList.toggle("opened"),document.getElementById("nav-list").classList.toggle("opened")};const navbar=document.querySelector(".navbar"),margintop=parseFloat(getComputedStyle(navbar).getPropertyValue("margin-top")),sections=Array.from(document.getElementsByTagName("section")),contents=(window.addEventListener("scroll",()=>{scrollY>=margintop?navbar.classList.add("fixed"):navbar.classList.remove("fixed"),sections.forEach(e=>{scrollY+navbar.offsetHeight>=e.offsetTop&&scrollY+navbar.offsetHeight<=e.offsetTop+e.offsetHeight&&(e.classList.contains("bg-light")?navbar.classList.add("nav-dark"):navbar.classList.remove("nav-dark"))})}),{"nav-home":"Home","nav-about":"About","nav-testimonials":"Testimonials","nav-certifications":"Certifications","main-welcome":"Hello, we are Monshed Company. We specialize in","main-title":"Social Media and Digital Marketing Services","main-bief":"We have a course that teaches you digital marketing from scratch","main-link":"Book Now!","about-headding-h":"About Us","about-headding-p":"All you need to know about us.","card1-h":"Zaid Osama","card1-p1":"Hello, I'm Zaid Osama Azab, an electronic marketer based in Egypt. I have over 8 years of experience in management and marketing. I'm the founder of Manshad Company, where I have developed marketing strategies and achieved success in advertising campaigns and promoting products and services.","card1-p2":"I have obtained training certificates in the field of marketing from recognized institutes in Saudi Arabia and Egypt, including Al-Qadisiyah Business Institute. I have kept myself updated and stayed current with the latest developments in digital marketing.","card1-p3":"Currently, I work as an independent digital marketer and have executed successful campaigns for multiple clients. I possess the ability to analyze data and utilize it to identify marketing opportunities and enhance performance overall.","card1-p4":"I'm delighted to assist you in achieving your marketing goals and improving your digital presence. Feel free to get in touch with me to discuss how I can help you achieve digital success.","card1-contact-text":"Contact Link","card2-h":"Monshed Company","card2-p1":"Manashad Company is a leading player in the field of digital marketing and visual production, established in 2019. We strive to provide top-notch services in the realm of modern advertising and marketing. Despite not having a physical office currently, our aspirations and efforts know no bounds.","card2-p2":"At Manashad, we are committed to keeping pace with technological advancements and the challenges of our times. This enables us to offer strategic marketing services for your products and services in innovative and engaging ways. Our experience includes collaboration with major companies and brands, equipping us with the expertise and knowledge necessary to meet your requirements efficiently and professionally.","card2-p3":"We offer a wide range of services, including digital marketing across social media platforms, graphic design and promotional materials, and video production adhering to the highest standards of quality and innovation. Our team consists of qualified and professional experts in various fields, and we are confident in our ability to effectively achieve your marketing goals.","card2-p4":"We prioritize delivering an exceptional customer experience and hold your satisfaction as our utmost priority. If you're in search of a reliable and creative partner to enhance your digital presence and achieve success, the Manashad Company team is ready to collaborate with you, working together to achieve remarkable results. Contact us now to kickstart our joint efforts toward exceptional success.","card2-contact-text":"Contact Link","card3-h":"Digital Marketing Course","card3-p1":"The Excellence in Marketing Training Course aims to enhance your skills in the world of digital marketing and achieve success in the realm of online business. Whether you're looking to increase your sales, improve your income, or build your own business from scratch, this course caters to your needs.","card3-list-headding":"In this training course, you will learn:","card3-li1":"The art of copywriting: How to effectively use words to attract and engage customers.","card3-li2":"Creating a successful project from scratch: You will become acquainted with successful management strategies to ensure the success of your project.","card3-li3":"The importance of design in marketing: How to use attractive design to capture customers' attention and enhance their experience.","card3-li4":"Digital marketing: You will learn how to create effective advertisements on social media platforms like Facebook and Instagram, and target the right audience properly.","card3-li5":"Obtaining a certified certificate: You will receive a certified certificate from Manshad Company that verifies your skills and knowledge in the field of digital marketing.","card3-p2":"In our course, we prioritize engaging with participants and implementing practical activities after each lecture to enhance learning. We also provide technical support throughout the day to assist in resolving any inquiries.","card3-contact-text":"Course Registration Link","testimonials-headding-h":"Testimonials","testimonials-headding-p":"What them sayed about us.","testimonials-slider-prev":"prev","testimonials-slider-next":"next","certifications-headding-h":"Certifications","certifications-headding-p":"Some of Zaid certifications.","certification-1":"certification in something","certification-2":"certification in something","certification-3":"certification in something","certification-4":"certification in something","certification-5":"certification in something","certification-6":"certification in something","last-interact-text":"Don't forget to join our Digital Markteing course.","last-interact-deal":"Special discount for the first ten trainees in each course.","last-interact-btn":"Join Now","footer-home":"Home","footer-about":"About","footer-testimonials":"Testimonials","footer-certifications":"Certifications"}),html=document.getElementsByTagName("html")[0],switcher=document.getElementById("lang-switcher"),switcherImg=switcher.firstElementChild;let dir=html.dir;function toggleContent(){"rtl"===dir?html.lang="ar":html.lang="en",html.dir=dir,[switcherImg.src,switcherImg.dataset.alt]=[switcherImg.dataset.alt,switcherImg.src],Array.from(document.querySelectorAll("[data-name]")).forEach(e=>{[contents[e.dataset.name],e.textContent]=[e.textContent,contents[e.dataset.name]]})}switcher.onclick=()=>{dir="rtl"===dir?"ltr":"rtl",localStorage.setItem("dir",dir),toggleContent(),resizeSlides()},window.addEventListener("load",()=>{"ltr"===(dir=localStorage.getItem("dir")||html.dir)&&toggleContent()});const slider=document.querySelector(".testimonials .slider"),cards=Array.from(slider.children);let count=parseInt(getComputedStyle(slider).getPropertyValue("--images-count")),gap=parseFloat(getComputedStyle(slider).getPropertyValue("gap")),sliderWidth=parseFloat(getComputedStyle(slider).getPropertyValue("width")),cardWidth=(sliderWidth-gap*(count-1))/count;function resizeSlides(){count=parseInt(getComputedStyle(slider).getPropertyValue("--images-count")),gap=parseFloat(getComputedStyle(slider).getPropertyValue("gap")),sliderWidth=parseFloat(getComputedStyle(slider).getPropertyValue("width")),cardWidth=(sliderWidth-gap*(count-1))/count,cards.forEach(e=>{e.style.width=cardWidth+"px"}),slider.style.height=null;var e=cards.reduce((e,t)=>{t=parseFloat(getComputedStyle(t).getPropertyValue("height"));return(e=isNaN(e)?parseFloat(getComputedStyle(e).getPropertyValue("height")):e)<t?t:e})+"px";slider.style.height=e,slide()}window.addEventListener("load",resizeSlides),window.addEventListener("resize",resizeSlides);const prevBtn=document.querySelector(".slider-controls .prev"),nextBtn=document.querySelector(".slider-controls .next");let moves=0;function slide(){cards.forEach((e,t)=>{e.style.setProperty("--space",(t-moves)*(cardWidth+gap)+"px")}),prevBtn.onclick=null,nextBtn.onclick=null,setTimeout(()=>{prevBtn.onclick=moveBack,nextBtn.onclick=moveForward},333)}function moveBack(){moves--,slide(),nextBtn.classList.remove("disabled"),moves<=0?this.classList.add("disabled"):this.classList.remove("disabled")}function moveForward(){moves++,slide(),prevBtn.classList.remove("disabled"),moves>=cards.length-count?this.classList.add("disabled"):this.classList.remove("disabled")}prevBtn.onclick=moveBack,nextBtn.onclick=moveForward;