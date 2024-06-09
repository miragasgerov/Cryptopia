document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', // or 'vertical'
      loop: true,
      centeredSlides: true,
      
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      // Autoplay
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
  
      // Use slide or fade transition effect
      speed: 2000,
      effect: 'fade',
      fadeEffect: {
            crossFade: true,
       },
    });
  });


  // Accordion Faq Suallar

  const accordion = document.getElementsByClassName('faq_content');

  for (i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
  }


  // CMC API
  async function getCryptoPrices() {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,litecoin&vs_currencies=usd';

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('API response:', data);

        const prices = [
            { symbol: 'BTC', price: data.bitcoin.usd },
            { symbol: 'ETH', price: data.ethereum.usd },
            { symbol: 'XRP', price: data.ripple.usd },
            { symbol: 'LTC', price: data.litecoin.usd }
        ];

        prices.forEach(priceInfo => {
            document.getElementById(`${priceInfo.symbol}-price`).innerText = `${priceInfo.symbol} Qiyməti: $${priceInfo.price.toFixed(2)}`;
        });
    } catch (error) {
        console.error('Xəta:', error);
        const symbols = ['BTC', 'ETH', 'XRP', 'LTC'];
        symbols.forEach(symbol => {
            document.getElementById(`${symbol}-price`).innerText = `${symbol} Qiymət Tapılmadı`;
        });
    }
}

window.onload = getCryptoPrices;