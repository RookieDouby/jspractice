//数组对象去重
let students = [
    {id: 1, name: 'sam'},
    {id: 2, name: 'Jack'},
    {id: 3, name: 'Nick'},
    {id: 2, name: 'Conjee'},
]

function unique(arr){
    const obj = {};
    return arr.reduce((cur, next) => {
        obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
        return cur
    }, [])
}

const newArr =  unique(students)
console.log(newArr)
