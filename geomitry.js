/* function getTriangleArea() {
// get the base in number 
    const triangelBase = document.getElementById('triangle-base');
    const triangelBaseString = triangelBase.value;
    const triangelBaseNumber = parseFloat(triangelBaseString);
    triangelBase.value = '';
    
// get the height in number 
    const triangelHeight = document.getElementById('triangle-Height');
    const triangelHeightString = triangelHeight.value;
    const triangelHeightNumber = parseFloat(triangelHeightString);
    triangelHeight.value = '';
   
// calculate the area 
    const TotalArea = 0.5 * triangelBaseNumber * triangelHeightNumber;
// set the result 
    const areaFeild = document.getElementById('area-total');
    areaFeild.innerText = TotalArea;
}

function getRactangleArea() {
// get the width 
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthString = rectangleWidth.value;
    const rectangleWidthNumber = parseFloat(rectangleWidthString);
// get the length  
 const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthString = rectangleLength.value;
    const rectangleLengthNumber = parseFloat(rectangleLengthString);

// calclate the area 
    const rectArea = rectangleWidthNumber * rectangleLengthNumber;
// set the value    
    const areaFeild = document.getElementById('rect-area');
    areaFeild.innerText = rectArea;
}
 */

// get the input value in number: reusable function 
function getInputValue(inputId) {
const inputValue = document.getElementById(inputId); 
const inputValueString = inputValue.value;
const inputValueNumber = parseFloat(inputValueString);
    inputValue.value = '';
    return inputValueNumber;
}
// get the calculated area value and set it : reusable function
function setAreaValue(elementId, area) {
const element = document.getElementById(elementId);
element.innerText = area;
}

// Triangel calculation
function getTriangelArea(){

    const triBase=getInputValue('triangle-base');
    const triHeight = getInputValue('triangle-Height');
    if (isNaN(triBase) || isNaN(triHeight)) {
        alert('Please enter a number');
        return;
    }
    const triArea = 0.5 * triBase * triHeight;
    setAreaValue('area-total', triArea);
}
// Rectangle calculation 
function getRactangleArea() {
    const rectWidth=getInputValue('rectangle-width');
    const rectLength = getInputValue('rectangle-length');
    if (isNaN(rectWidth) || isNaN(rectLength)) {
        alert('Please enter a number');
        return;
    }
    const rectArea =  rectWidth * rectLength;
    setAreaValue('rect-area', rectArea);
} 
// Rombus Calculation 
function getRhombusArea() {
    const rhombusWidth=getInputValue('Rhombus-height');
    const rhombusLength = getInputValue('Rhombus-width');
    if (isNaN(rhombusWidth) || isNaN(rhombusLength)) {
        alert('Please enter a number');
        return;
    }
    const rhombusArea =0.5* rhombusWidth *rhombusLength;
    setAreaValue('Rhombus-area',rhombusArea);
}

// Pentagon calculation 
function getPentagonArea() {
    const PentagonWidth=getInputValue('Pentagon-base');
    const PentagonLength = getInputValue('Pentagon-height');
    if (isNaN(PentagonWidth) || isNaN(PentagonLength)) {
        alert('Please enter a number');
        return;
    }
    const PentagonArea =0.5* PentagonWidth *PentagonLength;
    setAreaValue('Pentagon-area',PentagonArea);
    
}



// Parallelogram calculation 
function getParaArea() {
// get the base value 
const paraBase = getInputValue('para-base');
// get the height value 
const paraHeight=getInputValue('para-height');
// validation part 
if (isNaN(paraBase) || isNaN(paraHeight)) {
alert('Please enter a number');
return;
}
// get the calculated area Value 
    const paraAreaValue = paraBase * paraHeight;
    setAreaValue('para-area', paraAreaValue);
    
}

// Ellipse Claculation 
function getEllipseArea() {
const ellipseMajor=getInputValue('ellipse-major');
const ellipseMinor=getInputValue('ellipse-minor');
if (isNaN(ellipseMajor) || isNaN(ellipseMinor)) {
alert('Please enter a number');
return;
}
const ellipseArea = 3.14 * ellipseMajor * ellipseMinor;
const finalArea = ellipseArea.toFixed(2);
setAreaValue('ellipse-area',finalArea);

}

// calculation entry 
function (calculateId, area) {
    
}