import { jsPDF } from 'jspdf'
import { type UserData } from '../voucher-generator'

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'cm',
  format: 'a4'
})

export const createPDF = (userData: UserData): string => {
  const { name, email, checkIn, checkOut, dailyRate, total } = userData
  // Insert Title
  doc.setFontSize(50)
  doc.text('Voucher', 1.5, 3.5)

  // Add Lines
  doc.setLineWidth(0.05)
  doc.line(1, 4, 20, 4)
  doc.line(1, 9.5, 20, 9.5)

  // Add Text
  doc.setFontSize(10)
  doc.text(`
  Nome:  ${name}
  Email:  ${email}
  Data de CheckIn:  ${checkIn}
  Data de CheckOut:  ${checkOut}
  Custo da Diária:  ${dailyRate}`, 2, 5)
  doc.setFontSize(15)
  doc.text(`Total: ${total}`, 15, 9)

  // Get an base64 output
  const pdfOutput = doc.output('datauristring')
  return pdfOutput
}
