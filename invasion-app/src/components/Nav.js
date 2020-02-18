import React from 'react'
import Groups from './Groups'
import {Link} from 'react-router-dom'


const Nav = () => {
        return (
            <div class="nav-footer nav-text">  
                <Link to="/">Home</Link>
                <a href="https://corporateclash.net/news">News</a>
                <a href="https://corporateclash.net/releases">Releases</a>
                <a href="https://corporateclash.net/comics">Comics</a>
                <Link to="/groups">Groups</Link> 
            </div>
        )
}

export default Nav;

/*
 <Router>
      <div>
        <ul>
          <li>
            <Link to="https://corporateclash.net/">Home</Link>
          </li>
          <li>
            <Link to="https://corporateclash.net/news">News</Link>
          </li>
          <li>
            <Link to="https://corporateclash.net/releases">Releases</Link>
          </li>
           <li>
            <Link to="https://corporateclash.net/releases">Comics</Link>
          </li>
           <li>
            <Link to="/groups">Groups</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/groups">
            <Groups />
          </Route>
        </Switch>
      </div>
    </Router>
*/