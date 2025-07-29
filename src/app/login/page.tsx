"use client"
import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginSection from '@/features/auth/sections/LoginSection';

export default function page() {
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
      <main className='pt-20 min-h-[calc(100vh-128px)] flex items-center justify-center'>
        <LoginSection />
      </main>
    </GoogleOAuthProvider>
  )
}
