const yargs = require("yargs")
const fs=require("./StudentApp")

yargs.command(
    {
        command:'add',
        describe:'add new student',
        builder:
        {
            sname:{
            describe:" student name",
            type:'string',
            demandOption:true

        },
        id:{
            describe:"student id",
            type:'number',
            demandOption:true

        },
        total:{
            describe:"this is the sum of student degrees",
            type:'number',
        markes:{
            describe:"student markes",
            type:"array",

              }

        },
        handler:()=>{
            console.log('Add new student')
            StudentApp.addStudent(yargs.argv.sname,yargs.argv.markes,yargs.argv.id)

        }
    }})


yargs.command({
    command:'delete',
    describe:"delete note",
    builder:{
        id:{
            describe:"this is the unique student id",
            type:'number',
            demandOption:true

        },

    },
    handler:()=>{
        student.deleteStudent(yargs.argv.id)
        // totalDegrees

    }
})
//read command
yargs.command({
    command:'read',
    describe:"read student details",
    builder:{
        id:{
            describe:"this is the unique student id",
            type:'number',
            demandOption:true

        },

    },
    handler:()=>{
        student.studentDetails(yargs.argv.id,yargs.argv.total)
        // totalDegrees

    }
})
//list command
yargs.command({
    command:'list',
    describe:"list of students",
    handler:()=>{
        student.listOfStudents()
        // totalDegrees

    }
})
// totalDegrees()
yargs.parse()