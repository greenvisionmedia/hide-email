let emails = document.querySelectorAll('a[data-user]');
emails.forEach((e) => {
    let user = e.dataset.user;
    let site = e.dataset.site; 
    e.setAttribute('href', 'mailto:' + user + '@' + site);
    if (e.classList.comtains('gvm-he')) {
        e.innerHTML = user + '@' + site;
    }
});