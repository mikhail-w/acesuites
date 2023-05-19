let suiteCollection = document.getElementsByClassName('suite-item');
let suitesListArray = Array.from(suiteCollection);
let currSuite = document.getElementsByClassName('swiper-slide-active');

let suiteName = currSuite[0].outerText.split(' ')[0];
let activeSuite = document.getElementsByClassName('active-gallery');
let galArray = Array.from(activeSuite);
const suitesList2 = [];
const currentSuite = ['Family',];
let currIndex = 0;

// console.log(suiteCollection);
// console.log(currSuite);
console.log(suitesListArray);
// console.log(currSuite[1].currentSrc);
// console.log(Array.from(suiteCollection));

//Convert the HTMLCollection to an Array and display the class list for ech element
function listClass(suitesListArray) {
    suitesListArray.forEach((element, index) => {
        suiteName = element.outerText.split(' ')[0];
        suitesList2[index] = suiteName;
        console.log(index, suiteName);

        if (element.classList.contains('swiper-slide-active')) {
            currSuite[index] = suiteName;
        } else {
        }
    });
    console.log(' ');

}


function getSuite(val) {
    if (val === "prev") {
        if (currIndex === 0) {
            currIndex = 3
        } else {
            currIndex -= 1;
        }
        // console.log("currIndex: " + currIndex);

    } else {
        if (currIndex === 3) {
            currIndex = 0;
        } else {
            currIndex += 1;
        }
    }
    console.log(suitesListArray[currIndex].getElementsByTagName('img')[0].currentSrc);
}


listClass(suitesListArray);
// getSuiteName();
// console.log('suitesList2: ' + suitesList2);
// console.log('currentSuite: ' + currentSuite);



