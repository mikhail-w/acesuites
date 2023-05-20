let suitesListArray = Array.from(document.getElementsByClassName('suite-item'));
let gallerySectionArray = Array.from(document.getElementsByClassName('gallery-section'));
let galleryImageArray;
let currIndex = 0;
let selectedSuiteName;
let hrefPath;
let srcPath;

//This function identifies the currently selected suite
function getSuite(val) {
    if (isNaN(val)) {
        if (val === "prev") {
            if (currIndex === 0) {
                currIndex = 3
            } else {
                currIndex -= 1;
            }
        } else {
            if (currIndex === 3) {
                currIndex = 0;
            } else {
                currIndex += 1;
            }
        }
    } else {
        currIndex = val;
    }
    //Change Suite Gallery Title
    selectedSuiteName = suitesListArray[currIndex].outerText.split(' ')[0];
    galleryImageArray = Array.from(gallerySectionArray[0].getElementsByTagName('a'));
    document.getElementById("gallery-title").innerText = selectedSuiteName + " Suite Gallery";


    galleryImageArray.forEach((item, index) => {
        hrefPath = item.href.split('suites/');
        srcPath = item.childNodes[1].src.split('suites/');
        // console.log(item);
        // console.log(index, "HREF: " + item.href);
        // console.log(index, "Image Source: " + item.childNodes[1].src);
        // console.log(srcPath);
        // console.log(hrefPath[0]);
        let newPath = hrefPath[0] + "suites/" + selectedSuiteName.toLowerCase() + "/" + selectedSuiteName.toLowerCase() + "-0" + (index + 1) + ".jpg";
        item.href = newPath;
        item.childNodes[1].src = srcPath[0] + "suites/" + selectedSuiteName.toLowerCase() + "/" + selectedSuiteName.toLowerCase() + "-0" + (index + 1) + ".jpg";
        // console.log(newPath);

    })
}




