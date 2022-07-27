import { Tests} from "@prisma/client";
import * as testRepository from "../repositories/testRepository.js"

export type CreateTestData = Omit<Tests, "id">;

export async function addTests(test:CreateTestData) {
    //OK, basta cria
    await createTest(test);
    return "Ok, test added to the DB!"
}

export async function findAll() {   
    //Resultado final
    const tests = [];
    //Buscar os tests filtrando por disciplines
    const disciplines = await findDisciplinesAll();
    //Buscar todas as categorias de provas
    const categories = await findCategoriesAll();
    const promiseList = disciplines.map(async discipline =>{
        //buscar os tests de acordo com esta diciplina
        const testsAll = await findTests(discipline.TeacherDisciplines[0].id);    
        
        const test = {
            name: discipline.name,
            tests: testsAll
        }
        tests.push(test);
        //return tests;
    });

    await Promise.all(promiseList).then(results => {})
    return tests;
}
//_________________________________________//
//Auxiliar 

async function createTest(test: CreateTestData) {
    return await testRepository.createTest(test)
}
async function findDisciplinesAll() {
    return await testRepository.returnDisciplines();
}
async function findTests(id: number) {
    return await testRepository.returnTest(id);
}
async function findCategoriesAll() {
    return await testRepository.returnCategoties();
}