  const images = [
    { src: "WhatsApp Image 2025-06-18 at 20.33.08.jpeg", caption: "Main gate" },
    { src: "WhatsApp Image 2025-06-18 at 20.33.33.jpeg", caption: "Exploring the Main Building" },
    { src: "WhatsApp Image 2025-06-18 at 20.33.52.jpeg", caption: "Views of Powai Lake" },
    { src: "WhatsApp Image 2025-06-18 at 20.34.12.jpeg", caption: "Meeting the AIR 1" },
    { src: "WhatsApp Image 2025-06-18 at 20.34.38.jpeg", caption: "NCC Independence day parade" },
    { src: "WhatsApp Image 2025-06-18 at 20.35.04.jpeg", caption: "Team XLR8" },
    { src: "WhatsApp Image 2025-06-18 at 20.35.26.jpeg", caption: "Salsa Night in traditinal clothes" },
    { src: "WhatsApp Image 2025-06-18 at 20.35.47.jpeg", caption: "Darshan of Lord Ganesh" },
    { src: "WhatsApp Image 2025-06-18 at 20.36.37.jpeg", caption: "Cleaning Meethi river as team NSS" },
    { src: "WhatsApp Image 2025-06-18 at 20.39.02.jpeg", caption: "After end-sem exam, winter season, early morning, small trek, beautiful view, absolute heaven" },
    { src: "WhatsApp Image 2025-06-18 at 20.40.38.jpeg", caption: "Chilling out with wingmates" }
  ];

  let currentIndex = 0;
  const imageElement = document.getElementById('slideshow-image');
  const captionElement = document.getElementById('caption');

  function showImage(index) {
  imageElement.style.opacity = 0;
  setTimeout(() => {
    const currentImage = images[index];
    imageElement.src = currentImage.src;
    captionElement.textContent = currentImage.caption;

    imageElement.style.width = '';
    imageElement.style.height = '';
    if (currentImage.caption === "Darshan of Lord Ganesh" || currentImage.caption === "Chilling out with wingmates") {
      imageElement.style.width = "150px"; 
    }

    imageElement.style.opacity = 1;
  }, 200);
}


  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  setInterval(nextImage, 5000);

    document.getElementById("guestbook-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && message) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${name}:</strong> ${message}`;
    document.getElementById("message-list").appendChild(li);
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
  }
});

function showAnswer(option) {
  const answerBox = document.getElementById("quiz-answer");
  if (option === 'a') {
    answerBox.textContent = "So nice of you";
  } else if (option === 'b') {
    answerBox.textContent = "Glad you liked it";
  } else if (option === 'c') {
    answerBox.textContent = "My hard work paid back ig";
  }
  setTimeout(() => {
    answerBox.textContent = "";
  }, 3000);
}