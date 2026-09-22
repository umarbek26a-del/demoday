// ДАННЫЕ ФИЛЬМОВ
const continueWatchingMovies = [
  { title: 'Cruella', year: '2021', rating: '16+', score: '7.4', category: 'Comedy', progress: 75, image: 'https://sun1-56.vkuserphoto.ru/UwGDjyGP9wvSHcHcLEL_MrcsNYpYQpd6931CEw/-3qClTsU9Rg.jpg', desc: 'История становления самой печально известной злодейки Disney.' },
  { title: 'Luca', year: '2021', rating: '6+', score: '7.5', category: 'Comedy', progress: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYOAL2PEGg7MmJdUgcELSsFJCwx5BWV812mUGw7EVSa5ZFhHUtVtH9nuplbvKC3gs4BTUKsho_NZmJ7MqBzAufIX52s0n68NcMnvgFk8VW&s=10', desc: 'Незабываемые каникулы морского монстра на итальянской Ривьере.' },
  { title: 'Godzilla vs Kong', year: '2021', rating: '12+', score: '6.5', category: 'Action', progress: 90, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrACwerFABkzXsuUl0SXhJmHH5svGp4EXG2oC-aLkEporu56r-Bz8RP-mkEY166P2fdyVIPmWi2ynUl41pv8hC5JuOudlUgfg4ogZ8DtLR&s=10', desc: 'Два легендарных титана сходятся в эпическом противостоянии.' },
  { title: 'Mulan', year: '2020', rating: '12+', score: '5.7', category: 'Action', progress: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQ4Y-PyIiB37k_sXBUICkM_z5gFocn0LMwx6NnjMI6A&s=10', desc: 'Храбрая девушка маскируется под мужчину, чтобы спасти отца.' },
  { title: 'Dune', year: '2021', rating: '12+', score: '8.0', category: 'Drama', progress: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWtljM0rZmkLSaPumXSpbYBxgirQEIcPAbqQoViaghg&s=10', desc: 'История Пола Атрейдеса на опаснейшей планете во Вселенной.' }
];

const popularMovies = [
  { title: 'Squid Game', year: '2021', rating: '18+', score: '8.0', category: 'Drama', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIAtWgSDBAcVxVSJ-vY6G1SCHM8N-paINJ3KVbPJ04oA&s=10', desc: 'Смертельная игра за гигантский денежный приз.' },
  { title: 'The Witcher', year: '2019', rating: '18+', score: '8.2', category: 'Action', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPSvzXI56lf1iuEdvhBK1C0Jr77aGYp_BY-mCtsAQNRg&s=10', desc: 'Геральт из Ривии, наемный охотник за монстрами.' },
  { title: 'Stranger Things', year: '2016', rating: '16+', score: '8.7', category: 'Drama', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNmjINO2RYW38ond_LgfYTFIX6PuFNRWpKiwS6ITgbw&s=10', desc: 'Тайны, мистика и секретные эксперименты в городке Хоукинс.' },
  { title: 'Red Notice', year: '2021', rating: '12+', score: '6.3', category: 'Comedy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBeK66iXtig31erYqZdQvN6yiuXBW1BY7VK-MbsL3kqQ&s=10', desc: 'Агент ФБР преследует самого разыскиваемого вора произведений искусства.' }
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
const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const timelineContainer = document.getElementById('timelineContainer');
const progressBar = document.getElementById('progressBar');
const currentTimeElem = document.getElementById('currentTime');
const durationElem = document.getElementById('duration');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const videoContainer = document.getElementById('videoContainer');

// Обработка Play / Pause
function togglePlay() {
    if (video.paused) {
        video.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        video.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
}

playPauseBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

// Форматирование времени (секунды -> ММ:СС)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Обновление таймлайна и времени по мере воспроизведения
video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
    currentTimeElem.textContent = formatTime(video.currentTime);
});

// Загрузка общей длительности видео
video.addEventListener('loadedmetadata', () => {
    durationElem.textContent = formatTime(video.duration);
});

// Перемотка при клике на линию
timelineContainer.addEventListener('click', (e) => {
    const rect = timelineContainer.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
});

// Кнопка во весь экран
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        videoContainer.requestFullscreen().catch(err => {
            console.error(`Ошибка полноэкранного режима: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
});
 
