import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
const employeeId = '1';

export function useAllTaskBox(
  socket: Socket<DefaultEventsMap, DefaultEventsMap>
) {
  //ボタンクリック時
  const onPutClick = (id: number) => {
    //Serverにメッセージを送信;
    socket.emit('chup', { taskId: id, employeeId: employeeId });
  };
  return [onPutClick] as const;
}
