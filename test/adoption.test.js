import supertest from "supertest";
import { expect } from "chai";

const requester = supertest("http://localhost:8080");

describe("Testing de la App Web Adoptme", () => {
  describe("Testing de Adoptions", () => {

    it("Debe obtener todas las adopciones", async () => {
      const res = await requester.get("/api/adoptions");
      expect(res.status).to.be.equal(200);
      expect(res.body).to.have.property("payload");
      expect(res.body.status).to.equal("success");
      expect(res.body.payload).to.be.an("array");
    });

    it("Debe obtener una adopción existente por ID", async () => {
      const existingAdoptionId = "68388b8c3542ee4951ade99f"; 
      const res = await requester.get(`/api/adoptions/${existingAdoptionId}`);
      expect(res.status).to.be.equal(200);
      expect(res.body).to.have.property("payload");
      expect(res.body.status).to.equal("success");
      expect(res.body.payload._id).to.equal(existingAdoptionId);
    });

    it("Debe devolver 404 si la adopción no existe", async () => {
      const fakeId = "68128b03ae05b9426dc84555";
      const res = await requester.get(`/api/adoptions/${fakeId}`);
      expect(res.status).to.be.equal(404);
      expect(res.body).to.have.property("error");
      expect(res.body.status).to.equal("error");
      expect(res.body.error).to.include("Adoption not found");
    });

    it("Debe crear una adopción correctamente", async () => {
      const userId = "68128b04ae05b9426dc845fa";
      const petId = "68128b04ae05b9426dc8460a"; 

      const res = await requester.post(`/api/adoptions/${userId}/${petId}`);
      expect(res.status).to.be.equal(201);
      expect(res.body).to.have.property("message");
      expect(res.body.status).to.equal("success");
      expect(res.body.message).to.include("Pet adopted");
    });

    it("Debe devolver error si el usuario no existe", async () => {
      const fakeUserId = "68128b04ae05b9426dc84602";
      const petId = "68128b04ae05b9426dc84606";

      const res = await requester.post(`/api/adoptions/${fakeUserId}/${petId}`);
      expect(res.status).to.be.equal(404);
      expect(res.body).to.have.property("error");
      expect(res.body.status).to.equal("error");
      expect(res.body.error).to.include("User not found");
    });

    it("Debe devolver error si la mascota no existe", async () => {
      const userId = "68128b04ae05b9426dc845fb";
      const fakePetId = "64e49a3f8d0a4c1f321e1000";

      const res = await requester.post(`/api/adoptions/${userId}/${fakePetId}`);
      expect(res.status).to.be.equal(404);
      expect(res.body).to.have.property("error");
      expect(res.body.status).to.equal("error");
      expect(res.body.error).to.include("Pet not found");
    });

    it("Debe devolver error si la mascota ya fue adoptada", async () => {
      const userId = "68128b03ae05b9426dc845f7";
      const alreadyAdoptedPetId = "68128b04ae05b9426dc84602";

      const res = await requester.post(`/api/adoptions/${userId}/${alreadyAdoptedPetId}`);
      expect(res.status).to.be.equal(400);
      expect(res.body).to.have.property("error");
      expect(res.body.status).to.equal("error");
      expect(res.body.error).to.include("Pet is already adopted");
    });

  });
});