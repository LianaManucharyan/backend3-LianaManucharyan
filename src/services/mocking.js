import { faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";  

class MockingService {
    static async generatePetsMocking(quantity) {
        const pets = [];
        for (let i = 0; i < quantity; i++) {
            pets.push({
                name: faker.animal.dog(),
                specie: faker.animal.type(),
                adopted: false,
                birthDate: faker.date.past(),
                image: "https://via.placeholder.com/150"
            });
        }
        return pets;
    }

    static async generateUsersMocking(quantity) {
        const users = [];
        for (let i = 0; i < quantity; i++) {
            const passwordHash = await createHash("coder123");
            const role = Math.random() > 0.5 ? "user" : "admin";
            const first_name = faker.person.firstName();
            const last_name = faker.person.lastName();
            const email = faker.internet.email({ firstName: first_name, lastName: last_name });
    
            users.push({
                first_name,
                last_name,
                email,
                password: passwordHash,
                role,
                pets: []
            });
        }
        return users;
    }    
}

export default MockingService;