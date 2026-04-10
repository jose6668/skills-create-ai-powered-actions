const core = require("@actions/core");
const { rateJoke } = require("./rateJoke");

async function run() {
  try {
    const joke = core.getInput("joke", { required: true });
    const token = core.getInput("token", { required: true });

    const rating = await rateJoke(joke, token);
    core.setOutput("result", JSON.stringify(rating));
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = { run };
