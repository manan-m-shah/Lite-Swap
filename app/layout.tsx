'use client'
import '../styles/globals.css'
import AppProvider from "../context/AppProvider"
import Navbar from '../components/Navbar'
import Uik from '@reef-defi/ui-kit'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AppProvider>
            <html>
                <head>
                    <title>LiteSwap</title>
                </head>
                <body>
                    <Uik.Container>
                        <div className='w-full'>
                            <Navbar />
                            {children}
                        </div>
                    </Uik.Container>
                </body>
            </html>
        </AppProvider>
    )
}
