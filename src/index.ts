import express from 'express';
import cors from 'cors';
import { OAuth2Server } from 'oauth2-mock-server';

const OAuth2ServerPort = parseInt(process.env.OAuth2ServerPort || '3001');
const TokenProviderPort = parseInt(process.env.TokenProviderPort || '3002');

const server = new OAuth2Server();

// Generate a new RSA key and add it to the keystore
await server.issuer.keys.generate('RS256');

// Start the server
await server.start(OAuth2ServerPort, 'localhost');

// API
const app = express();

// add json middleware
app.use(express.json());

// enable ALL CORS requests
app.use(cors());

app.post('/jwt', async function (req, res) {
  const jwt = await server.issuer.buildToken({
    scopesOrTransform: (_, payload) => {
      Object.assign(payload, req.body);
    }
  });
  res.send(jwt);
});

app.listen(TokenProviderPort);

console.log('Issuer URL:', server.issuer.url); // -> http://localhost:{OAuth2ServerPort}
console.log('Token Provider URL:', `http://localhost:${TokenProviderPort}`); // -> http://localhost:3000
