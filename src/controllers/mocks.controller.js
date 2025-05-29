import MockingService from "../services/mocking.js";
import User from "../dao/models/User.js";
import Pet from "../dao/models/Pet.js";


const createPets = async (req, res) => {
    const numPets = parseInt(req.query.num) || 50; 
    try {
        const pets = await MockingService.generatePetsMocking(numPets);
        res.json(pets);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createUsers = async (req, res) => {
    const numUsers = parseInt(req.query.num) || 50;  
    try {
        const users = await MockingService.generateUsersMocking(numUsers);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const generateData = async (req, res) => {
    const { users, pets } = req.body;  
    try {
        const generatedUsers = await MockingService.generateUsersMocking(users);
        const generatedPets = await MockingService.generatePetsMocking(pets);

        await User.insertMany(generatedUsers);
        await Pet.insertMany(generatedPets);

        res.status(200).json({ message: "Data generated and inserted successfully." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export default {
    createPets,
    createUsers,
    generateData,
};
