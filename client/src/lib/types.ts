interface BaseMedia {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Movie extends BaseMedia {
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
}

export interface Tv extends BaseMedia {
  original_name: string;
  first_air_date: string;
  name: string;
}

export type MediaType = 'All' | 'Movie' | 'TV';
