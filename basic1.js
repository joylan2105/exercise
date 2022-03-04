console.log("Hello World")

let c = "Joylan Mesina"

console.log(typeof(c))

let required = true

console.log(typeof(required))

let a = 1
let b = 3 

var sum = a+b 

console.log(sum)

const flag = true

if(!flag)
{
    console.log ("condition is satisfied")
}
else 
{
    console.log ("condition is not satisfied")
}
let i=0
while (i<10)
{
i++
console.log(i)
}
console.log("************************************8")
var marks = Array(6)
var marks = new Array (20, 40, 35, 12, 37, 100)
var marks = [20, 40, 35, 12, 37, 100]
subMarks = marks.slice(2,5)
console.log(subMarks)

console.log(marks[2])
console.log(marks)
console.log(marks.length)
marks.push(65)
console.log(marks)
marks.pop()
marks.unshift(12)
console.log(marks)

console.log(marks.indexOf(100))
console.log(marks.includes(120))
console.log("************************************")
for (let i=0 ; i<marks.length; i++)
{
    console.log(marks[i])

}
var sum = 0
for (let i=0 ; i<marks.length; i++)
{
    sum = sum + marks[i]
    
}
console.log("sum:"+ sum)
//reduce filter map
let total = marks.reduce((sum, mark)=>sum+mark,0) //sums array
console.log(total)


console.log("++++++++++++++++++++")
var score = [12,13,14,16]
//print only even numbers 
var evenScore = []
for (let i=0 ; i<score.length ; i++)
{
    if(score[i]%2==0)
    console.log (score[i])
    evenScore.push(score[i])
}
let newFilterEvenScore = score.filter(score=>score%2==0)   //show even number
console.log(newFilterEvenScore)
// map , multiply each value with 3 
let mappedArray = newFilterEvenScore.map(score=>score*3)
console.log(mappedArray)
let totalval = mappedArray.reduce((sum, val)=>sum+val, 0) //sums up array
console.log(totalval)
let sumvalue = score.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=> sum+val,0)
console.log(sumvalue)


let fruits = ["banana","mango" , "pomegrante", "apple"]
fruits.sort()
console.log(fruits)
console.log(fruits.reverse())

var score1 = [12,003,16,14,19]


console.log(score1.sort((a,b)=>a-b))
console.log(score1.sort((a,b)=>b-a))


cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")