const dotenv = require('dotenv');
const result = dotenv.config();
if (result.error) {
  console.log(result.error.message);
  process.exit(1);
}
const port = process.env.PORT || 3000;
const app = require('./app');

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
