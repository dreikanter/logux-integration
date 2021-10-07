import { Server } from '@logux/server'
import { fileURLToPath } from 'url'

const server = new Server(
  Server.loadOptions(process, {
    controlSecret: 'secret',
    controlHost: '0.0.0.0',
    subprotocol: '1.0.0',
    supports: '0.6.2',
    backend: 'http://app:3000/logux',
    host: '0.0.0.0',
    fileUrl: import.meta.url
  })
)

server.listen()
