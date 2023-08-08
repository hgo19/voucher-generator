import { type NextFunction, type Request, type Response } from 'express'
import { type UserData, type VoucherGenerator } from '../../services/voucher-generator'

export class VoucherController {
  private readonly _voucherGenerator: VoucherGenerator
  constructor (voucherGenerator: VoucherGenerator) {
    this._voucherGenerator = voucherGenerator
  }

  execute = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      const userData: UserData = req.body
      await this._voucherGenerator.execute(userData)
      return res.status(200).json({ message: 'Voucher sent on success' })
    } catch (error) {
      next(error)
    }
  }
}
