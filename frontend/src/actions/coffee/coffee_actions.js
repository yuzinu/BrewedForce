import { data } from 'jquery';
import * as CoffeesApiUtil from '../../util/coffees/coffees_api_util';

export const RECEIVE_COFFEE = 'RECEIVE_COFFEE';
export const RECEIVE_ALL_COFFEES = 'RECEIVE_ALL_COFFEES';

const receiveAllCoffees = data => ({
  type: RECEIVE_ALL_COFFEES,
  coffees: data.data
});

const receiveCoffee = data => {
  return {
    type: RECEIVE_COFFEE,
    coffee: data.data
  };
};

export const fetchCoffee = coffeeId => {
  return dispatch => {
    return CoffeesApiUtil.fetchCoffee(coffeeId)
      .then(coffee => dispatch(receiveCoffee(coffee)));
  };
};

export const fetchAllCoffees = () => dispatch => (
    CoffeesApiUtil.fetchAllCoffees()
    .then( coffees => dispatch(receiveAllCoffees(coffees)))
);