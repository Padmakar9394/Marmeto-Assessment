async function fetchData() {    
    const url = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json';
  
    try {
      const response = await fetch(url);
  
      // Parse the JSON response
      const data = await response.json();

      return data.categories;
    } catch (error) {
      console.error('Fetch error:', error);
    }
}

const generateCard = (card) => `
    <div class="card">
        <div class="card-img">
            <img src=${card.image} alt={card.title} />
        </div>
        <div class="card-details">
            <div class="card-item-details">
                <div class='card-title'>
                    ${card.title}
                </div>
                <span>•</span>
                <p>${card.vendor}</p>
            </div>
            <div class="card-item-price">
                <p class='price'>Rs ${parseFloat(card.price).toFixed(2)}</p>
                <p class="item_compared_price">${parseFloat(card.compare_at_price).toFixed(2)}</p>
                <h5>50% Off</h5>
            </div>
            <div>
                <button class='cart-btn'>Add to cart</button>
            </div>
        </div>
    </div>`
    ;



function createAndPopulateRestaurantCardsWithImages(data, tab) {
    const cardContainer = document.getElementById(tab + '-cards');
    cardContainer.innerHTML = ''; // Clear previous content
  
    data.category_products.forEach(function(restaurant) {
    
    cardContainer.insertAdjacentHTML("beforeend", generateCard(restaurant));
    });
  }

  // Function to switch tabs
async function openTab(tab) {
    const data = await fetchData(); 

    const tabsEle = document.querySelectorAll('.tab');

    tabsEle.forEach((item) => {
        item.addEventListener('click', () => {
            tabsEle.forEach((ele) => ele.classList.remove('active'))
            item.classList.add('active')
        })
    })

    const menEle = document.getElementById('Men-cards');
    const womenEle = document.getElementById('Women-cards');
    const kidsEle = document.getElementById('Kids-cards');

    if(tab === 'Men') {
        // Show the selected tab content

        menEle.style.display = 'flex';
        womenEle.style.display = 'none';
        kidsEle.style.display = 'none';
        createAndPopulateRestaurantCardsWithImages(data[0], tab);
    }
    else if(tab === 'Women') {

        womenEle.style.display = 'flex';
        menEle.style.display = 'none';
        kidsEle.style.display = 'none';
        createAndPopulateRestaurantCardsWithImages(data[1], tab);
    }
    else {

        kidsEle.style.display = 'flex';
        womenEle.style.display = 'none';
        menEle.style.display = 'none';
        createAndPopulateRestaurantCardsWithImages(data[2], tab);

    }
    
  }
  
  // Initially populate the dining tab with cards
  openTab('Men');

  