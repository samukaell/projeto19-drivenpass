import { Tests} from "@prisma/client";
import * as testRepository from "../repositories/testRepository.js"

export type CreateTestData = Omit<Tests, "id">;

export async function addTests(test:CreateTestData) {
    //OK, basta cria
    await createTest(test);
    return "Ok, test added to the DB!"
}

//_________________________________________//
//Auxiliar 

async function createTest(test: CreateTestData) {
    return await testRepository.createTest(test)
}