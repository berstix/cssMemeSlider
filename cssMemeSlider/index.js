console.log('script ready')
const slider = document.getElementById('slider');
const sliderBox =document.getElementById('box')
fetch('./index.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(card => {
      const productCard = createPetsCard(card);
      sliderBox.appendChild(productCard);

      
      createCardModal(card);
    });
    
  })
  .catch(error => console.error('Error loading products:', error));

  function createPetsCard(data) {
    const card = document.createElement('div');
    
    card.className = 'card';
  
    card.innerHTML = `
    
     
      <img src="${data.img}" alt="${data.name}" class="card-img">
      <h3 class="card-title">${data.text}</h3>
      <input type="button" value="Learn more" class = "card-button" id="card-btn">
      
      
    `;
    
    
    return card;
  
  }