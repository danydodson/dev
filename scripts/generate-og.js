
const arguments = process.argv

const workspaceArg = arguments[2]

const fileArg = arguments[3]

const dataArg = arguments[4]

const data = dataArg && typeof dataArg === "string" ? JSON.parse(dataArg) : null