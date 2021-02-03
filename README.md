
## Medieval Personal Shopper

Live Website: https://jnicolon.github.io/item-shop/#/

An e-commerce site turned videogame using class components and React Redux to share state across components.

### Some functionality includes:
  - A reusable intro system that created pages dynamically based on an array of txt using react router.
  - A cart that stores items and their prices. 
  - A checkout page that counts how much money you have and if you don't have enough, it doesn't let you go to the fight.
  - Some restrictions for balance like only being able to equip a determined number of same kind of items.
  - A fight system that takes your stats and through javascript classes creates an object that later is used in a recursive function. The recursive function gives out an array of the fight data and it's later used to display the fight.
  - Thunk Redux middleware to make API calls to Contentful to retreive data.


