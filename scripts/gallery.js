function getSuite(val) {
    let currSuite;
    let temp;
    // console.log("Val: " + val);
    if (val === "prev") {
        currSuite = document.getElementsByClassName("swiper-slide-prev");
    } else {
        currSuite = document.getElementsByClassName("swiper-slide-next");
    }

    // console.log(currSuite[0].outerText);
    if (document.getElementById("status") != null) {
        var idPost = document.getElementById("status").innerHTML;
        temp = currSuite[0].outerText.split(' ');
    }
    console.log(temp);
    let suiteName = temp[0];
    console.log("suiteName: " + suiteName);
}
// function getSuite(val) {
//     let currSuite = document.getElementsByClassName("swiper-slide-thumb-active");
//     console.log(currSuite);
//     console.log(currSuite.item(0).currentSrc);
// }


// let thumbs = document.getElementsByClassName("thumbs-container");
// let x = thumbs[0].getElementsByTagName("img");
// let test = Array.from(x);
// let substring;

// test.forEach(myfunction)

// function myfunction(item) {
//     // substring = getSubstring(item.src, 'suites/', '-');
//     substring = item.src.split("/images/suites/");
//     console.log(substring[1].split("-")[0]);
//     // console.log(item.src);
// }

// function getSubstring(str, start, end) {
//     char1 = str.indexOf(start) + 1;
//     char2 = str.lastIndexOf(end);
//     return str.substring(char1, char2);
// }


