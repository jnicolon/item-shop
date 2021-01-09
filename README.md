
## Medieval Personal Shopper

This project was made while learning React. In particular, class components and lifecycle hooks, and redux for state managment. 

I also experimented with saving some data externally in Contenful and use it's cmi to make api calls with redux thunk. It's not necesary for this project because it functions more like a game but I wanted to learn it.

The idea behind it was to make an e-commerce site but after seein thousand of e-commerce sites in people's portfolios I wanted to make something a little different. So I included some rpg functionality and made it a game.

It looks terrrible because it was mostly for learning the technologies but I really want to go back some time and add some more features like fight animations and diferent stats like defense and magic res.

### Some functionality includes:
  - A reusable intro system that created pages dynamically based on an array of txt using react router.
  - A cart that stores items and their prices. 
  - A checkout page that count how much money you have and if you don't have enouhg, it doesn't let you go to the fight.
  - Some restrictions for balance like only being able to equip a determined number of same kind of items.
  - A fight system that takes your stats and through javascript classes creates an object that later is used in a recursive function. The recursive function gives out an array of the fight data and it's later used to display the fight.


