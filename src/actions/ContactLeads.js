'use server'

import { connectDB } from '@/lib/dbConnect'
import ContactLeads from '@/models/ContactLeads'

export const addContactLead = async (newLead) => {

  await connectDB()
  let addedLead = false

  try {
    const lead = new ContactLeads(newLead)
    await lead.validate()
    await lead.save()
    addedLead = true
  } catch (error) {
    return false
  }

  return addedLead
}
