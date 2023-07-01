import { useMachine } from '@xstate/react';
import StepsLayout from './StepsLayout';
import bookingMachine from '../Machines/bookingMachine';

const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);

    return (
    <div className="w-full h-screen bg-[url('images/Background.jpg')] bg-cover flex justify-center items-center">
      <StepsLayout state={state} send={send}/>
    </div>
  )
}

export default BaseLayout