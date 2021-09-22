// This async function simulates the oven response
const ovenReady = async () => {
    return new Promise(resolve => setTimeout(() => {
      resolve('Beep! Oven preheated!')
    }, 3000));
  }
  
  // Define preheatOven async function
  const preheatOven = async () => {
    console.log('Preheating oven.');
    const response = await ovenReady();
    console.log(response);
  }
  
  // Define the other functions
  const getFrozenPizza = () => console.log('Getting pizza.');
  const openFrozenPizza = () => console.log('Opening pizza.');
  const getPizzaPan = () => console.log('Getting pan.');
  const placeFrozenPizzaOnPan = () => console.log('Putting pizza on pan.');
  const grabABeverage = () => console.log('Grabbing a beverage.');
  const watchTV = () => console.log('Watching television.');
  
  // Now call the functions
  preheatOven();
  getFrozenPizza();
  openFrozenPizza();
  getPizzaPan();
  placeFrozenPizzaOnPan();
  grabABeverage();
  watchTV();