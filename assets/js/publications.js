function expandPublication(event, idx) {
  // Close all
  document.querySelectorAll('.publication-item').forEach(function(item) {
    item.classList.remove('active');
  });
  // Open the clicked one
  var li = event.target.closest('.publication-item');
  if (li) li.classList.add('active');
} 