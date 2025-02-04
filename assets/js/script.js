           var btf = [
            'Zero Click, Zero Interaction – Complete monitoring without physical access to the target device.',
            'Real-Time Insights – Track calls, messages, GPS location, and more instantly.',
            'Stealth Mode – 100% hidden, leaving no trace behind.',
            'Multi-Device Compatibility – Works seamlessly on Android, iOS, and PCs.',
            'Track, Protect, and Stay Informed – All Without a Click!'
           ];
           var btfI = 0;
           setInterval(function(){
               btfI++;
               if(btfI >= btf.length){
                   btfI = 0;
               }
               document.getElementById("btfd").style.animation = `btf 0.5s forwards`;
               setTimeout(()=>{
                  document.getElementById("btfd").style.animation = `none`;
                   document.getElementById("btfd").textContent = btf[btfI];
               },100);
               
           },5000);
           document.getElementById("mobile-menu-btn").onclick = function(){
              if(document.getElementById("menu-nav").style.display == "" || document.getElementById("menu-nav").style.display == "none"){
                  document.getElementById("menu-nav").style.display = "block";
        
                
              }else{
                 document.getElementById("menu-nav").style.display = "none";
             
                  
              }
           }

           var si = document.getElementsByClassName("service-image"), tu = document.getElementsByClassName('testimony-user');
           for(let i = 0; i < si.length; i++){
               si[i].style.backgroundImage = `url(${si[i].getAttribute("image-data")})`;
           }
            for (let i = 0; i < tu.length; i++) {

                tu[i].style.backgroundImage = `url('${tu[i].getAttribute('data')}')`;
            }

            window.onload = function(){
                const a = document.createElement("a"),b = document.createElement("div");
                a.href="https://api.whatsapp.com/send?phone=+2348030914844&text=I+need+Ospy+service.";
                b.style.cssText =  `
    position: fixed;
    right: 30px;
    bottom: 30px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-image: url('assets/images/whatsapp-btn.jpg');
    background-position: center;
    background-size: cover;
    z-index: 100000;`;
      a.appendChild(b);
      document.body.appendChild(a);
      document.getElementById("loading").style.display = "none";
     }