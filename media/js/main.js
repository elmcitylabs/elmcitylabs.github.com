window.onload = function() {
    d = window.location.hash.substring(1);
    if (d.length > 1) {
        normal_inquiry.className = "hidden";
        domain_inquiry.className = "";
        icon.className = "";
        logo.className = "hidden";
    }
    else {
        normal_inquiry.className = "";
        domain_inquiry.className = "hidden";
        icon.className = "hidden";
        logo.className = "";
    }
}

