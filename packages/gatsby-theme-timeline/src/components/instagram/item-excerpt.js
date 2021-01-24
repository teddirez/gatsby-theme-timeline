/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import processReactString from "./process-string"
export default function ({ item }) {
  const { title } = item
  if (!title) {
    return null
  }
  const finalExcerpt = processReactString(title)
  return (
    <Styled.p
      data-test="item-excerpt"
      itemProp="description"
      sx={{ whiteSpace: `pre-line`, color: `textMuted` }}
    >
      {finalExcerpt}
    </Styled.p>
  )
}
