const circles = document.querySelectorAll('.skill-circle-progress');

circles.forEach(circle => {
  const percent = +circle.getAttribute('data-percent');
  const progress = circle.querySelector('.progress');
  const text = circle.querySelector('.percent-text');

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  progress.style.strokeDashoffset = offset;

  let count = 0;
  const interval = setInterval(() => {
    if (count >= percent) {
      clearInterval(interval);
    } else {
      count++;
      text.textContent = count + "%";
    }
  }, 20);
});
function updateProfileImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById('profilePreview').src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }