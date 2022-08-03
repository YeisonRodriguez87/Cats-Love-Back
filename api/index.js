/* CONEXIÓN BASE DE DATOS */
const server = require('./src/app');
const { conn } = require('./src/db');
//const { getApiInfo } = require('./src/controllers/country')

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, async () => {
    //const loading = await getApiInfo();
    //console.log(loading);
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
