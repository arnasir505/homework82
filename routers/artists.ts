import express from 'express';
import Artist from '../models/Artist';
import { imagesUpload } from '../multer';

const artistsRouter = express.Router();

artistsRouter.get('/', async (req, res, next) => {
  try {
    const artists = await Artist.find();
    return res.send(artists);
  } catch (error) {
    next(error)
  }
});

artistsRouter.post(
  '/',
  imagesUpload.single('image'),
  async (req, res, next) => {
    try {
      if (!req.body.name) {
        return res.status(422).send({ error: 'Artist name is required!' });
      }

      const artistData = {
        name: req.body.name,
        information: req.body.information || null,
        img: req.file ? req.file.filename : null,
      };

      const artist = new Artist(artistData);
      await artist.save();

      return res.send(artist);
    } catch (error) {
      next(error);
    }
  }
);

export default artistsRouter;
