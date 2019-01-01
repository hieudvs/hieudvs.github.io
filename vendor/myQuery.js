$(function(){
   
    // dùng hàm setInterval
    var t = setInterval(function(){
        $('.thongbao').addClass('hide_box');
        clearInterval(t);
    },3000);

    // Begin: Thiết lập trạng thái active cho menu sidebar
    var btnSidebar = document.querySelectorAll('.nav-link');
     for(var i = 0; i < btnSidebar.length; i++){
        btnSidebar[i].addEventListener('click',function(){
            console.log(this);
             //B1: Xóa tất cả các nút được cố định active ở html mô phỏng trước rồi add class
             for(var i = 0; i < btnSidebar.length; i++){
                 btnSidebar[i].classList.remove('active');
             }
             this.classList.add('active');
         })
    }   //End: Thiết lập trạng thái active cho menu sidebar
  
})  

 