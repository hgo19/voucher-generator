import { createPDF } from './helpers/pdf-generator'

export interface UserData {
  name: string
  email: string
  checkIn: string
  checkOut: string
  dailyRate: string
  total: string
}

export class VoucherGenerator {
  async execute (userData: UserData): Promise<void> {
    const base64Pdf = createPDF(userData)
  }
}
