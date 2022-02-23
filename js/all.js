;(function(){
    let items = document.querySelectorAll(".items");

    let back = document.querySelector(".header_back");

    let skill = document.querySelector(".skill");
    // console.log(skill.offsetTop + innerHeight / 2);

    let menus = document.querySelectorAll(".menu li a");
    console.log(menus);
    

    // 一頁式宣傳頁的選單滑動效果
    menus.forEach(menu =>{
        menu.addEventListener("click",function(e){
            e.preventDefault();
            console.log(this.getAttribute("href"));
            let link = this.getAttribute("href");
            let itemHeight = this.offsetHeight;

            console.log(itemHeight);
            
            let Position = document.querySelector(link).offsetTop - 100;

            
            
            console.log(Position);

            window.scrollTo({
                top:Position + 1,
                behavior: "smooth" 
            })

            
            
        })
    })

    let scrollEvent = () => {
        // 算出視窗的最上面
        let windowTop = window.scrollY;
        
        // 算出視窗的最下面
        let windowBottom = windowTop + innerHeight;
        // console.log(windowTop,windowBottom);

        console.log(windowTop);

        menus.forEach((menu,number) =>{
            let link = menu.getAttribute("href");
            let itemTop = document.querySelector(`${link}`).offsetTop - 100;
            console.log(number,itemTop);
            let itemHeight = document.querySelector(`${link}`).offsetHeight;
            // console.log(number,itemTop+itemHeight);

            // console.log(number,itemTop,itemHeight);

            if(windowTop >= itemTop && windowTop < (itemTop + itemHeight) ){
                console.log(`載入${number}中`);
                menu.classList.add("active");
            }
            else{
                menu.classList.remove("active");
            }
        })
        

        // 滾動套用 CSS 效果
        // 顯示Point_outline ul、content_left、personal_item_information
        items.forEach((item,index) =>{
            let {
                top,
                height,
                bottom
            } = item.getBoundingClientRect();

            let itembottom = top + windowTop;
            
            // console.log("window上面",windowTop,"window下面",windowBottom);

            // console.log(index,"元件距離頂面",top,"元件下面距離頂部",bottom);

            if(windowBottom >= itembottom){
                item.classList.add("fadIn");
            }

        })
        



        // 動態顯示的進度條
        // 顯示prograss-bar
        if(windowBottom >= skill.offsetTop + innerHeight / 2){
            document.querySelectorAll(".prograss-bar").forEach(item =>{
                // console.log(item.dataset.width);
                item.style.width = `${item.dataset.width}`;
            })
        }
        



        // 滾動中持續改變物件位置 (CSS transform)
        // 移動person和title
        back.style.transform = `translateY(${windowTop}px)`;

        
        
        
    };
    
    

    window.addEventListener("scroll",scrollEvent);
    
    
    
})()