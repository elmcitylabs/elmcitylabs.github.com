window.onload = function() {
    d = window.location.pathname.split('/')[2];
    email.setAttribute('href', 'mailto:domains@elmcitylabs.com?subject=I\'m%20interested%20in%20' + d);
}

