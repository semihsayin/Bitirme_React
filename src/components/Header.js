import {Link} from 'react-router-dom';


const Header = () => {
    return ( 
       <header>
           <div className="container">
               <div className="inner-content">
                   <div className="brand">
                       <Link to="/">The ICUDB</Link>
                   </div>
                   <ul className="nav-links">
                       <li>
                           <Link to="/populer-movies">Populer Filmler</Link>
                       </li>
                       <li>
                           <Link to="/">İzleme Listem</Link>
                       </li>
                       <li>
                           <Link to="/watched">İzlediklerim</Link>
                       </li>
                       <li>
                           <Link to="/add" className="btn">+ Ekle</Link>
                       </li>
                   </ul>
               </div>
           </div>
       </header>
     );
}
 
export default Header;