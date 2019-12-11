import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// import PopNewsletter from '../components/PopNewsletter'
import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
// import ScrollAnimation from 'react-animate-on-scroll'
// import { IoIosArrowDropdownCircle } from 'react-icons/io'

import styled from "styled-components"
const CustomBox = styled.div`

.intro:before{
	content: "About Twilightscapes";

position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:280%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}

`

export const ExamplePageTemplate = ({

  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  
  <div className="outer intro" style={{paddingTop:'0',}}>
  
  
  
          
      
      
      
      
    
    

     
               


    
    
                      
                    
                 
                 
                
  </div>
)

ExamplePageTemplate.propTypes = {

  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const ExamplePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
	  <CustomBox>
    <Layout>
      <ExamplePageTemplate

        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
    </CustomBox>
  )
}

ExamplePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ExamplePage

export const pageQuery = graphql`
  query ExamplePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "example-page" } }) {
      frontmatter {
        title
        
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 540, quality: 44) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`