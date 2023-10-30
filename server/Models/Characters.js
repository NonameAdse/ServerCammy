import mongoose from "mongoose";

const Schema = mongoose.Schema;

// const dataComboSchema = new Schema({
//   special: [
//     { comboName: String, img: String, energy: String, arrows: [String] },
//   ],
//   super: [{ comboName: String, img: String, energy: String, arrows: [String] }],
//   unique: [
//     { comboName: String, img: String, energy: String, arrows: [String] },
//   ],
//   throws: [
//     { comboName: String, img: String, energy: String, arrows: [String] },
//   ],
//   common: [
//     { comboName: String, img: String, energy: String, arrows: [String] },
//   ],
// });

const stfSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  zoom: Number,
  main: Number,
  img: String,
  imgActive: String,
  imgNotActive: String,
  describe: String,
  hates: String,
  likes: String,
  height: String,
  weight: String,
  ///////////////////////////////////
  // combo: String,
  img1: String,
  img2: String,
  out1: [String],
  out2: [String],
  ////////////////////////////
  video: [{ comboName: String, video: String }],
  //////////////////
  special: [
    { comboName: String, img: String, energy: String, arrows: [String] },
  ],
  super: [{ comboName: String, img: String, energy: String, arrows: [String] }],
  unique: [
    { comboName: String, img: String, energy: String, arrows: [String] },
  ],
  throws: [
    { comboName: String, img: String, energy: String, arrows: [String] },
  ],
  common: [
    { comboName: String, img: String, energy: String, arrows: [String] },
  ],
});

export const Characters = mongoose.model("characters", stfSchema);

const CardSchema = new Schema({
  name: String,
  imgActive: String,
  imgNotActive: String,
});

export const Cards = mongoose.model("cards", CardSchema);
