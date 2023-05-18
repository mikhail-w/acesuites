let suiteList = document.getElementsByClassName('suite-list');;
let currSuite = document.getElementsByClassName('swiper-slide-active');
// let suiteName = currSuite[0].outerText.split(' ')[0];
let lastValIndex = suiteList.length - 1;
let prevSuite = suiteList[lastValIndex];
let sList = Array.from(suiteList);

//Convert the HTMLCollection to an Array and display the class list for ech element
function listClass(sList) {
    sList.forEach((element, index) => {
        // console.log(element.classList);
        suiteName = element.outerText.split(' ')[0];
        console.log(suiteName, element.classList, index);

        if (element.classList.contains('swiper-slide-active')) {
            // element.classList.contains('swiper-slide-active')
            console.log(suiteName, 'Zero-Index');
            prevSuite.classList.add('slide-prev');
        } else {
            prevSuite.classList.remove('slide-prev');
        }
    });
    console.log(' ');
}

// listClass(sList);
// prevSuite.classList.add('swiper-slide-prev');
// console.log(prevSuite);

// console.log({ suiteList });
// console.log({ lastValIndex });
// console.log(prevSuite);

// console.log(suiteName);

// if (suiteName === 'Family') {
//     console.log("At Start")
// }

function getSuite(val) {
    if (val === "prev") {
        if (document.getElementsByClassName("swiper-slide-prev") != null) {
            // console.log("If One");
            // currSuite = document.getElementsByClassName("swiper-slide-prev");
            // console.log({ currSuite });
            listClass(sList)
        } else {
            // console.log("If Two");
            // currSuite = document.getElementsByClassName("swiper-slide-active");
            listClass(sList);
        }
    } else {
        // console.log("If Three");
        // currSuite = document.getElementsByClassName("swiper-slide-next");
        listClass(sList);
    }
    // let temp = currSuite[0].outerText.split(' ');
    // let suiteName = temp[0];
    // console.log(suiteName);
}




