let emails = document.querySelectorAll('gv_hide-email');
let user = emails[0].dataset.user;
let site = emails[0].dataset.site;
emails.forEach((e) => {
    if (e.dataset.site) {
        e.setAttribute(
            'href',
            'mailto:' + e.dataset.user + '@' + e.dataset.site
        );
    } else {
        e.setAttribute('href', 'mailto:' + user + '@' + site);
    }
    if (!e.dataset.keepText) {
        e.innerHTML = user + '@' + site;
    }
});
