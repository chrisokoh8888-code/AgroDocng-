// Example: Filter function for shop page
function filterCategory(category) {
  const items = document.querySelectorAll('.card');
  items.forEach(item => {
    if(category==='all') item.style.display='block';
    else item.style.display = item.classList.contains(category) ? 'block' : 'none';
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
  });
});
