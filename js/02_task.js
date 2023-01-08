/*Задание 2
В HTML есть пустой список ul#ingredients.

< ul id = "ingredients" ></ul >
  В JS есть массив строк.*/

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
/*Напиши скрипт, который для каждого элемента массива ingredients 
создаст отдельный li, после чего вставит все li за одну операцию 
в список ul.ingredients.Для создания DOM - узлов 
используй document.createElement()*/

const ingredientsRef = document.querySelector('#ingredients')

const makeItemListingredients = (option) => {
  return option.map(el => {
    const elLi = document.createElement('li')
    elLi.textContent = el
    return elLi
  })
}
const createItem = makeItemListingredients(ingredients)
ingredientsRef.append(...createItem)
