
import React from 'react'
import Layout from '../../components/Layout'

import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '../../components/Gallery'
import ScrollAnimation from 'react-animate-on-scroll'
import GalleryMenu from '../../components/GalleryMenu'
// import PopSemi from '../components/PopSemi'
import { FiZoomIn } from 'react-icons/fi'

import styled from "styled-components"
const CustomBox = styled.div`

#galleries {
background: #9b0c92;
background: -moz-linear-gradient(left,  #9b0c92 0%, #e812e5 39%, #db00c9 62%, #9b0c92 100%);
background: -webkit-linear-gradient(left,  #9b0c92 0%,#e812e5 39%,#db00c9 62%,#9b0c92 100%);
background: linear-gradient(to right,  #9b0c92 0%,#e812e5 39%,#db00c9 62%,#9b0c92 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9b0c92', endColorstr='#9b0c92',GradientType=1 );
}
#galleries:before{
content:" ";
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2319181a' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}


.intro:before{
	content: "Gallery 1";

position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:480%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
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


const gal1Query = graphql`
  query gal1Query {
    allFile(filter: { relativeDirectory: { eq: "gallery1" } }) {
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
  const data = useStaticQuery(gal1Query)
  return (
	  <CustomBox>
    <Layout>
    


      
      
      <GalleryMenu />
  
<ScrollAnimation animateIn="fadeOut" initiallyVisible={true} delay={0} animateOnce={true} animatePreScroll={false} style={{display:'flex',alignItems:'center', justifyContent:'center',}}>
  <h4 style={{color:'#fff', fontSize:'100%', textAlign:'center', display:'flex', backgroundColor:'#222', padding:'5px 10px', borderRadius:'10px', border:'1px solid #999', position:'absolute', bottom:'50px', zIndex:'1', opacity:'.9',}}><FiZoomIn style={{fontSize:'150%', position:'relative', top:'0px', left:'-4px',}} />Click To Zoom</h4>
  </ScrollAnimation>
      
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
