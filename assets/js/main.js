// -----------------------------------------------------------------------------
// Dark Theme handling based on https://css-tricks.com/a-complete-guide-to-dark-theme-on-the-web/
// -----------------------------------------------------------------------------
const btn = document.querySelector('.btn-toggle-theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem("theme");

// Set to dark if stored in local storage or no current theme and user prefers darkness 
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme != "light" || currentTheme == null) {
  if(prefersDarkScheme.matches) {
    document.body.classList.toggle("dark-theme");
  }
}

// Theme toggle button handler
btn.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
  var theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// -----------------------------------------------------------------------------
// ScrollSpy https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/
// -----------------------------------------------------------------------------

window.addEventListener('DOMContentLoaded', () => {
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});	
});

// -----------------------------------------------------------------------------
// Misc
// -----------------------------------------------------------------------------
