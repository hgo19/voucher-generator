import { emailClient } from './helpers/nodemailer-transport'
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
  async static execute (userData: UserData): Promise<void> {
    const base64Pdf = createPDF(userData)
    await emailClient.sendMail({
      from: process.env.EMAIL,
      to: userData.email,
      subject: 'Hotel Voucher',
      text: 'The file containing the information is attached',
      attachments: [{ path: base64Pdf }]
    })
  }
}
