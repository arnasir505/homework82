import express from 'express';
import Album from '../models/Album';
import { imagesUpload } from '../multer';

const albumsRouter = express.Router();

albumsRouter.get('/', async (req, res, next) => {
  try {
    const artistId = req.query.artist;
    if (artistId) {
      const albums = await Album.find({artist: artistId.toString()});
      return res.send(albums)
    }
    const albums = await Album.find();
    return res.send(albums);
  } catch (error) {
    next(error);
  }
});

albumsRouter.post('/', imagesUpload.single('image'), async (req, res, next) => {
  try {
    if (!req.body.title || !req.body.artist || !req.body.year) {
      return res
        .status(422)
        .send({ error: 'Album title, artist and year is required!' });
    }

    const albumData = {
      title: req.body.title,
      artist: req.body.artist,
      year: req.body.year,
      image: req.file ? req.file.filename : null,
    };

    const album = new Album(albumData);
    await album.save();

    return res.send(album);
  } catch (error) {
    next(error);
  }
});

albumsRouter.delete('/', async (_req, res) => {
  await Album.deleteMany();
  return res.send('deleted');
});

export default albumsRouter;
