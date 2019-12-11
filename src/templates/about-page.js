import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Contact from '../components/Contact-inc'
// import Image from '../components/Image'
import Content, { HTMLContent } from '../components/Content'
// import { GiPlainArrow } from 'react-icons/gi'
// import { GoQuote } from 'react-icons/go'
import Install from '../components/Install'
import ScrollAnimation from 'react-animate-on-scroll'

import styled from 'styled-components'

const CustomBox = styled.div`

/*
.intro:before{
	content: "About Twilightscapes";
position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:380%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}
*/


h2{color:#dd4000}

body.dark, body.dark .container{ color:#ff0000 !important;}
.outer .container{width:100%; height:auto; margin:1rem auto;}

.imgbox img{border-radius:12px; border:0px solid #000;}

.spacer33{height:15vh;}
.spacer66{height:66vh;}
.spacer99{height:99vh;}

p{line-height:150%;}


body.light .speech p span{color:#fff;}

.outer{padding:0 11%; border:0px solid red; margin-top:2rem;}
.split div:first-child{padding-right:1rem; border:0px solid yellow;}
.split div:last-child{padding-left:1rem; border:0px solid blue;}

@media (min-width: 48rem) and (max-width: 1000px) { 
	
 }


@media (max-width: 48rem) {
.split{flex-direction:column !important; width:100% !important;}

.split div{width:100% !important}
.split div:first-child{order:1}
.split div:last-child{order:2}

.outer{padding:5%; border:0px solid red; }
.split div:first-child{padding-right:0rem; border:0px solid yellow;}
.split div:last-child{padding-left:0rem; border:0px solid blue;}

.spacer33, .spacer66, .spacer99{height:15vh;}

.split.nowrap{flex-direction:row !important; width:100% !important;}
.split.nowrap div:first-child{order:2}
.split.nowrap div:last-child{order:1}
.split.nowrap .speech{border:1px solid;}

.split.nowrap div.speech{width: 60vw !important;}
.split.nowrap div.imgbox{width:30vw !important; margin-left:1rem !important;}


.intro:before{font-size:200%;}







}

@media (min-width: 58rem) {
	.outer{padding:0 14%;}
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
      
      
 <div className="split content1 container1" style={{display:'flex', justifyContent:'center', alignItems:'', position:'relative', width:'100%', margin:'0 auto',}}>

 


<div className="primary cf " style={{color:'#444',}}>


	
	<h2 className="todd-headline">Highlights</h2>

<p><strong>Product Designer - Skilled web designer/developer with over 15 years of professional experience.</strong></p>

<p>Proven record of completing bold, clean, and effective designs with consistent performance ahead of schedule and under budget.</p>

<p>Successful product designer able to integrate both technical and creative skills to create cross-browser and cross-platform solutions with modern web architecture and navigation systems.</p>

<p>Experienced in many industries, including semiconductor, hospitality, entertainment, health, publishing, finance, insurance, construction, computer software, and Internet.</p>

  
<h2 className="todd-headline">Proficiency</h2>

<p>Responsive Design, CSS3, graceful degradation, Jquery, modern grid layouts, object oriented CSS, Wordpress and other CMS including TeamSite, HTML emails, analytics, SEO, user interface design, information architecture, web navigation, icon creation, web graphics, cross-platform and cross-browser issues, web template creation &amp; content management system integrations.</p>

<p>Professional level expertise with Adobe Creative Suite. Comfortable in both ASP and PHP environments as well as most major javascript libraries.</p>


<p><strong>I prefer WordPress, PHP, jQuery and Macs.</strong></p>


<h2 className="todd-headline">Education</h2>

<ul>
<li><strong>Cal State University Fullerton</strong><br />
Web Design and Development Degree</li>

<li><strong>Coastline Community College</strong><br />
Quality Assurance Degree</li>

<li><strong>Golden West College</strong><br />
Business Management</li>

<li><strong>Huntington Beach High School</strong><br />
High School Diploma</li>
</ul>

	
</div>


<div className="secondary cf p-left" style={{color:'#444',}}>
	
<h2 className="todd-headline">Professional Experience</h2>

<p><strong>Todd Lambert Enterprises, 1999 - Present</strong><br />
<em>Sole Proprietor / Photographer</em>
<br /><br />
Conducted all facets of web development business including meeting with clients, selling web services, and developing methods for improved customer support. <br /><br /> I also like to travel and photograph spooky and abandoned places, at night, all by myself and all over the country.</p>

<p><strong>Primal Health, 2013 - 2014</strong><br /> 
<em>Creative Director / Associate Developer</em>
<br /><br />
Responsible for all graphic components and direct marketing efforts. Worked with various departments to advance reach through social marketing, engineering and analytics. Also performed SEO and conducted extensive AB testing.</p>

<p><strong>Texas Instruments, 2010 - 2013</strong><br /> 
<em>Style Architect / Front End Developer / Senior UI Designer</em>
<br /><br />
Worked on all aspects of TIs website, from new ad campaigns and interactive widgets to the core infrastructure including a new re-design and replacement of site navigation site-wide. Championed responsive design techniques and other modern architecture for use on corporate site. Utilized Jquery animation for replacing all of TIs legacy Flash files.</p>

<p><strong>AGJ Systems &amp; Networks, 2008 - 2010 </strong><br />
<em>Web Director / Lead Developer / Senior Designer</em>
<br /><br />
Solely responsible for all design and development aspects of web department. Interacted with customers and other departments to integrate designs into modern, full-featured websites catered to customer needs.</p>

<p><strong>TeleVox Software, 2004 - 2007</strong><br />
<em>Director of Web Development</em>
<br /><br />
Responsible for site architecture, design, graphics, programming, copywriting/editing, project management of all TeleVox websites and online marketing campaigns. Supervised 25 designers and developers.</p>


</div>





 </div>
 
 
 
 
 
 
 
       
       
       
       
       
       
       
       
       
       
       
       <ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
    <Contact />
</ScrollAnimation>
       
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
