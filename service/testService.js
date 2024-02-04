class TestService {
  constructor() {}

  async table(params) {
    try {
      let table = [];
      for (let i = 1; i < 21; i++) {
        let multiply = params.num * i;
        table.push(`${params.num} * ${i} = ${multiply}`);
      }
      return table;
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports = TestService;
