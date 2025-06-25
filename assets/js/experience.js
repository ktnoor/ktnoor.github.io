function expandExperience(event, idx) {
    // Get the clicked item
    var clickedItem = event.target.closest('.experience-item');
    
    // Check if this item is already active
    var isAlreadyActive = clickedItem.classList.contains('active');
    
    // Close all items
    document.querySelectorAll('.experience-item').forEach(function(item) {
      item.classList.remove('active');
    });
    
    // If it wasn't already active, open it
    if (!isAlreadyActive && clickedItem) {
      clickedItem.classList.add('active');
    }
  }