function scrollToDiv() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var items = document.getElementsByClassName('plant');

    // Loop through all items
    for (var i = 0; i < items.length; i++) {
      var itemName = items[i].querySelector('h2').innerText.toLowerCase();
      var content = items[i].querySelector('h2').nextElementSibling;

      // Remove highlight from previous searches
      items[i].classList.remove('highlight');

      if (itemName.includes(searchTerm)) {
        items[i].classList.add('highlight');
        items[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(function() {
          items[i].classList.remove('highlight');
        }, 5000);
        break; // Stop searching after first match found
      }
    }
  }