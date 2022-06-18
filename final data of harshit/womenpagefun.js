
    const swiper = new Swiper('.swiper', {

        autoplay:{
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

});

function goToWomens(){
    window.location.href = "womens_product.html";
}