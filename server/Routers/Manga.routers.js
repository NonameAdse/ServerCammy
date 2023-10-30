import express from "express";
import bodyParser from "body-parser";
import * as charactersCntr from "../Controllers/characters-controller.js";

export const router = express.Router();
const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get("/cards", charactersCntr.getAllCards);

router.get("/characters/:name", charactersCntr.getCharacter);

// router.post("/mankas", jsonParser, charactersCntr.getMangaAll);

// router.post("/mankasInput", jsonParser, charactersCntr.getByInput);

// router.get("/manka/:id", MangaCrt.getMangaById);
