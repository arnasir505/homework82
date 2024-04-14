import { Schema, model } from 'mongoose';

const AlbumSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    img: String || null,
  },
  {
    versionKey: false,
  }
);

const Album = model('Album', AlbumSchema);

export default Album;
