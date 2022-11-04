const ScoreBtn = document.querySelectorAll('.score-btn');
let homeScore = 0;
let guestScore = 0;

ScoreBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('home')) {
      homeScore += parseFloat(btn.value);
      document.getElementById('home-scoreboard').textContent = homeScore;
    } else {
      guestScore += parseFloat(btn.value);
      document.getElementById('guest-scoreboard').textContent = guestScore;
    }
  });
});
