export default function decorate(block) {
  const rows = [...block.children];
  const [eyebrowRow, headingRow, descriptionRow, actionsRow, codeRow] = rows;

  const getText = (row) => row?.textContent.trim() || '';
  const getCell = (row, index = 0) => row?.children[index] || row;

  const content = document.createElement('div');
  content.className = 'hero-content';

  if (getText(eyebrowRow)) {
    const eyebrow = document.createElement('div');
    eyebrow.className = 'hero-eyebrow';
    eyebrow.textContent = getText(eyebrowRow);
    content.append(eyebrow);
  }

  if (getText(headingRow)) {
    const heading = document.createElement('h1');
    heading.innerHTML = getCell(headingRow).innerHTML;
    content.append(heading);
  }

  if (getText(descriptionRow)) {
    const description = document.createElement('p');
    description.innerHTML = getCell(descriptionRow).innerHTML;
    content.append(description);
  }

  if (actionsRow) {
    const actions = document.createElement('div');
    actions.className = 'hero-actions';
    [...actionsRow.children].forEach((cell) => {
      const link = cell.querySelector('a');
      if (!link) return;
      link.classList.add('hero-button');
      actions.append(link);
    });
    if (actions.children.length) content.append(actions);
  }

  const graphic = document.createElement('div');
  graphic.className = 'hero-graphic';
  graphic.innerHTML = `
    <div class="hero-window-bar">
      <span class="hero-window-dot hero-window-dot-red"></span>
      <span class="hero-window-dot hero-window-dot-yellow"></span>
      <span class="hero-window-dot hero-window-dot-green"></span>
      <span class="hero-window-title">vs-tectra-curriculum.json</span>
      <span class="hero-window-action" aria-hidden="true"></span>
    </div>
    <pre class="hero-code"><code></code></pre>
  `;

  const code = graphic.querySelector('code');
  const source = getText(codeRow);
  code.textContent = source || `{
  "curriculum": "Full-Stack Development",
  "methodology": "90% Hands-on Practice",
  "tools": ["React", "NodeJS", "AWS", "Python", "Kubernetes"],
  "outcomes": {
    "careerSupport": "Resume Building & Mock Interviews",
    "placementAssistance": "95% Direct Hire Rate"
  }
}`;

  content.querySelectorAll('h1 p').forEach((p) => p.classList.add('hero-heading-line'));

  block.replaceChildren(content, graphic);
}
