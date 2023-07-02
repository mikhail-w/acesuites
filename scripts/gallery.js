let suitesListArray = Array.from(document.getElementsByClassName('suite-item'));
let gallerySectionArray = Array.from(document.getElementsByClassName('gallery-section'));
let galleryImageArray;
let currIndex = 0;
let indexMap = new Map([
    ["family", 0],
    ["single", 1],
    ["kingston", 2],
    ["camping", 3]
]);
let selectedSuiteName;
let hrefPath;
let srcPath;
let curTitle = Array.from(document.getElementsByClassName('suite-item'));

console.log("Current Index: ", currIndex);
// console.log(suitesListArray);
// console.log(gallerySectionArray);
// console.log("Loaded")
// console.log(curTitle);
//This function identifies the currently selected suite
function getSuite(val) {

    if (isNaN(val)) {

        if (val === "prev") {
            // console.log("In 'getSuite' if statement")
            // console.log(curTitle);
            if (currIndex === 0) {
                currIndex = 3
            } else {
                currIndex -= 1;
            }
        } else {
            // console.log("In 'getSuite' else statement")
            // console.log(curTitle);
            if (currIndex === 3) {
                currIndex = 0;
            } else {
                currIndex += 1;
            }
        }
    } else {
        //If suite item is selected via thumbs-container
        currIndex = val;
        // console.log("In 'getSuite' last else statement")
        // console.log(curTitle);
    }
    console.log("Getsuite Current Index: ", currIndex);
    updateImageGallery();

}

function getActive() {
    //Get Folder names for each hero image
    // console.log(curTitle);
    // console.log("current index: ", currIndex, suitesListArray[currIndex]);
    let srcName;
    curTitle.forEach((titleItem) => {
        let curSrc = titleItem.children[0].src.split('/');
        if (titleItem.classList.contains('swiper-slide-active')) {
            srcName = curSrc[curSrc.length - 1].split('-')[0];
            // console.log("Get Active Function: ", srcName.charAt(0).toUpperCase() + srcName.slice(1));
            document.getElementById("gallery-title").innerText = srcName.charAt(0).toUpperCase() + srcName.slice(1) + " Suite Gallery";
        }
    })
    galleryImageArray = Array.from(gallerySectionArray[0].getElementsByTagName('a'));
    //cycle through all <a> tags and update the href and image src paths
    galleryImageArray.forEach((item, index) => {
        hrefPath = item.href.split('suites/');
        srcPath = item.childNodes[1].src.split('suites/');
        let newPath = hrefPath[0] + "suites/" + srcName + "/" + srcName + "-0" + (index + 1) + ".jpg";
        item.href = newPath;
        item.childNodes[1].src = srcPath[0] + "suites/" + srcName + "/" + srcName + "-0" + (index + 1) + ".jpg";
    })
    console.log(suitesListArray);
    currIndex = indexMap.get(srcName);
    console.log("GetActive Current Index: ", currIndex);
}

function updateImageGallery() {
    //Change Suite Gallery Title
    selectedSuiteName = suitesListArray[currIndex].outerText.split(' ')[0];
    // console.log("Currently Selected Suite Name:", selectedSuiteName);
    document.getElementById("gallery-title").innerText = selectedSuiteName + " Suite Gallery";

    //Update Gallery images to reflect currently selected suite
    galleryImageArray = Array.from(gallerySectionArray[0].getElementsByTagName('a'));

    //cycle through all <a> tags and update the href and image src paths
    galleryImageArray.forEach((item, index) => {
        hrefPath = item.href.split('suites/');
        srcPath = item.childNodes[1].src.split('suites/');
        let newPath = hrefPath[0] + "suites/" + selectedSuiteName.toLowerCase() + "/" + selectedSuiteName.toLowerCase() + "-0" + (index + 1) + ".jpg";
        item.href = newPath;
        item.childNodes[1].src = srcPath[0] + "suites/" + selectedSuiteName.toLowerCase() + "/" + selectedSuiteName.toLowerCase() + "-0" + (index + 1) + ".jpg";
    })
}


