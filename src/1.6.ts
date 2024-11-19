{
  //learn function
  // normal function
  //array function

  function add(num1: number, num2: number = 2): number {
    return num1 + num2;
  }
  add(2 + 2);

  const arrayFunction = (num1: number, num2: number = 1): number => num1 + num2;
  arrayFunction(2 + 2);

  //object -------> function method

  const poorUser = {
    name: "Halal Uddin",
    balance: 0,
    addBalance(balance: number): string {
      return `My new balance is: ${this.balance + balance}`;
    },
  };

  const arr: number[] = [1, 2, 3];

  const newArr = arr.map((elem: number): number => elem * elem);
}
