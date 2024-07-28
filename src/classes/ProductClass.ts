export interface ProductInterface {
  longTitle: string;
  shortTitle: string;
  price: number;
  imageName: string;
  amount: number;
}

export class Product {
  longTitle: string;
  shortTitle: string;
  price: number;
  imageName: string;
  amount: number;

  constructor(longTitle: string, shortTitle: string, price: number, imageName: string, amount: number) {
    this.longTitle = longTitle;
    this.shortTitle = shortTitle;
    this.price = price;
    this.imageName = imageName;
    this.amount = amount
  }
}
