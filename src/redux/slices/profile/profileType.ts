export type IProfileSliceState = {
  ImgUrl: string;
  title: string;
  time: string;
  rating: string;
  description: string;
  country: string;
  flag: string;
  genre: string[];
  id: string;
};

export interface ProfileSliceState {
  items: IProfileSliceState[];
}
