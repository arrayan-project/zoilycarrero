//MAIN MENU SECTION
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#003153';
		opacity = 0.1;
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.close-btn');
const prevBtn = lightbox.querySelector('.prev-btn');
const nextBtn = lightbox.querySelector('.next-btn');

let currentIndex = 0;
//END MAIN MENU SECTION

//GALLERY SECTION
// Open lightbox
const openLightbox = (index) => {
  currentIndex = index;
  lightboxImg.src = galleryItems[currentIndex].src;
  lightbox.style.display = 'flex';
};

// Close lightbox
const closeLightbox = () => {
  lightbox.style.display = 'none';
};

// Show previous image
const showPrev = () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
  lightboxImg.src = galleryItems[currentIndex].src;
};

// Show next image
const showNext = () => {
  currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
  lightboxImg.src = galleryItems[currentIndex].src;
};

// Event listeners
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// Close lightbox on outside click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
//END GALLERY SECTION


//WHATSAPP CHAT SECTION
function toggleChat() {
  const chatBody = document.getElementById('chat-body');
  const chatToggle = document.getElementById('chat-toggle');
  
  if (chatBody.style.display === 'none' || chatBody.style.display === '') {
    chatBody.style.display = 'flex';
    chatToggle.textContent = '-';
  } else {
    chatBody.style.display = 'none';
    chatToggle.textContent = '+';
  }
}


//DOWNLOAD FILES SECTION
function showModal() {
  document.getElementById('modal').classList.remove('hidden');
}
  
function closeModal() {
  document.getElementById('modal').classList.add('hidden');
} 
//END DOWNLOAD FILES SECTION