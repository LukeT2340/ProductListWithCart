export interface ProductInterface {
  longTitle: string;
  shortTitle: string;
  price: number;
  imageName: string;
}

export class Product {
  longTitle: string;
  shortTitle: string;
  price: number;
  imageName: string;

  constructor(longTitle: string, shortTitle: string, price: number, imageName: string) {
    this.longTitle = longTitle;
    this.shortTitle = shortTitle;
    this.price = price;
    this.imageName = imageName;
  }
}
