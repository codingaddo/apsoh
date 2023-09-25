// import React from "react"

export const metadata = {
  title: 'About|APSOH',
  description: 'A school website',
}
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}