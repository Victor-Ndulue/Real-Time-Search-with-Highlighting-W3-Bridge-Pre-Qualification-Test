document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const itemList = document.getElementById('itemList');
    const items = Array.from(itemList.getElementsByTagName('li'));
  
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      items.forEach(item => {
        const text = item.textContent;
        const lowerText = text.toLowerCase();
        if (lowerText.includes(query) && query !== '') {
          const startIndex = lowerText.indexOf(query);
          const endIndex = startIndex + query.length;
          const highlightedText = text.substring(startIndex, endIndex);
  
          item.innerHTML = text.substring(0, startIndex) +
                           `<span class="highlight">${highlightedText}</span>` +
                           text.substring(endIndex);
          item.style.display = '';
        } else if (query === '') {
          item.innerHTML = text;
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  