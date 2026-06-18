const learnMoreBtn = document.getElementById('learnMoreBtn');
const message = document.getElementById('message');
const featureLab = document.querySelector('.feature-lab');
const igniteFeatureBtn = document.getElementById('igniteFeatureBtn');
const swapPaletteBtn = document.getElementById('swapPaletteBtn');
const featureStatus = document.getElementById('featureStatus');

let pulseActive = false;
let paletteShifted = false;

learnMoreBtn.addEventListener('click', () => {
  message.textContent = 'Comfort, clean design, and easy everyday style.';
});

igniteFeatureBtn.addEventListener('click', () => {
  pulseActive = !pulseActive;
  featureLab.classList.toggle('is-active', pulseActive);

  if (pulseActive) {
    featureStatus.textContent = 'Pulse sequence online. The Team New core is now animated and fully awake.';
    return;
  }

  featureStatus.textContent = paletteShifted
    ? 'The lab is idle, but the glow shift is still active.'
    : 'The lab is idle. Press Ignite Motion to start the pulse.';
});

swapPaletteBtn.addEventListener('click', () => {
  paletteShifted = !paletteShifted;
  featureLab.classList.toggle('is-shifted', paletteShifted);

  if (paletteShifted) {
    featureStatus.textContent = pulseActive
      ? 'Glow shifted to the aurora palette. Motion remains online.'
      : 'Glow shifted to the aurora palette. Tap Ignite Motion to pair it with movement.';
    return;
  }

  featureStatus.textContent = pulseActive
    ? 'Pulse sequence online. The Team New core is now animated and fully awake.'
    : 'The lab is idle. Press Ignite Motion to start the pulse.';
});
