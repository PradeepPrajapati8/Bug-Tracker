const storageKey = 'bugReports';

function loadReports() {
  return JSON.parse(localStorage.getItem(storageKey) || '[]');
}

function saveReports(list) {
  localStorage.setItem(storageKey, JSON.stringify(list));
}

function deleteBug(index) {
  const reports = loadReports();
  reports.splice(index, 1);
  saveReports(reports);
  render(); // re-render after delete
}

function toggleResolved(index) {
  const reports = loadReports();
  reports[index].status = reports[index].status === 'Open' ? 'Resolved' : 'Open';
  saveReports(reports);
  render(); // re-render after toggle
}

function render() {
  const reports = loadReports();
  const severityFilter = document.getElementById('severityFilter').value;
  const statusFilter   = document.getElementById('statusFilter').value;

  const openList = document.getElementById('openBugList');
  const resolvedList = document.getElementById('resolvedBugList');

  openList.innerHTML = '';
  resolvedList.innerHTML = '';

  reports.forEach((r, index) => {
    if ((severityFilter !== 'All' && r.severity !== severityFilter) ||
        (statusFilter !== 'All' && r.status !== statusFilter)) return;

    const li = document.createElement('li');
    li.className = r.severity.toLowerCase();
    li.innerHTML = `
      <input type="checkbox" ${r.status === 'Resolved' ? 'checked' : ''} onchange="toggleResolved(${index})">
      <strong>${r.title}</strong>
      <small>[${r.severity} | ${r.status}]</small>
      <p>${r.desc}</p>
      <button onclick="deleteBug(${index})">🗑️ Delete</button>
    `;

    if (r.status === 'Open') openList.appendChild(li);
    else resolvedList.appendChild(li);
  });

  if (!openList.children.length) openList.innerHTML = '<li>No open bugs.</li>';
  if (!resolvedList.children.length) resolvedList.innerHTML = '<li>No resolved bugs.</li>';
}

if (document.getElementById('bugList') || document.getElementById('openBugList')) {
  document.getElementById('severityFilter').onchange = render;
  document.getElementById('statusFilter').onchange = render;
  render();
}

if (document.getElementById('bugForm')) {
  document.getElementById('bugForm').onsubmit = e => {
    e.preventDefault();
    const reports = loadReports();
    const newBug = {
      title: document.getElementById('title').value.trim(),
      desc: document.getElementById('desc').value.trim(),
      severity: document.getElementById('severity').value,
      status: 'Open',
      created: Date.now()
    };
    reports.unshift(newBug);
    saveReports(reports);
    alert('Bug submitted!');
    window.location = 'index.html';
  };
}
