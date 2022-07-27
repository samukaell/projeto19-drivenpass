import { faker } from "@faker-js/faker";
import supertest from "supertest";

import app from "./../src/app.js";
import { prisma } from "./../src/database.js";
//Factory
import { deleteAllData } from "./factories/scenarioFactory.js"
import userFactory from "./factories/userFactory.js";

beforeEach(async() => {
    await deleteAllData(); // deleta tudo
  });

const agent = supertest(app);

describe("user tests", () => {
    it("should create user", async () => {
      const user = {
        email: faker.internet.email(),
        password: faker.internet.password(),
      };
  
      await agent.post("/signup").send(user);
  
      // efeitos colaterais
      const userCreated = await prisma.user.findFirst({
        where: {email: user.email}
      });
      expect(userCreated).not.toBeNull();
    });
  
    it("should login user", async () => {
      const user = {
        email: faker.internet.email(),
        password: faker.internet.password(),
      };
  
      userFactory(user);
      const response = await agent.post("/signin").send(user);
      const { token } = response.body;
      expect(token).not.toBeNull();
    });
  });
  
  afterAll(async () => {
    await prisma.$disconnect();
  });