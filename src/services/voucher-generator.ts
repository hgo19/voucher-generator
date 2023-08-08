export interface UserData {
  name: string
  email: string
  checkIn: Date
  checkOut: Date
  category: string
  dailyRate: string
  total: string
}

export class VoucherGenerator {
  async execute (userData: UserData): Promise<string> {
    return ''
  }
}
