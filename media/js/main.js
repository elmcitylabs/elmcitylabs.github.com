window.onload = function() {
    d = window.location.hash.substring(1);
    if (d.length > 1) {
        normal_inquiry.className = "hidden";
        domain_inquiry.className = "";
    }
    else {
        domain_inquiry.className = "hidden";
    }
}

