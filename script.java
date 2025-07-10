
const popup = document.getElementById('popup');
const popupImage = popup.querySelector('.popup-image');
const images = ['joker.png', 'makoto.png','yusuke.png','anne.png','haru.png','ryuji.png','bitchInheat.png'];

function showPopup() {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  popupImage.src = randomImage;
  popup.classList.add('active');
  document.body.classList.add('noscroll');

  setTimeout(() => {
    popup.classList.remove('active');
    document.body.classList.remove('noscroll');
  }, 1500);
}

popup.addEventListener('click', () => {
  popup.classList.remove('active');
  document.body.classList.remove('noscroll');
});

function showDisclaimer() {
  document.getElementById('disclaimer-modal').style.display = 'flex';
  document.body.classList.add('noscroll');
}

window.onload = function() {
  showDisclaimer();
};

function closeModal() {
  const modal = document.getElementById('disclaimer-modal');
  if (modal) {
    modal.style.display = 'none';
  }
  document.body.classList.remove('noscroll');
}

const scriptURL = "https://script.google.com/macros/s/AKfycbyMNWmMs8qlxysL3PDEJMOGeLshBTZqppjPzEjOr1Vz9hs6CyODJGUP6KX6K7v-sFSnuw/exec";
const form = document.getElementById("join-form");
const responseMsg = document.getElementById("response");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById('name-input').value.trim();
  const formData = new FormData(form);

  if (name) {
    let accepted = false;

    while (!accepted) {
      const response = confirm("YOU ARE ONE OF US NOW... YOU CAN STILL TURN BACK!!\n\nCLICK OK FOR YES, CANCEL FOR NO.");
      if (response) {
        accepted = true;
        const header = document.getElementById('main-heading');
        header.textContent = `WELCOME TO MY HOMEPAGE, ${name.toUpperCase()}`;
        alert("WELCOME!!");
      }
    }
  }

  fetch(scriptURL, {
    method: "POST",
    body: formData,
  })
  .then(res => res.text())
  .then(() => {
    responseMsg.textContent = "Message sent successfully!";
    responseMsg.className = "success";
    form.reset();
    closeModal();
  })
  .catch(error => {
    responseMsg.textContent = "Error sending message.";
    responseMsg.className = "error";
    console.error("Error!", error.message);
  });
});
