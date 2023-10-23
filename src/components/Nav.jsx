import { Link } from 'react-router-dom';
import {NavDiv} from '../css/nav';

function Nav() {
  return (
    <NavDiv>
    <header className="header">
      <nav className="headerMenu">
        <ul>
          <Link to="/" className="tlink">Home</Link> {''}
          <Link to="/cliente" className="tlink">Cliente</Link>
        </ul>
      </nav>
    </header>
    </NavDiv>
  );
}
export default Nav
