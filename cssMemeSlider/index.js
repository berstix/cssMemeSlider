console.log('script ready')
const slides = document.getElementById('box');
const sliderBox = document.getElementById('box');
const markers = document.querySelectorAll('.marker');
fetch('./index.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(card => {
      const productCard = createPetsCard(card);
      sliderBox.appendChild(productCard);

      
      
    });
    
  })
  .catch(error => console.error('Error loading products:', error));

  function createPetsCard(data) {
    const card = document.createElement('div');
    
    card.className = 'card';
  
    card.innerHTML = `
    
     
      <img src="${data.img}" alt="${data.text}" class="mem-img">
      <h3 class="box-text">${data.text}</h3>
      
      
      
    `;
    
    
    return card;
  
  }

  function changeSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    markers.forEach(marker => marker.classList.remove('active'));
    markers[index].classList.add('active');
  }
  
  // Добавляем обработчик событий для каждого маркера
  markers.forEach((marker, index) => {
    marker.addEventListener('click', () => changeSlide(index));
  });
  
  // Инициализируем первый активный маркер
  markers[0].classList.add('active');