function expandPublication(event, idx) {
  var li = event.target.closest('.publication-item');
  if (!li) return;
  
  // Check if the clicked item is already active
  if (li.classList.contains('active')) {
    // If already active, collapse it
    li.classList.remove('active');
  } else {
    // Close all other publications
    document.querySelectorAll('.publication-item').forEach(function(item) {
      item.classList.remove('active');
    });
    // Open the clicked one
    li.classList.add('active');
  }
} 