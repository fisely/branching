const search = document.querySelector('#search');
const sections = [...document.querySelectorAll('section')];
const empty = document.querySelector('#empty');

search.addEventListener('input', () => {
  const query = search.value.toLowerCase().trim();
  let visible = 0;

  sections.forEach(section => {
    const match = !query || section.textContent.toLowerCase().includes(query);
    section.hidden = !match;
    if (match) visible++;
  });

  empty.style.display = visible ? 'none' : 'block';
});

document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    await navigator.clipboard.writeText(button.dataset.copy);
    const original = button.textContent;
    button.textContent = 'KOPIERT';
    setTimeout(() => button.textContent = original, 1200);
  });
});
