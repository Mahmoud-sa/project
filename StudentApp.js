//  const yargs=require('yargs')

 const fs= require('fs')
 

// const { Yargs } = require("yargs/build")



// //ADD
// yargs.command(
//     {
//         command:'add',
//         describe:'add new student',
//         handler:()=>{
//             console.log('Add new student')
//         }
//     }
// )


// yargs.command(
//     {
//         command:'Delete',
//         describe:'add new student',
//         builder:{

//             name:{
//                 describe:'This is my describtion' ,
//                 type:'string',
//                 demandOption:true
//             },
//             body:
//             {
//                 describe:'this is the body',
//                 type:'string',
//                 demandOption:true
//             }

//         },
//         handler:()=>{
//             console.log('Delete new student')
//         }
//     }
// )


// console.log(yargs.argv)

// const car={
//     name:'BmW',
//     color:'black'

// }


// convert object to jason

// const carObject= JSON.parse()
// console.log(carObject)

const addStudent =(sname,markes,id,total)=>
{
    const data=loadnotes()
    const duplicateid=data.find((element)=>{
        return element.id===id
    })
    if(!duplicateid){
        var total=0
        markes.forEach(arg => {
        total += arg;
     });
    {
        data.push({
                sname,
                markes,
                id,
                total,
    })
    savenotes(notes)
    console.log('saved successfully')
}}
else {
    console.log('error')
}
}
    

    const deleteStudent=(id)=>{
        const data=loadData()
        const dataToKeep=data.filter((stu)=>{
            return stu.id!==id
        })
        if(data.length!==dataToKeep.length){
            console.log('this student is removed')
            saveData(dataToKeep)
            
        }
        else{
            console.log('this id is not found')
        }
    }

const loadnotes = () =>
{
    try{
    const newwdata= fs.readFileSync('note.jason').toString()

    return JSON.parse()
}
catch(e)  // i dont want to make a big error like your file is not created
{
    return[]

}
}
//read-data function
const studentDetails=(id)=>{
    const data=loadData() 
    const student=data.find((el)=>{
        return el.id===id
    })
    if (student){
        console.log("the name is => ",student.sname)
        console.log("the sum of his degree is => ",student.total)

    }
    else{
        console.log('no student is found with thid id')
    }
}
//list-data function
const listOfStudents=()=>{
    const data=loadData()
    data.forEach((stu)=>{
        console.log('sname=> ',stu.sname)
        
    })
}


const savenotes= (notes)=>
{
 const saveData=JSON.stringify();
 fs.writeFileSync('notes.json',saveData)
}

module.exports=
{
    addStudent,
    deleteStudent,
    studentDetails,
    listOfStudents,
}

