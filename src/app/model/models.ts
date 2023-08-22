export interface environmentPropetyModel {
  comment: string;
  image: string;
  label: string;
  route: string;
}
export interface environmentPropetyModelEdit {
  id: string;
  comment: string;
  image: string;
  label: string;
  route: string;
}
export interface customerReporters {
  image: string;
  label: string;
  route: string;
  category: string;
  comment: string;
}
export interface customerReportersEdit {
  image: string;
  label: string;
  route: string;
  id: string;
  category: string;
  comment: string;
}
export interface environementPropertyPlaces {
  comment: string;
  category: string;
  image: string;
}
export interface getEnvironementPropertyPlaces {
  comment: string;
  category: string;
  image: string;
}
export interface promotions {
  title: string;
  comment: string;
}
export interface articles {
  label: string;
  comment: string;
  image: string;
}
export interface promotionsEdit {
  id: string;
  title: string;
  comment: string;
}
export interface utensil {
  label: string;
  image: string;
  category: string;
  categoryLabel: string;
}
export interface utensilEdit {
  label: string;
  image: string;
  category: string;
  id: string;
}
export interface environementPropertyPlacesEdit {
  comment: string;
  category: string;
  image: string;
}
export interface utensilsCategory {
  category: string;
  diplayItems: string;
  label: string;
}
export interface utensilsCateroryEdit {
  id: string;
  category: string;
  diplayItems: string;
  label: string;
}
export interface article {
  id: string;
  category: string;
  contact: string;
  title: string;
  comment: string;
}
