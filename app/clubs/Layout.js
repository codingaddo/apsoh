export const metadata ={
 title: 'Clubs|APSOH',
  description: 'A school website',

}

export default function Layout({children}){
    return(
        <html>
            <body>
                {children}
            </body>
        </html>
    )
    }