let lives = 5; 


function updateLives() {
  document.getElementById('lives-count').textContent = `❤️ Lives: ${lives}`;
}

function loseLife() {
  lives--;
  updateLives();
  if (lives <= 0) {
    alert("You lost all your lives! Game over.");
    restartGame();
  }
}
function restartGame() {
  lives = 5; 
  updateLives();
  goToScene('intro'); 
}


function goToSceneWithLifeLoss() {
  loseLife();
  goToScene('scene-1');
}

function goToScene(id) {
  document.querySelectorAll('.scene').forEach(scene => {
    scene.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}
function showStage() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('stage1').classList.add('visible');
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function fightGuardian() {
  loseLife(); 
  goToScene('scene-13');
}

function goToSceneWithLifeLossAndMessage(id, message) {
  loseLife();
  alert(message);
  goToScene('scene-1');
}
function useWand() {
  goToScene('scene-15');
}

function usePotion() {
  goToScene('scene-16');
}

function useCloakBoss() {
  goToScene('scene-17');
}
function useCloak() {
  goToScene('scene-12');
}

