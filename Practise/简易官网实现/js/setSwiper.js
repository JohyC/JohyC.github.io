var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal', // 垂直切换选项
  loop: true, // 循环模式选项
  autoplay: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 500,
  
  pagination: {
    el: '.swiper-pagination',
    bulletClass : 'my-bullet',
    clickable: true,
  }
});

mySwiper.pagination.bullets.forEach((bullet)=>{
  bullet.onmouseover = function(){
    this.click();
  }
})