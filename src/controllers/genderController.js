import { prisma } from "../helpers/utils.js"


export const getAllGender = async (req, rep) => {
    try{
        const genders = await prisma.gender.findMany();

        return genders;
    } catch (error) {
        console.error("genders", error);
        rep.status(400).send("Não foi possível consultar o gênero.")
    }
};

export const createGender = async (req, rep) => {
    try {
        const {name} = req.body;
        const genders = await prisma.gender.create({data: {name}});
        rep.status(201).send(genders);
    } catch (error) {
        console.error("genders", error);
        rep.status(400).send("Não foi possível cadastrar o gênero")
    }
};