const TestService = require("../service/testService");

async function testController(req, res) { // <-- Include res as a parameter
  try {
    const params = req.query;
    const testService = new TestService();
    const numbersList = await testService.table(params);
    console.log(numbersList);
    res.send(numbersList);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  testController
};
