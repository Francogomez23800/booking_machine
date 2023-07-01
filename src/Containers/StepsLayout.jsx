import { Welcome } from '../Components/Welcome';
import { Search } from '../Components/Search';
import { Passengers } from '../Components/Passengers';
import { Tickets } from '../Components/Tickets';
import { Nav } from '../Components/Nav';

const StepsLayout = ({state, send}) => {
  function renderContent(){
    if(state.matches('initial')) return<Welcome send={send}/>
    if(state.matches('search')) return<Search state={state} send={send}/>
    if(state.matches('tickets')) return<Tickets state={state} send={send}/>
    if(state.matches('passengers')) return<Passengers state={state} send={send}/>
    
  }
  return (
    <div className='w-[400px] bg-gray-50/50 rounded-xl flex flex-col'>
      <Nav state={state} send={send}/>
      {renderContent()}
    </div>
  )
}

export default StepsLayout