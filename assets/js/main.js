// -----------------------------------------------------------------------------
// Dark theme toggle. The initial theme is set inline in baseof.html.
// -----------------------------------------------------------------------------
var themeButton = document.querySelector(".btn-toggle-theme");
if (themeButton) {
	themeButton.addEventListener("click", function () {
		document.body.classList.toggle("dark-theme");
		var theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
		try { localStorage.setItem("theme", theme); } catch (e) {}
	});
}

// -----------------------------------------------------------------------------
// Print button
// -----------------------------------------------------------------------------
var printButton = document.querySelector(".btn-print");
if (printButton) {
	printButton.addEventListener("click", function () { window.print(); });
}

// -----------------------------------------------------------------------------
// ScrollSpy: mark the navigation entry of the topmost section in view
// -----------------------------------------------------------------------------
window.addEventListener("DOMContentLoaded", function () {
	if (!("IntersectionObserver" in window)) { return; }
	var sections = Array.prototype.slice.call(document.querySelectorAll("section[id]"));
	var items = {};
	document.querySelectorAll('nav a[href^="#section-"]').forEach(function (a) {
		items[a.getAttribute("href").slice(1)] = a.parentElement;
	});
	var visible = {};
	var observer = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) { visible[entry.target.id] = entry.isIntersecting; });
		var current = sections.filter(function (s) { return visible[s.id]; })[0];
		Object.keys(items).forEach(function (id) {
			items[id].classList.toggle("active", current !== undefined && current.id === id);
		});
	}, { rootMargin: "0px 0px -60% 0px" });
	sections.forEach(function (section) { observer.observe(section); });
});
