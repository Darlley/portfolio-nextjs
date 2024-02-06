"use client"

import SwaggerUI from "swagger-ui-react"

import "swagger-ui-react/swagger-ui.css"

function ReactSwagger({ spec }) {
  // @ts-ignore - SwaggerUI is not typed
  return <SwaggerUI spec={spec} />
}

export default ReactSwagger