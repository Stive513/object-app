import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class AppGateway {
  @WebSocketServer()
  server: Server;

  emitNewObject(object) {
    this.server.emit('newObject', object);
  }

  emitDelete(id: string) {
    this.server.emit('deleteObject', id);
  }
}