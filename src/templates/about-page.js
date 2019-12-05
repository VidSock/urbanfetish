import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import Image from '../components/Image'
import Content, { HTMLContent } from '../components/Content'
// import { GiPlainArrow } from 'react-icons/gi'
// import { GoQuote } from 'react-icons/go'
import Install from '../components/Install'
import ScrollAnimation from 'react-animate-on-scroll'

import styled from 'styled-components'

const CustomBox = styled.div`

.intro:before{
	content: "About Twilightscapes";
position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:380%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}



.speech:after {
	content: '';
position: absolute;
top: 30%;
right: -18px;
width: 0;
height: 0;
	border: 60px solid transparent;
	border-left-color: inherit;
	border-right: 0;
	border-bottom: 0;
	 z-index:2;
}

.outer .container{width:90%; height:auto; margin:1rem auto; padding:1rem; border-radius:10px;}

.imgbox img{border-radius:12px; border:0px solid #000;}

.spacer33{height:15vh;}
.spacer66{height:66vh;}
.spacer99{height:99vh;}

p{line-height:150%;}


body.light .speech p span{color:#fff;}





@media (max-width: 48rem) {

.split{flex-direction:column !important; width:100% !important;}
.split div{width:100% !important}


.split div:first-child{order:2}
.split div:last-child{order:1}
.spacer33, .spacer66, .spacer99{height:15vh;}

.split.nowrap{flex-direction:row !important; width:100% !important;}
.split.nowrap div:first-child{order:1}
.split.nowrap div:last-child{order:2}
.split.nowrap .speech{border:1px solid;}

.split.nowrap div.speech{width: 60vw !important;}
.split.nowrap div.imgbox{width:30vw !important; margin-left:1rem !important;}

.split.nowrap .speech:after {
position: absolute;
top: 50%;
right: -20px;
width: 0;
height: 0;
	border: 20px solid transparent;
	border-left-color: inherit;
	border-right: 0;
	border-bottom: 0;
	 z-index:2;
}

.intro:before{font-size:200%;}

}

@media (min-width: 58rem) {
	.outer{padding:0 10% !important; /* width:50%; */}
	.split1{border:2px solid red !important}
	}








`



export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
//   const [toggler, setToggler] = useState(false);

  return (
    <section className="about outer intro section" style={{paddingTop:'0', overflow:'hidden',}}>
    
    <ScrollAnimation animateIn="bounceInUp" animateOut="bounceInDown" animateOnce={true} delay={1000}>
      <div className="container" style={{display:'none',}}>
        <div className="columns">

              <h2 className="title has-text-weight-bold1">
                {title}
              </h2>
              <PageContent className="content" content={content} />
        </div>
      </div>
      </ScrollAnimation>
      
      
 <div className="split content container" style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative', width:'92%', margin:'0 auto', padding:'1rem', borderBottom:'4px solid #000', borderTop:'1px solid #000', boxShadow:'0px 0px 20px 0px #000', borderRadius:'0 0 20px 20px', overflow:'',}}>

 
 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 

 </div>
 
 
 
 
 
 
 
       
       
       
       
       
       
       
       
       
       
       
       
       
      <Install/>
      
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
	  <CustomBox>
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
    
    </CustomBox>
    
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
