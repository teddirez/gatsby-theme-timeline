/** @jsx jsx */
import { jsx, Box, Styled } from "theme-ui"
import TweetDate from "./date"
import ViewOnTwitter from "./view-on-twitter"
import { withPrefix } from "gatsby"
import Tag from "./tag"
import kebabCase from "lodash/kebabCase"
import Tweet from "./tweet"
const Item = ({
  excerpt,
  authorName,
  authorId,
  authorAvatar,
  image,
  slug,
  date,
  idStr,
  tags,
}) => {
  const item = {
    excerpt,
    authorName,
    authorId,
    authorAvatar,
    image,
    slug,
    date,
    idStr,
    tags,
  }
  return (
    <Box
      sx={{
        borderRadius: `default`,
        overflow: `hidden`,
        wordWrap: `break-word`,
        borderWidth: 1,
        borderStyle: `solid`,
        borderColor: `muted`,
        px: [3, 4],
        py: 4,
      }}
    >
      <Tweet {...item}></Tweet>
      <footer>
        {tags && tags.length > 0 && (
          <Styled.div
            sx={{
              display: `flex`,
              flexWrap: `wrap`,
              pb: 3,
            }}
          >
            {tags &&
              tags.map((tag) => {
                return (
                  <Tag
                    to={withPrefix(`/tags/${kebabCase(tag)}`)}
                    key={`tag-${tag}`}
                  >
                    {tag}
                  </Tag>
                )
              })}
          </Styled.div>
        )}
        <section>
          <TweetDate slug={slug} date={date}></TweetDate>
          <span sx={{ color: `textMuted` }}> · </span>
          <ViewOnTwitter
            href={`https://twitter.com/${authorId}/status/${idStr}`}
          ></ViewOnTwitter>
        </section>
      </footer>
    </Box>
  )
}
export default Item