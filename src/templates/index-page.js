import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Contact from '../components/Contact-inc'
import Image from '../components/Image';
// import Intro from '../components/intro-home'
//  import Gallery1 from '../components/Gallery1'
import Layout from '../components/Layout'
// import Install from '../components/Install'
import { Link } from 'gatsby'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import ScrollAnimation from 'react-animate-on-scroll'
// import { IoIosArrowDropdownCircle } from 'react-icons/io'
// import { FaAccessibleIcon, FaRegAddressCard, FaOdnoklassniki, FaBlind } from 'react-icons/fa'
import { FaRegAddressCard } from 'react-icons/fa'
import { GoGear, GoTelescope } from 'react-icons/go'

// import PopMedical from '../components/PopMedical'
// import PopSemi from '../components/PopSemi'
import PopNewsletter from '../components/PopNewsletter'
import styled from "styled-components"

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }

.intro img{border-radius:6px !important;}

.intro:before{
	content: "Urban Exploration Photography";

position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:280%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
animation: poof 1.5s forwards;
animation-delay: 1.5s;
}

/*
.boom{
 	  background: -webkit-gradient(radial, 40% 90%, 10, 50% 50%, 90, from(rgba(0,28,78, 1)), to(rgba(31,169,244,1)) );
 	  
background:linear-gradient(to bottom, #cfc09f 22%,#634f2c 24%, #cfc09f 26%, #cfc09f 27%,#ffecb3 40%,#3a2c0f 78%); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: 
	}
*/
	
/*
	h3 {
    background: linear-gradient(to bottom, #fff 50%,yellow 40%, #a0c3cf 96%, #a0bdcf 27%,#ff0000 40%,white 100%); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
    position: relative;
	text-transform: uppercase;	
}
*/

.hit-the-floor {
  color: #fff;
  font-weight: bold;
  font-family: Helvetica;
  text-shadow: 
    0 1px 0 #ccc, 
    0 2px 0 #c9c9c9, 
    0 3px 0 #bbb, 
    0 4px 0 #b9b9b9, 
    0 5px 0 #aaa, 
    0 6px 1px rgba(0,0,0,.1), 
    0 0 5px rgba(0,0,0,.1), 
    0 1px 3px rgba(0,0,0,.3), 
    0 3px 5px rgba(0,0,0,.2), 
    0 5px 10px rgba(0,0,0,.25), 
    0 10px 10px rgba(0,0,0,.2), 
    0 20px 20px rgba(0,0,0,.15);
}


  	



.fullscreen-bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -100;
}

.fullscreen-bg__video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    -webkit-transform: translate(-50%, -50%);
       -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
	    transform: translate(-50%, -50%);
}

@media (max-width: 767px) {
    .fullscreen-bg {
        background: url('http://dev2.slicejack.com/fullscreen-video-demo/img/videoframe.jpg') center center / cover no-repeat;
    }

    .fullscreen-bg__video {
        display: none;
    }
}







