'use server'

import { connectDB } from '@/lib/dbConnect'
import NewsletterUsers from '@/models/NewsletterUsers'

export const addNewsletterUser = async (newUser) => {

  await connectDB()
  let addedUser = false

  try {
    const user = new NewsletterUsers(newUser)
    await user.validate()
    await user.save()
    addedUser = true
  } catch (error) {
    return false
  }

  return addedUser
}