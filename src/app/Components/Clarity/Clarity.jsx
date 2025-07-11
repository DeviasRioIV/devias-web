'use client'

// External modules
import React from 'react'
import Clarity from '@microsoft/clarity'

export default function ClarityInit() {
  
  React.useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID
    Clarity.init(projectId);
  }, [])

  return null
}
