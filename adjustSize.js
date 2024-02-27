let params = new URLSearchParams(window.location.search);
let sponsorTextWidth = params.get('sponsorTextWidth');

let sponsorText = document.querySelector('.sponsor-text');
if (sponsorText) sponsorText.style.width = sponsorTextWidth;

let sponsorText = document.querySelectorALL('.sourceList');
sponsorText[0].style.width = sponsorTextWidth;
sponsorText[1].style.width = sponsorTextWidth;