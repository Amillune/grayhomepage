
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

const scriptURL = "https://script.google.com/macros/s/AKfycbwLSVZ4eAd5bdkKskM5sYavBjMWLCBC8RUVUx_ifSXiCM6CgRvfyAUABL_x9UgQOY5QnA/exec";
const form = document.getElementById("join-form");
const responseMsg = document.getElementById("response");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById('name-input').value.trim();

if (name) {
  const confirmSend = confirm("YOU CAN CONTACT ME HERE... ARE YOU SURE ABOUT YOUR MESSAGE? YOU DO KNOW THAT IT WILL BE SAVED RIGHT?\n\nCLICK OK FOR YES, CANCEL FOR NO.");

  if (confirmSend) {
    // User accepted
    const header = document.getElementById('main-heading');
    header.textContent = `WELCOME TO MY HOMEPAGE, ${name.toUpperCase()}`;
    alert("WELCOME!!");
  } else {
    // User canceled — message won't be sent
    alert("Your message was canceled and not sent.");
  }
}
  }

  const formData = new FormData(form);

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

