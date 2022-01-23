import React from 'react'
import { routes } from './routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import bg from '../assets/images/BG.png'
import './MyRouter.css'
import CustomNavbar from '../components/Navbar/CustomNavbar';
import CustomFooter from '../components/Footer/CustomFooter';

const MyRouter = () => {
  return (
    <div className='bg'>
    <Router>
    <CustomNavbar></CustomNavbar>
      <Switch >
        {

          routes.map((item, key) => {
            return (
              <Route  key={key} path={item.path} component={item.component}>
              </Route>
            )
          })

        }
      </Switch>
        <CustomFooter></CustomFooter>
    </Router>
    </div>
  )
}

export default MyRouter
