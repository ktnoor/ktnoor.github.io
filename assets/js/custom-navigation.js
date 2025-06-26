/*
* Custom Navigation Override
* Ensures all navigation items stay visible when there's enough space
*/

$(document).ready(function() {
  // Override the greedy navigation behavior
  function customUpdateNav() {
    var $nav = $('#site-nav');
    var $btn = $('#site-nav button');
    var $vlinks = $('#site-nav .visible-links');
    var $hlinks = $('#site-nav .hidden-links');
    
    // Calculate total width needed for all items
    var totalItems = $vlinks.children().length + $hlinks.children().length;
    var itemWidth = 120; // Approximate width per item including padding and gap
    var totalWidthNeeded = totalItems * itemWidth;
    var availableWidth = $nav.width() - 100; // Leave space for hamburger button
    
    // If we have enough space, show all items
    if (availableWidth >= totalWidthNeeded && $hlinks.children().length > 0) {
      // Move all items back to visible links
      $hlinks.children().each(function() {
        $(this).appendTo($vlinks);
      });
      
      // Hide the hamburger button
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
    
    // Only use greedy navigation if we really don't have enough space
    if (availableWidth < totalWidthNeeded && $vlinks.children().length > 1) {
      // Show hamburger button
      $btn.removeClass('hidden');
      
      // Move items to hidden until we have enough space
      while ($vlinks.children().length > 1 && $vlinks.width() > availableWidth) {
        $vlinks.children().not('.masthead__menu-item--lg').last().prependTo($hlinks);
      }
    }
  }
  
  // Call on page load
  customUpdateNav();
  
  // Call on window resize
  $(window).on('resize', function() {
    setTimeout(customUpdateNav, 100); // Small delay to ensure resize is complete
  });
  
  // Override the original greedy navigation update function
  if (typeof updateNav === 'function') {
    // Store original function
    var originalUpdateNav = updateNav;
    
    // Replace with our custom version
    window.updateNav = function() {
      customUpdateNav();
    };
  }
}); 