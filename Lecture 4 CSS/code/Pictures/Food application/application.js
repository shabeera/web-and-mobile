
// let orderedDishes = [];
// let totalBill = 0;

// function calculateBill() {

//     let questions = [
//         { num1: 2, num2: 5, answers: [3, 6, 7], correct: 7 }
//     ];


//     let dishes = document.querySelectorAll('.dish');

//     function doWork(dish) {

//         if (dish.checked) {

//             let orderedDish = {
//                 name: dish.parentNode.previousElementSibling.innerText,
//                 price: dish.parentNode.nextElementSibling.innerText,
//                 qty: dish.parentNode.nextElementSibling.nextElementSibling.querySelector('input').value
//             };


//             totalBill += (orderedDish.price * orderedDish.qty);

//             orderedDishes.push(orderedDish);

//         }

//     }

//     dishes.forEach(doWork);

// }