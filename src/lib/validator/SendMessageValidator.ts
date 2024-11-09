import { X } from 'lucide-react'
import {z} from 'zod'

export const SendMessageValidator = z.object({
    fileId : z.string(),
    message : z.string()
})