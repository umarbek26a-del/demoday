// ДАННЫЕ ФИЛЬМОВ
const continueWatchingMovies = [
  { title: 'Cruella', year: '2021', rating: '16+', score: '7.4', category: 'Comedy', progress: 75, image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop', desc: 'История становления самой печально известной злодейки Disney.' },
  { title: 'Luca', year: '2021', rating: '6+', score: '7.5', category: 'Comedy', progress: 40, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop', desc: 'Незабываемые каникулы морского монстра на итальянской Ривьере.' },
  { title: 'Godzilla vs Kong', year: '2021', rating: '12+', score: '6.5', category: 'Action', progress: 90, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop', desc: 'Два легендарных титана сходятся в эпическом противостоянии.' },
  { title: 'Mulan', year: '2020', rating: '12+', score: '5.7', category: 'Action', progress: 20, image: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop', desc: 'Храбрая девушка маскируется под мужчину, чтобы спасти отца.' },
  { title: 'Dune', year: '2021', rating: '12+', score: '8.0', category: 'Drama', progress: 60, image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop', desc: 'История Пола Атрейдеса на опаснейшей планете во Вселенной.' }
];

const popularMovies = [
  { title: 'Squid Game', year: '2021', rating: '18+', score: '8.0', category: 'Drama', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=600&auto=format&fit=crop', desc: 'Смертельная игра за гигантский денежный приз.' },
  { title: 'The Witcher', year: '2019', rating: '18+', score: '8.2', category: 'Action', image: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=600&auto=format&fit=crop', desc: 'Геральт из Ривии, наемный охотник за монстрами.' },
  { title: 'Stranger Things', year: '2016', rating: '16+', score: '8.7', category: 'Drama', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop', desc: 'Тайны, мистика и секретные эксперименты в городке Хоукинс.' },
  { title: 'Red Notice', year: '2021', rating: '12+', score: '6.3', category: 'Comedy', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop', desc: 'Агент ФБР преследует самого разыскиваемого вора произведений искусства.' }
];

// РЕНДЕР КАРТОЧЕК
function renderContinueWatching() {
  const container = document.getElementById('continueGrid');
  container.innerHTML = continueWatchingMovies.map(movie => `
    <div class="movie-card" onclick="openInfoModal('${movie.title}', '${movie.year}', '${movie.rating}', '${movie.score}', '${movie.category}', '${movie.desc}', '${movie.image}')">
      <div class="card-img-wrapper">
        <img src="${movie.image}" alt="${movie.title}">
      </div>
      <div class="card-info">
        <div class="card-title">${movie.title}</div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${movie.progress}%;"></div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderPopular(category = 'All') {
  const container = document.getElementById('popularGrid');
  const filtered = category === 'All' 
    ? popularMovies 
    : popularMovies.filter(m => m.category === category);

  container.innerHTML = filtered.map(movie => `
    <div class="movie-card" onclick="openInfoModal('${movie.title}', '${movie.year}', '${movie.rating}', '${movie.score}', '${movie.category}', '${movie.desc}', '${movie.image}')">
      <div class="card-img-wrapper">
        <img src="${movie.image}" alt="${movie.title}">
      </div>
      <div class="card-info">
        <div class="card-title">${movie.title}</div>
      </div>
    </div>
  `).join('');
}

// МОДАЛЬНЫЕ ОКНА И СОБЫТИЯ
const playModal = document.getElementById('playModal');
const infoModal = document.getElementById('infoModal');
const profileModal = document.getElementById('profileModal');

function openPlayModal(title) {
  document.getElementById('videoTitle').innerText = `Воспроизведение: ${title}`;
  playModal.classList.add('active');
}

function openInfoModal(title, year, rating, score, category, desc, image) {
  document.getElementById('infoTitle').innerText = title;
  document.getElementById('infoYear').innerText = year;
  document.getElementById('infoRating').innerText = rating;
  document.getElementById('infoScore').innerText = `★ ${score}`;
  document.getElementById('infoCategory').innerText = `Жанр: ${category}`;
  document.getElementById('infoDescription').innerText = desc;
  document.getElementById('infoImage').src = image;

  document.getElementById('modalPlayBtn').onclick = () => {
    infoModal.classList.remove('active');
    openPlayModal(title);
  };

  infoModal.classList.add('active');
}

// КНОПКИ И СЛУШАТЕЛИ СОБЫТИЙ
document.getElementById('heroPlayBtn').addEventListener('click', () => openPlayModal('Squid Game'));
document.getElementById('heroInfoBtn').addEventListener('click', () => {
  openInfoModal(
    'Squid Game', 
    '2021', 
    '18+', 
    '8.0', 
    'Drama / Thriller', 
    'Сотни игроков с финансовыми проблемами принимают странное приглашение принять участие в детских играх...', 
    'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=600&auto=format&fit=crop'
  );
});

document.getElementById('profileBtn').addEventListener('click', () => profileModal.classList.add('active'));

// Закрытие модалок
document.getElementById('closePlayModal').onclick = () => playModal.classList.remove('active');
document.getElementById('closeInfoModal').onclick = () => infoModal.classList.remove('active');
document.getElementById('closeProfileModal').onclick = () => profileModal.classList.remove('active');

window.onclick = (e) => {
  if (e.target === playModal) playModal.classList.remove('active');
  if (e.target === infoModal) infoModal.classList.remove('active');
  if (e.target === profileModal) profileModal.classList.remove('active');
};

// Фильтр категорий
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    renderPopular(e.target.dataset.category);
  });
});

// Форма подписки (для требований DemoDay)
document.getElementById('subscribeForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('userEmail').value;
  const status = document.getElementById('formStatus');
  status.innerText = `Спасибо за подписку, ${email}!`;
  e.target.reset();
});

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
  renderContinueWatching();
  renderPopular();
});