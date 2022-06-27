import app from './app.js';

app.listen(app.get('port'), () => console.log('Server on port ', process.env.PORT));