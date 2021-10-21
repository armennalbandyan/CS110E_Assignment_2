console.log("Solve quadratic equation:")
const a = 1
const b = 6
const c = 9
if (a == 0){
    console.log("a is 0 =>")
    x = (-c)/b
    console.log("=> x =" + x)
} else{
    d = b**2 - 4*a*c
    if (d == 0){
        x = (-b)/2*a
        console.log("x1 = x2 =" + x)
    }
    else if (d < 0){
        console.log("There are no real roots!")
    }
    else{
        x1 = ((-b) + Math.sqrt(d))/2*a
        // instade of Math.sqrt() also we can use **(1/2)
        x2 = ((-b) - Math.sqrt(d))/2*a
        console.log("x1 =" + x1)
        console.log("x2 =" + x2)
    }
}