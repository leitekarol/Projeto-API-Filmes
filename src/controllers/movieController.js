import { prisma } from "../helpers/utils.js"

export const getAllMovies= async (req, rep) => {
    try{
        const movie = await prisma.movie.findMany();
        return movie;
    } catch (error) {
        console.error("movie", error);
        rep.status(400).send("Não foi possível consultar o filme.")
    }
};
export const getUniqueMovie = async (req, rep) => {
    const {id} = req.params;
    try{
        const movie = await prisma.movie.findUnique({
            where:{ id:+(id)}
        });
        return movie;
    } catch (error) {
        console.error("movie", error);
        rep.status(400).send("Não foi possível consultar o filme.")
    }
};

export const createMovies = async (req, rep) => {
    try {
        const {id} = req.user;
       console.log(req.user);
        const {title, description, gender_id} = req.body;
        const movie = await prisma.movie.create({
            data: {
                title,
                description,
                gender: {connect: {id: Number (gender_id)}},
                    user: {connect:{ id: Number (id) }},
        }});
        rep.status(201).send(movie);
    } catch (error) {
        console.error("movie", error);
        rep.status(400).send("Não foi possível cadastrar o filme")
    }
};

export const updateMovies = async (req, rep) => {
    try {
        const {id} = req.user;
       console.log(req.user);
        const {title, description, gender_id} = req.body;
        const movie = await prisma.movie.update({
            where:{
                id: Number(id)
            },
            data: {
                title,
                description,
                gender: {connect: {id: Number (gender_id)}},
                    user: {connect:{ id: Number (id) }},
        }});
        rep.status(201).send(movie);
    } catch (error) {
        console.error("movie", error);
        rep.status(400).send("Não foi possível alterar a informação do filme")
    }
};

export const deleteMovies = async (req, rep) => {
    try {
        const {id} = req.body;
        const movie = await prisma.movie.delete({
            where:{
                id: Number(id)
            },
           });
        rep.status(201).send(movie);
    } catch (error) {
        console.error("movie", error);
        rep.status(400).send("Não foi possível deletar a informação do filme")
    }
};