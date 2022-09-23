let email = document.getElementById('gvm-he');
let user = email.dataset.user;
let site = email.dataset.site;
email.innerHTML(user + '@' + site);
email.setAttribute('href', 'mailto:' + user + '@' + site);