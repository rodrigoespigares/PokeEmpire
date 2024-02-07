import {Navigate} from 'react-router-dom'

const Midware = ({Component}) => {
  let isAuth = true;
  return isAuth ?<Component />: <Navigate to="/"/>
}

export default Midware;
