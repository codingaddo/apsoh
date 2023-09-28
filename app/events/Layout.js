export const metadata ={
     title: 'Events|APSOH',
  description: 'A school website',
}

export default function Layout({children}){
    return(
        <htnl>
            <body>
                {children}
            </body>
        </htnl>
    )
}