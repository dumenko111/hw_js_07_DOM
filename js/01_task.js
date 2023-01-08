/*Задание 1
В HTML есть список категорий ul#categories.
Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в 
ul#categories, то есть элементов li.item.Получится 
'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, 
найдет и выведет в консоль текст заголовка элемента(тега h2) 
и количество элементов в категории(всех вложенных в него 
  элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4
*/
const categoriesItem = document.querySelectorAll('.item')
const categoriesRef = document.querySelector('#categories')

console.log('Кількість категорій в списку ul#categories:', categoriesItem.length)

// // console.log(categoriesItem)

categoriesItem.forEach(el => {
  console.log('Категорія:', el.firstElementChild.textContent)
  console.log('Елементів:', el.lastElementChild.children.length)
})

