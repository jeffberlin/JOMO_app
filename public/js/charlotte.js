/* Code created for the JOMO, Inc. website. Designed by Ryan Payne, code written by Jeff Berlin */

// OS detection
if ( /Android|Opera Mini/i.test(navigator.userAgent) ) {

    document.getElementById("ios-img").style.display = 'none';

    document.getElementById("apple-img").style.display = 'none';

    document.getElementById("apple-img-bottom").style.display = 'none';
}

if ( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {

    document.getElementById("play-img").style.display = 'none';

    document.getElementById("google-img").style.display = 'none';

    document.getElementById("ios-img").style.marginRight = '0';

    document.getElementById("apple-img").style.marginRight = '0';

    document.getElementById("google-img-bottom").style.display = 'none';

    document.getElementById("apple-img-bottom").style.marginRight = '0';
}