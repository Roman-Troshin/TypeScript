interface DataForCalculation {
  price: number 
  discount?: number
  isInstallment: boolean
  months: number
};


const totalPrice = ({ price, discount, isInstallment, months }: DataForCalculation): number => {

  if (isInstallment) {

    if (!!discount) {
      const percent = 1 - discount / 100;
      
      return price * percent / months
    } else {
      return price / months
    }
  }

  return price
};


const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250