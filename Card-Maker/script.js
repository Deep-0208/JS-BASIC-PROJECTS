function creatCard(thumbnail, duration, title, cName, views, howlod) {
  let viewCount;
  if (views < 1000) {
    viewCount = views;
  } else if (views >= 1000 && views < 1000000) {
    viewCount = views / 1000 + "K";
  } else if (views >= 1000000 && views < 1000000000) {
    viewCount = views / 1000000 + "M";
  } else if (views >= 1000000000) {
    viewCount = views / 1000000000 + "B";
  }
  let html = `<div class="card">
        <div class="img">
          <img src="${thumbnail}" alt="thumbnil" />
          <div class="capsule">${duration}</div>
        </div>
        <div class="text">
          <h2>${title}</h2>
          <p>${cName} . ${viewCount} views .${howlod}</p>
        </div>
      </div>`;

  document.querySelector(".container").innerHTML += html;
}
creatCard(
  "card.png",
  "20:00",
  "Introduction to VScode| Sigma Web Dev Video #1 ",
  " Code With Harry",
  "5",
  "2 month ago"
);

creatCard(
  "card.png",
  "10:00",
  "Introduction to Error Handling | Sigma Web Dev Video #79 ",
  " Code With Harry",
  "50000",
  "1 month ago"
);
creatCard(
  "card.png",
  "10:00",
  "Introduction to Error Handling | Sigma Web Dev Video #79 ",
  " Code With Harry",
  "5000000",
  "1 month ago"
);
creatCard(
  "card.png",
  "10:00",
  "Introduction to Error Handling | Sigma Web Dev Video #79 ",
  " Code With Harry",
  "5000000000",
  "1 month ago"
);

