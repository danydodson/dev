import * as React from "react"

function IconMoon(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#f1e21d"
        d="M283.2 512c79 0 151.1-35.9 198.9-94.8 7.1-8.7-.6-21.4-11.6-19.4-124.2 23.7-238.3-71.6-238.3-197 0-72.2 38.7-138.6 101.5-174.4 9.7-5.5 7.3-20.2-3.8-22.2A258.2 258.2 0 00283.2 0c-141.3 0-256 114.5-256 256 0 141.3 114.5 256 256 256z"
      />
    </svg>
  )
}

// const MemoMoon = React.memo(Moon)
export default IconMoon
