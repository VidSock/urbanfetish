import React from 'react'
import styled from "styled-components";
import { Link } from 'gatsby'
import { FaLock } from 'react-icons/fa';
// import { FaTimesCircle } from 'react-icons/fa';
// import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'

const CustomBox = styled.div`

.galmenu{
display: flex; justify-content: space-around; align-items: center; margin:0 3%;
background:#111;
padding:4px 4px;
border-radius:10px;
border:1px solid #444;
width:auto;
}
.galmenu li {width:30%; height:100%; padding:0; color:#fff; margin:0 3px; text-align: center;}



.galmenu .galgrad{display: block; padding:10px; border-radius:6px; border:1px solid #444; font-weight: bold; text-decoration: none; text-shadow: 1px 1px 1px black; height:100%;}

.galmenu .galgrad{
background: rgb(125,126,125); /* Old browsers */
background: -moz-linear-gradient(top, rgba(125,126,125,1) 0%, rgba(14,14,14,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7d7e7d', endColorstr='#0e0e0e',GradientType=0 ); /* IE6-9 */
}

.galmenu [aria-current] {
background: #d611bf;
background: -moz-radial-gradient(center, ellipse cover,  #d611bf 0%, #e812e5 32%, #db00c9 50%, #d212e8 69%, #c405c4 100%);
background: -webkit-radial-gradient(center, ellipse cover,  #d611bf 0%,#e812e5 32%,#db00c9 50%,#d212e8 69%,#c405c4 100%);
background: radial-gradient(ellipse at center,  #d611bf 0%,#e812e5 32%,#db00c9 50%,#d212e8 69%,#c405c4 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d611bf', endColorstr='#c405c4',GradientType=1 );
}


@media (max-width: 48rem) {
.galmenu{
display: flex; justify-content: space-around; flex-wrap: wrap; align-items: top; flex-shrink: inherit; flex-basis: 30%;
}
.galmenu li{width:18%; margin:0 0 3px 0;}
.custom-gal li {width:30%; height:100%; padding:0; color:#fff; margin:5px 3px; text-align: center;}

}


`



   
const GalleryMenu = () => (

<CustomBox style={{}}>

<div className="outer intro" style={{backgroundColor:'#222', borderTop:'1px solid #000',}}>
      <div className="container1 content" style={{padding:'10px 0 10px 0',}}>
    
<h2 style={{textAlign:'center', fontSize:'80%', margin:'0', padding:'0 0 5px 0', color:'#ddd',}}>Available Galleries <span className="no-app" style={{fontSize:'90%',}}><FaLock /> ( requires free<Link to="/install"> app installation here</Link> )</span></h2>

<ul className="galmenu custom-gal" style={{}}>
      
      <li className="galmenu-item"><Link to="/galleries/favorites" className="galgrad" title="Favorites" id="favorites">Popular<br />Favorites</Link></li>
      
      <li className="galmenu-item"><Link to="/galleries/still-life" className="galgrad" title="Still Life">Still<br />Life</Link></li>
      
      <li className="galmenu-item"><Link to="/galleries/doors" className="galgrad" title="Door Ways">Door<br />Ways</Link></li>
      
	  <li className="galmenu-item"><Link to="/galleries/industrial" className="galgrad" title="Modern Industrial">Modern<br />Industrial</Link></li>
	  
      <li className="galmenu-item"><Link to="/galleries/vehicles" className="galgrad" title="Icons of Rust">Icons of<br />Rust</Link></li>
      
      
      
      
      
      
      <li className="galmenu-item has-app"><Link to="/vault/spooky" className="galgrad" title="Spooky and Haunted">Spooky<br />Haunted</Link></li>
      <li className="galmenu-item no-app"><Link to="/vault" className="galgrad" title="Spooky and Haunted">Spooky<br />Haunted <FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li>
      



      </ul>
      
      
      <h4 style={{display:'none', textAlign:'center', fontSize:'70%', color:'#ddd',}}>Full Library:</h4>
<ul className="galmenu">
      
      <li className="galmenu-item"><Link to="/galleries/gallery1" className="galgrad" title="Gallery 1">I</Link></li>
      <li className="galmenu-item"><Link to="/galleries/gallery2" className="galgrad" title="Gallery 2">II</Link></li>
      <li className="galmenu-item"><Link to="/galleries/gallery3" className="galgrad" title="Gallery 3">III</Link></li>
      <li className="galmenu-item"><Link to="/galleries/gallery4" className="galgrad" title="Gallery 4">IV</Link></li>
      <li className="galmenu-item"><Link to="/galleries/gallery5" className="galgrad" title="Gallery 5">V</Link></li>
      <li className="galmenu-item">
      <Link to="/galleries/gallery6" className="galgrad" title="Gallery 6">VI</Link></li>
      <li className="galmenu-item"><Link to="/galleries/gallery7" className="galgrad" title="Gallery 7">VII</Link></li>
      
      
      <li className="galmenu-item no-app"><Link to="/install" className="galgrad" title="Gallery 8">VIII<FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li>
      <li className="galmenu-item no-app"><Link to="/install" className="galgrad" title="Gallery 9">IV<FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li>
      <li className="galmenu-item no-app"><Link to="/install" className="galgrad" title="Gallery 10">X<FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li>
      
      <li className="galmenu-item has-app"><Link to="/vault/gallery6" className="galgrad" title="Gallery 6">VI</Link></li>
      <li className="galmenu-item has-app" has-app><Link to="/vault/gallery7" className="galgrad" title="Gallery 7">VII</Link></li>
      <li className="galmenu-item has-app" has-app><Link to="/vault/gallery8" className="galgrad" title="Gallery 8" has-app>VIII</Link></li>
      <li className="galmenu-item has-app" has-app><Link to="/vault/gallery9" className="galgrad" title="Gallery 9">IX</Link></li>
      <li className="galmenu-item has-app" has-app><Link to="/vault/gallery10" className="galgrad" title="Gallery 10">X</Link></li>
      </ul>

</div>
      </div>

</CustomBox>
  
)

export default GalleryMenu