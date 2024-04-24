import { SERVER_API_URL } from '@/utils/fetch-data';
import { Manager } from 'socket.io-client';

const manager = new Manager(SERVER_API_URL);

export const socket = manager.socket('/'); // main namespace
export const adminSocket = manager.socket('/admin'); // admin namespace
