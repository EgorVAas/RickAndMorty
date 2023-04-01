//! Запросы, XMLHttpRequest, AJAX. Домашняя работа

/* Задание №1.1 - 1.2
!Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
!Используйте fetch. Отобразите на странице имена персонажей из 
!Рика и Морти в list.

!Рядом с именами отобразите все изображения
!которые вы получили вместе с остальными данными из сервера.
!(Вы можете стилизовать страницу по желанию.)
*/

let x = fetch('https://rickandmortyapi.com/api/character')
  x.then(response => response.json()).then(data => {
    let charactersList = document.getElementById('characters-list');
    data.results.forEach(elem => {
      let listItem = document.createElement('li');
      let heroImg = document.createElement('img');
      heroImg.src = elem.image;
      let heroName = document.createElement('h2');
      heroName.textContent = elem.name; 
      let race = document.createElement('p');
      race.textContent = `Race: ${elem.species}`;
      let heroStatus = document.createElement('p');
      heroStatus.textContent = `Status: ${elem.status}`;
      let gender = document.createElement('p');
      gender.textContent = `Gender: ${elem.gender}`;
      let motherland = document.createElement('p');
      motherland.textContent = `Motherland: ${elem.origin.name}`;
      let location = document.createElement('p');
      location.textContent = `Location: ${elem.location.name}`;
      
      listItem.appendChild(heroImg);
      listItem.appendChild(heroName);
      listItem.appendChild(race);
      listItem.appendChild(heroStatus);
      listItem.appendChild(gender);
      listItem.appendChild(motherland);
      listItem.appendChild(location);
      
      charactersList.appendChild(listItem);
    });
  })
  .catch(error => console.error(error));

  
/* Задание №1.3. 
!Создайте файл db.json и запустите локальный сервер.
!Данные которые вы получили во втором задании, сохраните 
!в локальном сервере db.json, в массиве под 
!названием "characters".
!Подсказка: как только ваши данные сохранились в db.json
!функцию, которая отправляет запрос на db.json стоит закомментировать.
*/

// fetch('https://rickandmortyapi.com/api/character')
//   .then(response => response.json())
//   .then(data => {
//     let arr = [];
//     data.results.forEach(elem => {
//       arr.push({ name: elem.name, img: elem.image, race: elem.species, status:elem.status, gender:elem.gender, motherland:elem.origin.name, location:elem.location.name});
//     });
//     localStorage.setItem('data', JSON.stringify(arr));
//     let res = localStorage.getItem('data');
//     fetch('http://localhost:8000/characters', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: res
//     })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error(error));
//   })
//   .catch(error => console.error(error));



/* Задание №1.4. 
!А теперь сделайте запрос на локальный сервер.
!Во второй блок с классом 'block-2', отобразите имена, которые 
!вы получили (стянули) с db.json.

/* Задание №1.5. 
!К именам добавьте картинки персонажей.
!В итоге у вас должна получиться точная копия первых двух тасков.
!Отличие которых лишь в базе данных.
*/

let data = JSON.parse(localStorage.getItem('data'));
let block2 = document.querySelector('.block-2');

data.forEach(elem => {
  let character = document.createElement('div');
  character.classList.add('character');

  let img = document.createElement('img');
  img.setAttribute('src', elem.img);

  let name = document.createElement('h2');
  name.textContent = elem.name;

  let raceTwo = document.createElement('p');
  raceTwo.textContent = elem.race
  
  let statusTwo = document.createElement('p');
  statusTwo.textContent = elem.status
  
  let genderTwo = document.createElement('p');
  genderTwo.textContent = elem.gender
  
  let motherlandTwo = document.createElement('p');
  motherlandTwo.textContent = elem.motherland

  let locationTwo = document.createElement('p')
  locationTwo.textContent = elem.location

      character.appendChild(img);
      character.appendChild(name);
      character.appendChild(raceTwo);
      character.appendChild(statusTwo);
      character.appendChild(genderTwo);
      character.appendChild(motherlandTwo);
      character.appendChild(locationTwo)
      
  block2.appendChild(character);
});



