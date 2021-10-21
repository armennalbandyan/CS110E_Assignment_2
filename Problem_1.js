const baseTriangle = 5
const heightTriangle = 10 
const widthRactangle = 5
const heightRectangle = 5
const areaTriangle = (baseTriangle*heightTriangle)/2
const areaRectangle = (widthRactangle*heightRectangle)
if (areaTriangle > areaRectangle){
    console.log("The triangle has a bigger area")
} else if (areaTriangle == areaRectangle){
    console.log("They are equal")
} else {
    console.log("The rectangle has a bigger area")
}