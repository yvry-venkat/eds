export default function decorate(block) {
  const rows = [...block.children];

  const text = rows[0]?.textContent.trim();
  const alignment = rows[1]?.textContent.trim().toLowerCase();
  const size = rows[2]?.textContent.trim().toLowerCase();

  const heading = document.createElement('h2');

  heading.textContent = text;

  if (alignment === 'left') {
    heading.classList.add('left');
  }

  if (alignment === 'center') {
    heading.classList.add('center');
  }

  if (alignment === 'right') {
    heading.classList.add('right');
  }

  if (size === 'small') {
    heading.classList.add('small');
  }

  if (size === 'medium') {
    heading.classList.add('medium');
  }

  if (size === 'large') {
    heading.classList.add('large');
  }

  block.innerHTML = '';
  block.append(heading);
}