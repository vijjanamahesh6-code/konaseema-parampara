const searchInput = document.getElementById('searchInput');
const cards = [...document.querySelectorAll('.category-card')];
const noResults = document.getElementById('noResults');
const toast = document.getElementById('toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const match = card.dataset.name.includes(query);
    card.hidden = !match;
    if (match) visible++;
  });
  noResults.hidden = visible !== 0;
});

document.getElementById('searchToggle').addEventListener('click', () => {
  searchInput.focus();
  window.scrollTo({top: 0, behavior: 'smooth'});
});
document.getElementById('menuButton').addEventListener('click', () => showToast('Menu navigation can be connected to your store pages.'));
document.getElementById('cartButton').addEventListener('click', () => showToast('Your shopping bag is empty.'));
document.getElementById('viewAll').addEventListener('click', () => {
  searchInput.value = '';
  searchInput.dispatchEvent(new Event('input'));
  document.getElementById('categories').scrollIntoView({behavior: 'smooth'});
});
cards.forEach(card => card.addEventListener('click', () => {
  showToast(`${card.querySelector('h3').textContent} selected — add products to connect this category.`);
}));
document.querySelectorAll('.nav-item').forEach(item => item.addEventListener('click', () => {
  document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
  item.classList.add('active');
  const page = item.dataset.page;
  if (page === 'Home') window.scrollTo({top: 0, behavior: 'smooth'});
  else showToast(`${page} page is ready to be connected to your store.`);
}));
document.getElementById('whatsappButton').addEventListener('click', () => {
  showToast('Add your WhatsApp business number in script.js to enable chat.');
});
