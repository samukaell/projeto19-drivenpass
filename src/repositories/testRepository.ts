import {prisma}  from "../database.js"
import { CreateTestData } from "../services/testsService.js"

async function createTest(test:CreateTestData) {
    await prisma.tests.create({
        data:test,
    })
}
async function returnDisciplines() {
    return await prisma.disciplines.findMany({
        include:{
            TeacherDisciplines:true,
            terms:true
        },
        orderBy:{
            terms:{
                number:'asc'
            }
        }
        
    });
}
async function findTeacherDisciple(id:number) {
    return await prisma.teacherDisciplines.findMany({
        where:{
            id:{
                equals:id
        }},
        include:{
            Tests:true
        }        
    });
}
async function returnTest(id:number) {
    return await prisma.tests.findMany({
        where:{
            teacherDisciplineId:{
                equals:id,
            }
        },   
    })
}
async function returnCategoties() {
    return await prisma.categories.findMany();
}



export{
    createTest,
    returnDisciplines,
    findTeacherDisciple,
    returnTest,
    returnCategoties
}