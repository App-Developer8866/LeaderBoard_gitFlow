import './style.css';
import * as allVar from './modules/Variables.js';

const display = (data) => {
  data.forEach((i) => {
    allVar.List.innerHTML += `<p class="info">${i.user} : ${i.score} </p>`;
  });
};

fetch(allVar.BASE_URL)
  .then((res) => res.json())
  .then((data) => display(data?.result));

  allVar.Form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userObj = {
      user: e.target.user.value,
      score: e.target.score.value,
    };
  
    const postRequest = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    };
  
    await fetch(allVar.BASE_URL, postRequest).then((res) => res.json())
      .then(() => window.location.reload());
  });

  allVar.Refresh.addEventListener('click', () => {
    window.location.reload();
  });