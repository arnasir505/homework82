import { Schema, model } from 'mongoose';

const ArtistSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  information: String,
  img: String || null,
});

const Artist = model('Artist', ArtistSchema);

export default Artist;
