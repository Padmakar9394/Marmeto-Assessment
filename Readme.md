
  ### Features
    - Data Fetching: 
      - Asynchronously fetches data from a provided JSON URL. 
    - Dynamic Content Generation: 
      - Dynamically generates HTML content based on fetched data.
    - Tab Management: 
      - Supports tabbed navigation for different product categories.


  ### Functions
    - fetchData()
      - Asynchronously fetches product data from a specified URL and returns the product categories.

      - Returns: A promise that resolves to the categories array from the fetched JSON data.
    
    - generateCard(card)
      - Generates an HTML string for a product card using provided product data.

      - Parameters:
        - card: An object containing product details such as image, title, vendor, price, and      compared price.
        - Returns: A string containing HTML structure of the product card.

    - createAndPopulateRestaurantCardsWithImages(data, tab)
        - Clears existing content from the specified tab's container and appends new product cards generated from the provided data.

        - Parameters:
          - data: An object containing products for the specified category.
          - tab: The tab identifier used to target the specific HTML element for content injection.

    - openTab(tab)
      - Handles the tab switching logic, fetches data once and uses it to populate the selected tab - with relevant product cards. Also manages visibility of content based on active tab.

      - Parameters:
        - tab: Identifier of the tab to be opened and populated with content.

  ### Usage
    > To use these functions, include the script in your HTML file. Initially, the script auto-populates the 'Men' category by default. You can switch between tabs to view products categorized under Women and Kids.


  ## Important Notes
    > This script requires a modern browser that supports ES6 features such as async/await.
    > Make sure the CORS policy of the server hosting the JSON file allows your website to fetch the data.


