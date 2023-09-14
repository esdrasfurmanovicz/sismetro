/* var a = []
a[2] = 120
a[7] = 0
console.log(a)

var fibonacci = []
fibonacci [0] = 1
fibonacci [1] = 1

var c = 2
while (c < 100){
    fibonacci[c] = fibonacci[c-1] + fibonacci[c-2]
    c++
}
console.log(fibonacci) 
var fibonacci = []
fibonacci [0] = 1
fibonacci [1] = 1
for(var c = 2; c < 100; c++){
    fibonacci[c] = fibonacci[c-1] + fibonacci[c-2]
    
}
console.log(fibonacci)*/
var fibonacci3 = []
fibonacci3[0] = 1;
fibonacci3[1] = 1;


while (fibonacci3.length < 100){
    fibonacci3[fibonacci3.length] = fibonacci3[fibonacci3.length - 1] + fibonacci3[fibonacci3.length - 2]
}
console.log(fibonacci3)
