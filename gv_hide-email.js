let emails = document.getElementsByClassName('gv_hide-email') //doesnt get the internal email itself;
emails.forEach((e) => {
    let user = e.dataset.user;
    let site = e.dataset.site; 
    e.setAttribute('href', 'mailto:' + user + '@' + site);
    if (e.dataset.replace) {
        e.innerHTML = user + '@' + site;
    }
});