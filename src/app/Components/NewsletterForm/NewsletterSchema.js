// External modules
import {z} from 'zod'

export default z.object({
  name: z.string().min(2),
  last_name: z.string().min(2),
  email: z.email()
})