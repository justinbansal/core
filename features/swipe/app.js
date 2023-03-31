const card = document.querySelector('.article');

const rejectZone = document.querySelector('.reject');
const approveZone = document.querySelector('.approve');

rejectZone.addEventListener('dragenter', (e) => {
  if (e.target.classList.contains('reject')) {
    e.target.classList.add('dragover');
  }
});

rejectZone.addEventListener('dragleave', (e) => {
  if (e.target.classList.contains('reject')) {
    e.target.classList.remove('dragover');
  }
});

rejectZone.addEventListener('dragover', (e) => {
  e.preventDefault();
});

rejectZone.addEventListener('drop', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('reject')) {
    e.target.classList.remove('dragover');
    let draggedCard = card.cloneNode(true);
    card.classList.add('dragged', 'rejected');
    e.target.appendChild(draggedCard);
  }
});

approveZone.addEventListener('dragenter', (e) => {
  if (e.target.classList.contains('approve')) {
    e.target.classList.add('dragover');
  }
});

approveZone.addEventListener('dragleave', (e) => {
  if (e.target.classList.contains('approve')) {
    e.target.classList.remove('dragover');
  }
});

approveZone.addEventListener('dragover', (e) => {
  e.preventDefault();
});

approveZone.addEventListener('drop', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('approve')) {
    e.target.classList.remove('dragover');
    let draggedCard = card.cloneNode(true);
    card.classList.add('dragged', 'approved');
    e.target.appendChild(draggedCard);
  }
});
