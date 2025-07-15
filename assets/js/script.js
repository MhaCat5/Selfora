fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const box = document.querySelector('.about-image-info');

    data.skills.forEach(skill => {
      const p = document.createElement('p');
      p.className = 'text-white';
      p.textContent = `${skill.name}: ${skill.description}`;
      box.appendChild(p);
    });
  });
