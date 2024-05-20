document.addEventListener('DOMContentLoaded', () => {
  const cdDisplay = document.getElementById('countdown');
  const startB = document.getElementById('start');
  const stopB = document.getElementById('stop');
  let cdTimer;
  let totalSecRemaining;

  startB.addEventListener('click', () => {
      const hoursInput = parseInt(document.getElementById('hours').value) || 0;
      const minutesInput = parseInt(document.getElementById('minutes').value) || 0;
      const secondsInput = parseInt(document.getElementById('seconds').value) || 0;

      totalSecRemaining = hoursInput * 3600 + minutesInput * 60 + secondsInput;
      updateCountdownDisplay(totalSecRemaining);

      if (cdTimer) clearInterval(cdTimer);

      cdTimer = setInterval(() => {
          if (totalSecRemaining > 0) {
              totalSecRemaining--;
              updateCountdownDisplay(totalSecRemaining);
          } else {
              clearInterval(cdTimer);
              alert("Time's up!");
          }
      }, 1000);
  });

  stopB.addEventListener('click', () => {
      if (cdTimer) clearInterval(cdTimer);
  });

  function updateCountdownDisplay(seconds) {
      const hoursRemaining = Math.floor(seconds / 3600);
      const minutesRemaining = Math.floor((seconds % 3600) / 60);
      const secondsRemaining = seconds % 60;

      cdDisplay.textContent = 
          `${String(hoursRemaining).padStart(2, '0')}:
           ${String(minutesRemaining).padStart(2, '0')}:
           ${String(secondsRemaining).padStart(2, '0')}`;
  }
});
