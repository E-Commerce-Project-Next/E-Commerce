"use client"
import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import SignupSection from '@/features/auth/sections/SingupSection';


export default function page() {
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
      <main className='pt-20 h-[calc(100vh-128px)] flex items-center justify-center'>
        <SignupSection />
      </main>
    </GoogleOAuthProvider>
  )
}
