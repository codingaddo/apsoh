export const metadata ={
 title: 'Schools|APSOH',
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