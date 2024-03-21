interface desDataType {
  description: string;
}

interface AdditionalSongDataType {
  followers?: {
    href: null;
    total: number;
  };
  images: ImageDataType[];
}

interface SongIDType extends desDataType, AdditionalSongDataType {
  external_urls?: {
    spotify: string;
  };

  href: string;
  id?: string;
  name?: string;
  type?: string;
  uri: string;
}

interface AlbumIDType {
  items: ItemsDataType[];
  limit: number;
  next?: null;
  offset: number;
  previous?: null;
  total: number;
}

interface ArtistDataType extends SongIDType {}

interface ImageDataType {
  height?: number;
  url?: string;
  width?: number;
}

interface ItemsDataType extends SongIDType {
  artists: ArtistDataType[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  is_local: false;
  preview_url: string;
  track_number: number;
  images: ImageDataType[];
}

export interface AlbumDataType extends SongIDType {
  album_group: string;
  album_type: string;
  artists: ArtistDataType[];
  available_markets: string[];
  images: ImageDataType[];
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
}

export interface NewReleasesDataType {
  albums: AlbumIDType;
}

export interface RandomArtistsDataType {
  artists: {
    href: string;
    items: SongIDType[];
    id: string;
    name: string;
    type: string;
    uri: string;
  };
}

export interface PlaylistsDataType {
  message: "Popular Playlists";
  playlists: {
    href: string;
    items: SongIDType[];
    limit: number;
    next?: null;
    offset: number;
    previous?: null;
    total: number;
  };
}

export interface DetailAlbumTrackDataType extends AlbumIDType {}
export interface SongDataType extends AlbumIDType {}
