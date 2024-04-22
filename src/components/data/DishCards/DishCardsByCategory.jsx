import miliyTaom from "../DishImg/milliyTaomlar.jpg"
// import miliyTaom from "../DishImg/milliyTaomlar.jpg"
// import miliyTaom from "../DishImg/milliyTaomlar.jpg"
// import miliyTaom from "../DishImg/milliyTaomlar.jpg"
// import miliyTaom from "../DishImg/milliyTaomlar.jpg"
// import miliyTaom from "../DishImg/milliyTaomlar.jpg"
// import miliyTaom from "../DishImg/milliyTaomlar.jpg"
// import miliyTaom from "../DishImg/milliyTaomlar.jpg"



const dishCardsByCategory = {
  'Milliy taomlar': [
    { name: 'Palov', description: 'Классическая palov с томатным соусом, моцареллой и базиликом.', image: 'path/to/palov-image.jpg' },
    { name: 'Kabob', description: 'Пицца с пикантной пепперони и сыром моцарелла.', image: miliyTaom },
    { name: 'Mastavaaaaa', description: 'Пицца с ветчиной, ананасами и сыром моцарелла.', image: 'path/to/mastava-image.jpg' }
  ],
  'Fast Food': [
    { name: 'Gamburger', description: 'Бургер с говяжьей котлетой, сыром, овощами и соусом.', image: 'path/to/gamburger-image.jpg' },
    { name: 'Hot dog', description: 'Классический бургер с говяжьей котлетой и овощами.', image: 'path/to/hotdog-image.jpg' },
    { name: 'Pizza', description: 'Бургер с растительной котлетой, овощами и веганским сыром.', image: 'path/to/pizza-image.jpg' }
  ],
  'Evropa taomlar': [
    { name: 'Palov', description: 'Классическая palov с томатным соусом, моцареллой и базиликом.', image: 'path/to/palov-image.jpg' },
    { name: 'Kabob', description: 'Пицца с пикантной пепперони и сыром моцарелла.', image: 'path/to/kabob-image.jpg' },
    { name: 'Mastavaaaaa', description: 'Пицца с ветчиной, ананасами и сыром моцарелла.', image: 'path/to/mastava-image.jpg' }
  ],
  'Salatlar': [
    { name: 'Palov', description: 'Классическая palov с томатным соусом, моцареллой и базиликом.', image: 'path/to/palov-image.jpg' },
    { name: 'Kabob', description: 'Пицца с пикантной пепперони и сыром моцарелла.', image: 'path/to/kabob-image.jpg' },
    { name: 'Mastavaaaaa', description: 'Пицца с ветчиной, ананасами и сыром моцарелла.', image: 'path/to/mastava-image.jpg' }
  ],
  'Desertlar': [
    { name: 'Palov', description: 'Классическая palov с томатным соусом, моцареллой и базиликом.', image: 'path/to/palov-image.jpg' },
    { name: 'Kabob', description: 'Пицца с пикантной пепперони и сыром моцарелла.', image: 'path/to/kabob-image.jpg' },
    { name: 'Mastavaaaaa', description: 'Пицца с ветчиной, ананасами и сыром моцарелла.', image: 'path/to/mastava-image.jpg' }
  ],
  'Ichimlik': [
    { name: 'Palov', description: 'Классическая palov с томатным соусом, моцареллой и базиликом.', image: 'path/to/palov-image.jpg' },
    { name: 'Kabob', description: 'Пицца с пикантной пепперони и сыром моцарелла.', image: 'path/to/kabob-image.jpg' },
    { name: 'Mastavaaaaa', description: 'Пицца с ветчиной, ананасами и сыром моцарелла.', image: 'path/to/mastava-image.jpg' }
  ],
  'Noxorgi taomlar': [
    { name: 'Palov', description: 'Классическая palov с томатным соусом, моцареллой и базиликом.', image: 'path/to/palov-image.jpg' },
    { name: 'Kabob', description: 'Пицца с пикантной пепперони и сыром моцарелла.', image: 'path/to/kabob-image.jpg' },
    { name: 'Mastavaaaaa', description: 'Пицца с ветчиной, ананасами и сыром моцарелла.', image: 'path/to/mastava-image.jpg' }
  ],
  'Muzqaymoq': [
    { name: 'Palov', description: 'Классическая palov с томатным соусом, моцареллой и базиликом.', image: 'path/to/palov-image.jpg' },
    { name: 'Kabob', description: 'Пицца с пикантной пепперони и сыром моцарелла.', image: 'path/to/kabob-image.jpg' },
    { name: 'Mastavaaaaa', description: 'Пицца с ветчиной, ананасами и сыром моцарелла.', image: 'path/to/mastava-image.jpg' }
  ]
};

export default dishCardsByCategory;
