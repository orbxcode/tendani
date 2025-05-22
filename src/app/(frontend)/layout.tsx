import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'

import './globals.css'


export const metadata: Metadata = {
  title: "Tendani Properties",
  description: "Your trusted partner in South African property",
}
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  


  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
         <InitTheme  />
        <Providers >
         

         
          {children}
      
        </Providers>
      </body>
    </html>
  )
}


