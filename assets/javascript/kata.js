
//cite Mario Mendez - Hicham Ell

const parentElement= document.querySelector('.katas-list')


//kata1
const kata1heading=document.createElement('h3')
const kata1Results=document.createElement('p')
parentElement.append(kata1heading)

kata1heading.append('KATA 1')

for (let counter1=1; counter1 <=20; counter1+=1) {
    kata1Results.append(counter1)
}
kata1heading.append(kata1Results)

//kata2

const kata2heading=document.createElement('h3')
const kata2Results=document.createElement('p')
parentElement.append(kata2heading)

kata2heading.append('KATA 2')
for (let counter2=2; counter2 <=20; counter2+=2){
    kata2Results.append(counter2)
}
kata2heading.append(kata2Results)

//kata3

const kata3heading=document.createElement('h3')
const kata3Results=document.createElement('p')
parentElement.append(kata3heading)

kata3heading.append('KATA 3')
for (let counter3=1; counter3 <=19; counter3+=2){
    kata3Results.append(counter3 + ',')
}
kata3heading.append(kata3Results)

//kata4

const kata4heading=document.createElement('h3')
const kata4Results=document.createElement('p')
parentElement.append(kata4heading)
 
kata4heading.append('KATA 4')
for (let counter4=5; counter4 <=100; counter4+=5){
    kata4Results.append(counter4 + ',')
}
kata4heading.append(kata4Results)

//kata5

const kata5heading=document.createElement('h3')
const kata5Results=document.createElement('p')
parentElement.append(kata5heading)

kata5heading.append('KATA 5')
for (let counter5=1; counter5<=100; counter5+=1) {
    const counter5IsSquared = Number.isInteger(Math.sqrt(counter5))
    if (counter5IsSquared){
        console.log(counter5);
        kata5Results.append(counter5 + ',')
    }}
    kata5heading.append(kata5Results)

//kata6

const kata6heading=document.createElement('h3')
const kata6Results=document.createElement('p')
parentElement.append(kata6heading)

kata6heading.append('KATA 6')
for (let counter6=20; counter6>=1; counter6-=1){
    kata6Results.append(counter6 + ',')
}
kata6heading.append(kata6Results)

//kata7

const kata7heading=document.createElement('h3')
const kata7Results=document.createElement('p')
parentElement.append(kata7heading)

kata7heading.append('KATA 7')
for (let counter7=20; counter7>=2; counter7-=2){
    kata7Results.append(counter7 + ',')
}
kata7heading.append(kata7Results)

//kata8

const kata8heading=document.createElement('h3')
const kata8Results=document.createElement('p')
parentElement.append(kata8heading)

kata8heading.append('KATA 8')
for (let counter8=19; counter8>=3; counter8-=2){
        kata8Results.append(counter8 + ',')
}
kata8heading.append(kata8Results)

//kata9

const kata9heading=document.createElement('h3')
const kata9Results=document.createElement('p')
parentElement.append(kata9heading)

kata9heading.append('KATA 9')
for (let counter9=100; counter9>=5; counter9-=5){
        kata9Results.append(counter9 + ',')
}
kata9heading.append(kata9Results)

//kata10

const kata10heading=document.createElement('h3')
const kata10Results=document.createElement('p')
parentElement.append(kata10heading)

kata10heading.append('KATA 10')
for (let counter10=100; counter10>=1; counter10-=1) {
    const counter10IsSquared = Number.isInteger(Math.sqrt(counter10))
    if (counter10IsSquared){
        console.log(counter10);
        kata10Results.append(counter10 + ',')
    }}
    kata10heading.append(kata10Results)

//kata11
const kata11heading=document.createElement('h3')
const kata11Results=document.createElement('p')
parentElement.append(kata11heading)

kata11heading.append('KATA 11')
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];
kata11Results.append(sampleArray)
kata11heading.append(kata11Results)

//kata12
const kata12heading=document.createElement('h3')
const kata12Results=document.createElement('p')
parentElement.append(kata12heading)

kata12heading.append('KATA 12')

for(let counter12=0; counter12<sampleArray.length; counter12 +=1){
    if(sampleArray[counter12]%2===0){
        kata12Results.append(sampleArray[counter12] + ',')
    }
}
  kata12heading.append(kata12Results)

//kata13
const kata13heading=document.createElement('h3')
const kata13Results=document.createElement('p')
parentElement.append(kata13heading)

kata13heading.append('KATA 13')

for(let counter13=0; counter13<sampleArray.length; counter13 +=1){
    if(sampleArray[counter13]%2!==0){
        kata13Results.append(sampleArray[counter13] + ',')
    }
}
  kata13heading.append(kata13Results)

//kata14
const kata14heading=document.createElement('h3')
const kata14Results=document.createElement('p')
parentElement.append(kata14heading)

kata14heading.append('KATA 14')
for ( counter14 =0; counter14<sampleArray.length; counter14 +=1){
    kata14Results.append(sampleArray[counter14]*sampleArray[counter14] + ',')

}
parentElement.append(kata14Results)

//kata15

const kata15heading=document.createElement('h3')
const kata15Results=document.createElement('p')
parentElement.append(kata15heading)
let sum=0
kata15heading.append('KATA 15')
for(let counter15 =1; counter15<=20; counter15 +=1){
     sum= sum + counter15
    kata15Results.append(sum + ',')
}
    parentElement.append(kata15Results)

//kata16

const kata16heading=document.createElement('h3')
const kata16Results=document.createElement('p')
parentElement.append(kata16heading)

kata16heading.append('KATA 16')
let sumarray= 0
for(let counter16=0; counter16<sampleArray.length; counter16 +=1){
     sumarray=sumarray + sampleArray[counter16]
    
}
kata16Results.append(sumarray +',')    
parentElement.append(kata16Results)

//kata17

const kata17heading=document.createElement('h3')
const kata17Results=document.createElement('p')
parentElement.append(kata17heading)

kata17heading.append('KATA 17')

let min = Math.min(...sampleArray)
kata17Results.append(min)
parentElement.append(kata17Results)

//kata18
const kata18heading=document.createElement('h3')
const kata18Results=document.createElement('p')
parentElement.append(kata18heading)

kata18heading.append('KATA 18')

let max = Math.max(...sampleArray)
kata18Results.append(max)
parentElement.append(kata18Results)

//finally




