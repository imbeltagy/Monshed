document.getElementById("nav-icon").onclick=function(){this.classList.toggle("opened"),document.getElementById("nav-list").classList.toggle("opened")};const contents={"nav-home":"Home","nav-about":"About","nav-services":"Services","nav-contact":"Contact","main-welcome":"Hello, we are Monshed Company. We specialize in","main-title":"Social Media and Digital Marketing Services","main-bief":"We have a course that teaches you digital marketing from scratch","main-link":"Book Now!"},html=document.getElementsByTagName("html")[0],switcher=document.getElementById("lang-switcher"),switcherImg=switcher.firstElementChild;let dir=html.dir;function toggleContent(){"rtl"===dir?html.lang="ar":html.lang="en",html.dir=dir,[switcherImg.src,switcherImg.dataset.alt]=[switcherImg.dataset.alt,switcherImg.src],Array.from(document.querySelectorAll("[data-name]")).forEach(t=>{[contents[t.dataset.name],t.textContent]=[t.textContent,contents[t.dataset.name]]})}switcher.onclick=()=>{dir="rtl"===dir?"ltr":"rtl",localStorage.setItem("dir",dir),toggleContent()},window.onload=()=>{"ltr"===(dir=localStorage.getItem("dir")||html.dir)&&toggleContent()};