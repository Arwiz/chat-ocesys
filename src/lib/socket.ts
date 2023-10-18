// import { Socket, io } from 'socket.io-client';

// export class SocketHandler {
//   static socket: Socket | undefined;

//   static get_instance(token: string): Socket | undefined {
//     if (token) {
//       if (!this.socket && token) {
//         this.socket = io('ws://localhost:3000', { query: { token } });
//       }
//       return this.socket;
//     }
//     return undefined;
//   }
// }

import { Manager } from 'socket.io-client';

const manager = new Manager('http://localhost:3000');

export const socket = manager.socket('/'); // main namespace
export const adminSocket = manager.socket('/admin'); // admin namespace
