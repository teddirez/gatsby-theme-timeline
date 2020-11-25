import React from "react"
import { Text } from "theme-ui"
export default function Ellipsis() {
  return (
    <Text
      sx={{
        color: `textMuted`,
        px: 2,
      }}
    >
      ...
    </Text>
  )
}
