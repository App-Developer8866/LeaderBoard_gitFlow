import './style.css';

const data = [
  { name: 'Ahmed', score: 90 },
  { name: 'Ali', score: 80 },
  { name: 'David', score: 99 },
  { name: 'Alexender', score: 95 },
];

const display = () => {
  data.forEach((i) => {
    document.querySelector('.infos').innerHTML += `<p class="info">${i.name} : ${i.score} </p>`;
  });
};

display();