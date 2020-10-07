import * as CoffeesApiUtil from '../../util/coffees/coffees_api_util';

export const RECEIVE_COFFEE = 'RECEIVE_COFFEE';

const receiveCoffee = coffee => {
  return {
    type: RECEIVE_COFFEE,
    coffee
  }
}

export const fetchCoffee = coffeeId => {
  return dispatch => {
    return CoffeesApiUtil.fetchCoffee(coffeeId)
      .then(coffee => dispatch(receiveCoffee(coffee)))
  }
}