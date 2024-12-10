$(document).ready(function () {
    const lunchMenu = [
        {
            name: '칼국수',
            price: '8,000 ~ 10,000 원',
            image: 'image/calgusi.jpg'
        },
        {
            name: '돈까스',
            price: '10,000 ~ 15,000 원',
            image: 'image/donggas.jpg'
        },
        {
            name: '떡국',
            price: '10,000 ~ 15,000 원',
            image: 'image/duckgug.jpg'
        },
        {
            name: '덮밥',
            price: '10,000 ~ 15,000 원',
            image: 'image/dumbab.jpg'
        },
        {
            name: '국밥',
            price: '8,000 ~ 12,000 원',
            image: 'image/gugbab.jpg'
        },
        {
            name: '짜장면',
            price: '6,000 ~ 12,000 원',
            image: 'image/jajang.jpg'
        },
        {
            name: '초밥',
            price: '10,000 ~ 20,000 원',
            image: 'image/sushi.jpg'
        },
        {
            name: '텐동',
            price: '10,000 ~ 15,000 원',
            image: 'image/tendong.jpg'
        },
        {
            name: '부대찌개',
            price: '10,000 ~ 20,000 원',
            image: 'image/budai.jpg'
        },
        {
            name: '도시락',
            price: '6,000 ~ 12,000 원',
            image: 'image/dosirock.jpg'
        },
    ];
    const DinnerMenu = [
        {
            name: '돈까스',
            price: '10,000 ~ 15,000 원',
            image: 'image/donggas.jpg'
        },
        {
            name: '떡국',
            price: '10,000 ~ 15,000 원',
            image: 'image/duckgug.jpg'
        },
        {
            name: '덮밥',
            price: '10,000 ~ 15,000 원',
            image: 'image/dumbab.jpg'
        },
        {
            name: '국밥',
            price: '8,000 ~ 12,000 원',
            image: 'image/gugbab.jpg'
        },
        {
            name: '짜장면',
            price: '6,000 ~ 12,000 원',
            image: 'image/jajang.jpg'
        },
        {
            name: '초밥',
            price: '10,000 ~ 20,000 원',
            image: 'image/sushi.jpg'
        },
        {
            name: '텐동',
            price: '10,000 ~ 15,000 원',
            image: 'image/tendong.jpg'
        },
        {
            name: '김치찌개',
            price: '15,000 ~ 20,000 원',
            image: 'image/gimchi.jpg'
        },
        {
            name: '치킨',
            price: '15,000 ~ 25,000 원',
            image: 'image/chicken.jpg'
        },
        {
            name: '피자',
            price: '20,000 ~ 30,000 원',
            image: 'image/pizza.jpg'
        },
        {
            name: '라면',
            price: '1,000 ~ 5,000 원',
            image: 'image/ramen.jpg'
        },
        {
            name: '막창',
            price: '30,000 ~ 40,000 원',
            image: 'image/makchang.jpg'
        },
        {
            name: '냉면',
            price: '10,000 ~ 15,000 원',
            image: 'image/nangmen.jpg'
        },
    ];
    const MidnightMenu = [
        {
            name: '보쌈족발',
            price: '30,000 ~ 40,000 원',
            image: 'image/bojuck.jpg'
        },
        {
            name: '떡볶이',
            price: '15,000 ~ 25,000 원',
            image: 'image/dduck.jpg'
        },
        {
            name: '삼겹살김치볶음',
            price: '15,000 ~ 20,000 원',
            image: 'image/samgimchi.jpg'
        },
        {
            name: '군만두',
            price: '5,000 ~ 12,000 원',
            image: 'image/mandu.jpg'
        },
        {
            name: '낙곱새',
            price: '20,000 ~ 35,000 원',
            image: 'image/nakgulsa.jpg'
        },
        {
            name: '오징어회',
            price: '10,000 ~ 20,000 원',
            image: 'image/ojing.jpg'
        },
        {
            name: '양꼬치',
            price: '10,000 ~ 25,000 원',
            image: 'image/ggochi.jpg'
        },
        {
            name: '닭똥집',
            price: '10,000 ~ 20,000 원',
            image: 'image/chicken2.jpg'
        },
        {
            name: '치킨',
            price: '15,000 ~ 25,000 원',
            image: 'image/chicken.jpg'
        },
        {
            name: '피자',
            price: '20,000 ~ 30,000 원',
            image: 'image/pizza.jpg'
        },
        {
            name: '라면',
            price: '1,000 ~ 5,000 원',
            image: 'image/ramen.jpg'
        },
    ];
    $('#lunch-btn').on('click', function () {
        const randomIndex = Math.floor(Math.random() * lunchMenu.length);
        const selectedLunch = lunchMenu[randomIndex];

        $('#lunch-container').html('');

        const lunchBox =
        `
            <div class="lunch-box">
                <img src="${selectedLunch.image}" alt="${selectedLunch.name}">
                <h3>${selectedLunch.name}</h3>
                <p>가격 : ${selectedLunch.price}</p>
            </div>
        `;

        $('#lunch-container').append(lunchBox);
    });
    $('#dinner-btn').on('click', function () {
        const randomIndex = Math.floor(Math.random() * DinnerMenu.length);
        const selectedDinner = DinnerMenu[randomIndex];

        $('#dinner-container').html('');

        const dinnerBox =
        `
            <div class="dinner-box">
                <img src="${selectedDinner.image}" alt="${selectedDinner.name}">
                <h3>${selectedDinner.name}</h3>
                <p>가격 : ${selectedDinner.price}</p>
            </div>
        `;

        $('#dinner-container').append(dinnerBox);
    });
    $('#midnight-btn').on('click', function () {
        const randomIndex = Math.floor(Math.random() * MidnightMenu.length);
        const selectedMidnight = MidnightMenu[randomIndex];

        $('#midnight-container').html('');

        const midnightBox =
        `
            <div class="midnight-box">
                <img src="${selectedMidnight.image}" alt="${selectedMidnight.name}">
                <h3>${selectedMidnight.name}</h3>
                <p>가격 : ${selectedMidnight.price}</p>
            </div>
        `;

        $('#midnight-container').append(midnightBox);
    });
})