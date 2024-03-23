interface DesDataType {
  description: string;
}

interface AdditionalSongDataType {
  followers?: {
    href: null;
    total: number;
  };
  images: ImageDataType[];
  genres?: string[];
}

export interface SongIDType extends DesDataType, AdditionalSongDataType {
  external_urls?: {
    spotify: string;
  };
  href: string;
  id?: string;
  name: string;
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

export interface ArtistsDataType {
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

export interface SongDataType {
  href: string;
  items: [
    {
      album: {
        album_type: string;
        artists: ArtistDataType[];
        available_markets: string[];
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        images: ImageDataType[];
        name: string;
        release_date: string;
        release_date_precision: string;
        total_tracks: number;
        type: string;
        uri: string;
      };
      album_type: string;
      artists: ArtistDataType[];
      available_markets: string[];
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: ImageDataType[];
      name: string;
      release_date: string;
      release_date_precision: string;
      total_tracks: number;
      type: string;
      uri: string;
    }
  ];
  limit: number;
  next: string;
  offset: number;
  previous: null;
}

export interface ClickedDetailInfos extends SongIDType {
  collaborative: boolean;
  description: string;
  images: ImageDataType[];
  owner: {
    display_name: "Spotify";
    external_urls: { spotify: string };
    href: string;
    id: string;
    type: string;
  };
  primary_color: string;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
}

export interface DetailTrackDataType {
  href: string;
  items: [
    {
      added_at: string;
      added_by: {
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string | undefined;
        type: string;
        uri: string;
      };
      is_local: boolean;
      primary_color: null;
      track: {
        album: {
          album_type: string;
          artists: ArtistDataType[];
          available_markets: string[];
          images: ImageDataType[];
          name: string;
          external_urls: {
            spotify: string;
          };
        };
        artists: ArtistDataType;
        available_markets: string[];
        disc_number: number;
        duration_ms: number;
        episode: boolean;
        explicit: boolean;
        external_ids: { isrc: string };
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        is_local: false;
        name: string;
        popularity: number;
        preview_url: string;
        track: true;
        track_number: number;
        type: string;
        uri: string;
      };
      video_thumbnail: {
        url: null | string;
      };
    }
  ];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface DetailAlbumTrackDataType extends AlbumIDType {}

export interface DetailInfosDataType extends SongIDType {}
