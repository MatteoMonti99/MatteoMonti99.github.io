window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var mainContent = document.getElementById('main-content');
    mainContent.style.marginTop = scrollPosition + 'px';
});