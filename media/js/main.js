window.onload = function() {
    d = window.location.hash.substring(1);
    if (d.length > 1) {
        normal_inquiry.className = "hidden";
        domain_inquiry.className = "";
        email.setAttribute('href', 'mailto:domains@elmcitylabs.com?subject=I\'m%20interested%20in%20' + d);
    }
    else {
        normal_inquiry.className = "";
        domain_inquiry.className = "hidden";
    }
}

