const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


const imageContainer = document.querySelector('.image-container');
const thumbs = document.querySelector('.thumbs');

// Per ogni elemento di ITEMS popolo IMAGE-CONTAINER
for (let i = 0; i < items.length; i++) {
    const thisPath = items[i];
    const thisTitle = title[i];
    const thisText = text[i];

    // Inserire le immagini
    const newImage = `
    <div class="single-image active">
        <img src="${thisPath}" alt="${i}">

        <div class="text">
            <h2>${thisTitle}</h2>
            <p>${thisText}</p>
        </div>
    </div>
    `;

    imageContainer.innerHTML += newImage;

    // Inserire i thumbs
    const newThumbs = `
    <div class="single-thumbs">
        <img src="img/01.jpg" alt="Img thumbs 1">
    </div>
    `;
}
