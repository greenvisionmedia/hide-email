/**
 * gv-hide-email
 * Add a client's email to the html attributes of an inline element; the email will appear instead of whatever content you place in the element
 */
()=>{
    let emails = document.querySelectorAll('.gv-hide-email');

    if(!emails) return;

    //The first data-user and data-site you set will populate the rest of the emails on the page, unless they're overriden

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
        if (!e.hasAttribute('data-keep-text')) {
            e.innerHTML = user + '@' + site;
        }
    });
}
