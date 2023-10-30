import { Cards, Characters } from "../Models/Characters.js";

const handleError = (res, error) => {
  res.status(500).json({ error });
};

export const getAllCards = (req, res) => {
  Cards.find()
    .then((char) => {
      res.status(200).json(char);
    })
    .catch(() => handleError(res, "not find Cards"));
};

export const getCharacter = (req, res) => {
  Characters.findOne({ name: req.params.name })
    .then((char) => {
      res.status(200).json(char);
    })
    .catch(() => handleError(res, "not find"));
};
// export const getMangaByName = (req, res) => {
//   Manka.find({ name: req.params.name })
//     .then((manga) => {
//       res.status(200).json(manga);
//     })
//     .catch(() => handleError(res, "not findById"));
// };

// export const getMangaAll = async (req, res) => {
//   await Manka.find()
//     .all("genres", req.body.data)
//     .then((mangas) => {
//       res.status(200).json(mangas);
//     })
//     .catch(() => handleError(res, "not findAll"));
// };

// export const getByInput = async (req, res) => {
//   console.log(req.body.data);
//   await Manka.aggregate([
//     { $match: { name: { $regex: req.body.data, $options: "i" } } },
//   ])
//     .then((filtmanga) => {
//       res.status(200).json(filtmanga);
//     })
//     .catch(() => handleError(res, "cant filter by name"));
// };
