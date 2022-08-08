/* CONEXIÓN BASE DE DATOS */
const server = require("./src/app");
const { conn } = require("./src/db");
const PORT = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT, async () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});
