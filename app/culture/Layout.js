export const metadata ={
 title: 'Our Culture|APSOH',
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