/* eslint-disable @typescript-eslint/no-explicit-any */
import {bind, /* inject, */ BindingScope} from '@loopback/core';

@bind({scope: BindingScope.TRANSIENT})
export class WebSocketService {
  constructor() {}

  start() {
    const app = require('express')();
    const http = require('http').createServer(app);
    const io = require('socket.io')(http);

    app.get('/', function(req: any, res: any) {
      res.sendFile(__dirname + '/index.html');
    });

    io.on('connection', function(s: any) {
      console.log('a user connected');
    });

    http.listen(3001, function() {
      console.log('listening on *:3001');
    });
  }
}
