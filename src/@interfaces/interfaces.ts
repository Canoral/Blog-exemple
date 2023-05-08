export interface ICategories {
  route: string;
  label: string;
}
export interface HeaderProps {
  categories: ICategories[];
  setZenMode: React.Dispatch<React.SetStateAction<boolean>>;
  zenMode: boolean;
}
export interface IPost {
  id: number;
  category: string;
  title: string;
  excerpt: string;
}
export interface PostProps {
  posts: IPost[];
}
