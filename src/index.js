//El index.js Arranca la aplicacion

import app from './app'
import './database'

app.listen(app.get('port'));

console.log('Server on  port', app.get('port'));