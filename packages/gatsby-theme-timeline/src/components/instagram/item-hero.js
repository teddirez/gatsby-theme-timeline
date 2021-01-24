/** @jsx jsx */
import Image from "gatsby-image"
import { jsx, Styled, Box, Link as LinkUI } from "theme-ui"
const itemHero = ({ item }) => {
  if (item.video && item.video.url) {
    return null
  }
  if (!(item?.image?.childImageSharp || item.imageRemote)) {
    return null
  }
  return (
    <Box
      data-test="item-hero-container"
      sx={{
        py: item?.image?.childImageSharp || item.imageRemote ? 2 : 0,
        textAlign: `center`,
      }}
    >
      <LinkUI href={item.imageRemote}>
        {item?.image?.childImageSharp ? (
          <Image
            fluid={item.image.childImageSharp.fluid}
            alt={item.imageAlt ? item.imageAlt : item.excerpt}
            imgStyle={{ objectFit: `contain` }}
          />
        ) : (
          item.imageRemote && (
            <Styled.img alt={item.imageAlt} src={item.imageRemote} />
          )
        )}
      </LinkUI>
    </Box>
  )
}

export default itemHero