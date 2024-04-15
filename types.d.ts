export interface ArtistMutation {
  name: string;
  information: string | null;
  image: string | null;
}

export interface AlbumMutation {
  title: string;
  artist: string;
  year: string;
  image: string | null;
}