.image-wrap {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.image-wrap img {
  width: 100vw;
/*
  animation: move 11s ease;
  animation-direction:alternate-reverse;
*/
  position: ;
  z-index:0;
}











@media (min-width: 58rem) {

  .image-wrap h1.boom{font-size:450% !important;}
  .image-wrap h2.boom{font-size:280% !important;}
  .image-wrap h3.boom{font-size:550% !important;}
  
/*
  #hero h1{font-size:650% !important; line-height:95%; margin-bottom:1rem;}
  #hero h3{font-size:880% !important;}
*/
  
//   #hero .news-content h3{font-size:inherit !important;}
//   .special{font-size:200% !important;}
}


@media (max-width: 48rem) {

.image-wrap {height:auto !important; min-height:300px !important;}
  .image-wrap h1.boom{font-size:250% !important;}
  .image-wrap h2.boom{font-size:180% !important;}
  .image-wrap h3.boom{font-size:280% !important;}
  .intro:before{font-size:150% !important}
  .content{flex-direction:column !important;}
  .content .stack{width:100% !important; margin:0 !important;}
  .pitch{font-size:250% !important; text-align:center;}
  
}


`





export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  subsubheading,
  
  image2,
  i2Heading,
  i2Subheading,
  i2Subsubheading,
  i2Subsubheading2,
  
  image3,
  i3Heading,
 i3Subheading,
  i3Subsubheading,
  i3Subsubheading2,
  



  
}) => (
	
	<>
     
    
	<CustomBox>
	
  <div className="outer intro">
  
<div className="image-wrap" style={{position:'relative', overflow:'hidden',}}>
  
 
  
  
  <div className="" style={{position:'absolute', top:'0', width:'100vw', overflow:'hidden', border:'0px solid red', zIndex:'1',}}>
  
  
  
  
  <ScrollAnimation animateIn="bounceInDown" delay={1400} offset={0} style={{position:'relative', paddingTop:'40px', right:'10%',}}>
        <h1
          className="boom normal txtshadow-header hit-the-floor"
          style={{
            color: '#fff',
            fontSize: '4rem',
           position: 'relative',
//            top: '100px',
//            right: '1%',
//            backgroundColor: '#ff0000',
            textAlign: 'right', 
            float: 'none',
          }}
        >
          Take a walk
        </h1>
        </ScrollAnimation>
        
        
  <ScrollAnimation animateIn="bounceInRight" delay={1500} style={{position:'relative', top:'0', right:'10%',}}>
        <h2
          className="boom narrow txtshadow mobile-txt"
          style={{
           fontSize:'3rem',
           color: 'white',
           position: 'relative',
            textAlign: 'right', 
          }}
        >
          on the
        </h2>
        </ScrollAnimation>
        
        
  <ScrollAnimation animateIn="bounceInUp" delay={1450} style={{position:'relative', top:'0', right:'10%',}}>
        <h3
          className="boom"
          style={{
           fontSize:'6rem',
           color: 'white',
           position: 'relative',
//            top: '230px',
            textAlign: 'right',
            textTransform: 'uppercase', 
          }}
        >
          Wild Side
        </h3>
        </ScrollAnimation>


        <ScrollAnimation animateIn="bounceInRight" delay={2000} style={{position:'relative', top:'-20px', right:'12%', float:'right', display:'inlineBlock', justifyContent:'', alignItems:'center', margin:'0 auto', padding:'30px 0 0 0',  textAlign:'center',}}>
   <PopNewsletter />      
</ScrollAnimation>

        
        </div>
       

<div className=" kenburns-bottom" style={{position:'absolute', top:'0', width:'100vw', overflow:'hidden', border:'0px solid red', zIndex:'0',}}>
        <Image className="" alt="Todd Lambert Web development for photographers" filename="favorites-abandoned11.jpg" style={{backgroundSize:'cover', zIndex:'0',}} />
        </div>

</div>



  
        
    





<ScrollAnimation animateIn="" animateOut="" initiallyVisible={true} animateOnce={true} animatePreScroll={true}>
<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
<Image alt="Todd Lambert Web development for photographers" filename="frontpage/workshop.jpg" /><br />
<h2>Urban Exploration Photography</h2>
<p>Take a walk on the wild side and follow along as Todd Lambert goes in search of the creepiest, freakiest, spookiest abandoned and desolate locations he can find. See places that you wouldn&apos;t dare go into, especially at night.</p>
<br />
<Link className="special grad" to="/galleries" style={{color:'#fff', textDecoration:'none', display:'flex',  justifyContent:'center', width:'230px',  padding:'3px 1rem 0 1rem', margin:'0 auto',}}>View Galleries <span style={{fontSize:'120%', position:'relative', right:'-8px', top:'0', color:'#fff',}}><GoTelescope /></span></Link>



</div>
</div>
</ScrollAnimation>






<ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<div id="desc" className="container">
<div className="content" style={{padding:'1rem 1rem', display:'flex', flexDirection:'row',}}>

<div className="stack" style={{width:'60%',}}>
<h2>Meet Todd Lambert</h2>
<p>Todd is a new breed of photographer focusing on remote and mostly "unknown" locations such as graveyards and other abandoned places at night. Todd is an adventurous spirit who lives full-time on the road while traveling across the country.
</p>
</div>

<div className="stack" style={{width:'40%', margin:'0 0 0 1rem', fontSize:'70%', }}>
<Image alt="Todd Lambert Web development for photographers" filename="frontpage/todd.jpg" />Todd Lambert on location
</div>

</div>


<Link className="special grad" to="/about" style={{color:'#fff', textDecoration:'none', display:'flex',  justifyContent:'center', width:'250px',  padding:'3px 1.5rem 0 1rem', margin:'0 auto',}}>More About Todd <span style={{fontSize:'120%', position:'relative', right:'-8px', top:'0', color:'#fff',}}><FaRegAddressCard /></span></Link>


</div>
</ScrollAnimation>







<ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>

<div className="container">
<div className="content" style={{padding:'1rem 1rem', display:'flex', flexDirection:'row',}}>

<div className="stack" style={{width:'40%', margin:'0 1rem 0 0', fontSize:'70%', }}>
<Image alt="Todd Lambert Web development for photographers" filename="frontpage/twilightscapes-rig.jpg" />Subaru Outback with 18-foot Aliner trailer coming out of Hideout Canyon, UT.
</div>
< br />
<div className="stack" style={{width:'60%',}}>
<h2>Always on the hunt</h2>
<p>Todd scours the Internet, drives countless miles and lives and works in his unique overlanding road trip setup. You see, Todd is a photographer that specializes in photographing vintage cars, abandoned places and other pieces of unique American history.
</p>
</div>

</div>


<Link className="special grad" to="/capabilities" style={{color:'#fff', textDecoration:'none', display:'flex',  justifyContent:'center', width:'200px',  padding:'3px .5rem 0 1rem', margin:'0 auto',}}>Todds Gear <span style={{fontSize:'120%', position:'relative', right:'-4px', top:'0', color:'#fff',}}><GoGear /></span></Link>


</div>
</ScrollAnimation>




    
       
    <ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
    <div className="container" style={{marginTop:'',}}>
<div className="content" style={{padding:'1rem 1rem 1rem 1rem', display:'flex', flexDirection:'row',}}>
<h2 className="pitch">Like this site?</h2>

<div>
<p>Todd builds websites as his day job, and he would love to build your dream site, custom for you.</p>

<p>An ultra-fast website that uses state-of-the-art technology, is super flexible, and modern designed to work great everywhere.</p>

<h3 style={{textAlign:'center',}}>Let Todd build your site today!</h3>
</div>
</div>
</div>
</ScrollAnimation>
    
    
    
    
    <ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
    <Contact />
</ScrollAnimation>



    
       
    
  </div>
  </CustomBox>

  
</>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  subsubheading: PropTypes.string,
  
  image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  i2Heading: PropTypes.string,
  i2Subheading: PropTypes.string,
  i2Subsubheading: PropTypes.string,
  i2Subsubheading2: PropTypes.string,

  image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  i3Heading: PropTypes.string,
  i3Subheading: PropTypes.string,
  i3Subsubheading: PropTypes.string,
  i3Subsubheading2: PropTypes.string,
}



const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
	  
	  
	  
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        subsubheading={frontmatter.subsubheading}

        image2={frontmatter.image2}
        i2Heading={frontmatter.i2Heading}
        i2Subheading={frontmatter.i2Subheading}
        i2Subsubheading={frontmatter.i2Subsubheading}
        i2Subsubheading2={frontmatter.i2Subsubheading2}

        image3={frontmatter.image3}
       i3Heading={frontmatter.i3Heading}
        i3Subheading={frontmatter.i3Subheading}
        i3Subsubheading={frontmatter.i3Subsubheading}
        i3Subsubheading2={frontmatter.i3Subsubheading2}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        heading
        subheading
        subsubheading
        image2 {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
		i2Heading
		i2Subheading
		i2Subsubheading
		i2Subsubheading2
		
		 image3 {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
		i3Heading
		i3Subheading
		i3Subsubheading
		i3Subsubheading2
		
      }
    }
  }
`
