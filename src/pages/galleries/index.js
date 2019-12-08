
import React from 'react'
import Layout from '../../components/Layout'
import Install from '../../components/Install'
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '../../components/Gallery'
import ScrollAnimation from 'react-animate-on-scroll'
import GalleryMenu from '../../components/GalleryMenu'
import { FiZoomIn } from 'react-icons/fi'
// import PopSemi from '../../components/PopSemi'

import styled from "styled-components"
const CustomBox = styled.div`

#favorites {
background: #9b0c92;
background: -moz-linear-gradient(left,  #9b0c92 0%, #e812e5 39%, #db00c9 62%, #9b0c92 100%);
background: -webkit-linear-gradient(left,  #9b0c92 0%,#e812e5 39%,#db00c9 62%,#9b0c92 100%);
background: linear-gradient(to right,  #9b0c92 0%,#e812e5 39%,#db00c9 62%,#9b0c92 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9b0c92', endColorstr='#9b0c92',GradientType=1 );
}



.intro:before{
	content: "Galleries: Popular Favorites";

position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:350%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}





@media (max-width: 48rem) {
.intro:before{font-size:200%;}
}

@media (hover: hover) {
.gatsby-image-wrapper{transform: scale(1.25);}
}
.gatsby-image-wrapper{transform: scale(1.25);}
/*
	.gatsby-image-wrapper:after{
	content: "+ click to zoom";
	position:absolute; bottom:10px; right:10px;
	color:#fff;
	}
*/





`


const Galleries = graphql`
  query Galleries {
    allFile(filter: { relativeDirectory: { eq: "favorites" } }) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid
              originalName
              originalImg
            }
          }
        }
      }
    }
  }
`

const Gal1Page = () => {
  const data = useStaticQuery(Galleries)
  return (
	  <CustomBox>
    
    
<Layout>

      <Install/>
      
<div className="zoomer" style={{paddingTop:'0', display:'flex',alignItems:'center', justifyContent:'center',}}>
      <h4 style={{display:'flex', color:'#fff', fontSize:'100%', textAlign:'center', backgroundColor:'#222', padding:'5px 10px', borderRadius:'10px', border:'1px solid #999', position:'fixed', bottom:'50px', zIndex:'1', opacity:'.9',}}><FiZoomIn style={{fontSize:'150%', position:'relative', top:'0px', left:'-4px',}} />Click To Zoom</h4>
      </div>
      <GalleryMenu />

      
      <ScrollAnimation animateIn="fadeIn" initiallyVisible={false} delay={700} animateOnce={true} animatePreScroll={true}>
      <div className="container" style={{background:'#111',}}>
      <Gallery
        photos={data.allFile.edges}
      />
      </div>
      </ScrollAnimation>

    

      
       <GalleryMenu />

      
      
      
    </Layout>
    </CustomBox>
  )
}

export default Gal1Page
