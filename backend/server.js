const app = require("./app");

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error occurred while listening the server port : ", PORT);
  } else {
    console.log("Server listening on port ", PORT);
  }
});
