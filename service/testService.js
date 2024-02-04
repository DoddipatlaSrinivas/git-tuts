class TestService {
  constructor() {}

  async numbers() {
    let numbersList = [1, 2, 3, 4, 5];
    numbersList.forEach((number, index) => {
      numbersList[index] = number * 2;
    });
    return numbersList;
  }
}
module.exports = TestService;
