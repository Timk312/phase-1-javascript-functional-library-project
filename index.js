array=["tim","evie","kelsey"]
function hello(x){
    return "hello "+x;
}
object={daddy:"tim",child:"evie",mommy:"kelsey"}

function myEach(collection,callback){
if (Array.isArray(collection)){
    for(let i=0;i<collection.length;i++){
     callback(collection[i])
    }
    return collection
}
else {
  const temp= Object.values(collection)
   for(let i=0;i<temp.length;i++){
   callback(temp[i])
 }
 return collection
}
}

function myMap(collection,callback){
    if (Array.isArray(collection)){
    const newArray=collection.map(x=>callback(x))
    return newArray
    }
    else {
      const temp= Object.values(collection)
    const newArray=temp.map(x=>callback(x))
    return newArray
    }
    }

    const unmodifiedTestArr = [1, 2, 3, 4]
    const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}
    const testArr = unmodifiedTestArr.slice() // arr is [1, 2, 3, 4]
    const testObj = Object.assign({}, unmodifiedTestObj) // obj is {one: 1, two: 2, three: 3, four: 4}
    const callback = (acc, val, collection) => (acc + (val * 3))

function myReduce(collection,callback,acc){
    
    if (Array.isArray(collection)){
    console.log(collection)
    if(acc==null){
    console.log("test"+collection[0])
    acc=collection[0]-3
    const output=collection.reduce((start,item)=>{
        return callback(start,item,collection)
        },acc)
        return output
    }
    else{
const output=collection.reduce((start,item)=>{
return callback(start,item,collection)
},acc)
return output
}
}
    else {
const temp= Object.values(collection)
   console.log("temp"+temp[0])
   if(acc==null){
    console.log(temp[0])
    acc=temp[0]-3
    const output=temp.reduce((start,item)=>{
        return callback(start,item,temp)
        },acc)
        return output
    }
    else{
const output=temp.reduce((start,item)=>{
return callback(start,item,temp)
},acc)
return output
    }
}
}

const reduceSansAcc = myReduce(testArr, callback)
console.log((reduceSansAcc))
const reduceWithAcc = myReduce(testArr, callback, 10)
      console.log((reduceWithAcc))

const objResult = myReduce(testObj, callback)
      console.log(objResult);





function myFind(collection,predicate){
    if (Array.isArray(collection)){
        const found = collection.find(x=>predicate(x))
        return found
        }
        else {
        const temp= Object.values(collection)
        const found = temp.find(x=>predicate(x))
        return found
        }
        }

function myFilter(collection,predicate){
    if (Array.isArray(collection)){
        const result=collection.filter(x=>predicate(x))
        return result
        }
        else {
        const temp= Object.values(collection)
        const result=temp.filter(x=>predicate(x))
        return result
        }   
}

function mySize(collection){
    if (Array.isArray(collection)){
       return collection.length
        }
        else {
        const temp= Object.values(collection)
        return temp.length
        }   
}

function myFirst(array,n){
const temp=[]
for(let i=0;i<n;i++){
temp.push(array[i])
}
if(n>0){
return temp
}
else return array[0]
}

nums=[1,2,3,4]


function myLast(array,n){
if(n>0){
    return array.slice(1)
}
else{
let x= array.slice(-1)
return x[0]
}
}

function myKeys(object){
return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
    }