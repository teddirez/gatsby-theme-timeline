/** @jsx jsx */
import { jsx } from "theme-ui"
import { withPrefix } from "gatsby"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { Link as LinkUI } from "theme-ui"
import { join as urlJoin } from "path"
export default function NextPageLink({ prefix }, props) {
  return (
    <div
      sx={{
        flexGrow: 1,
        textAlign: `right`,
      }}
    >
      <LinkUI
        disabled={props.disabled}
        as={Link}
        to={withPrefix(
          props.value === 1
            ? `${prefix}`
            : urlJoin(prefix, `page/${props.value}`)
        )}
        sx={{
          color: `textMuted`,
          flexGrow: 1,
          textAlign: `right`,
        }}
      >
        Next &rarr;
      </LinkUI>
    </div>
  )
}
