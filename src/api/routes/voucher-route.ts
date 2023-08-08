/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { VoucherController } from '../controller/controller'
import { VoucherGenerator } from '../../services/voucher-generator'

const voucherRoute = Router()

const voucherGenerator = new VoucherGenerator()
const controller = new VoucherController(voucherGenerator)

voucherRoute.post('/', controller.execute)

export default voucherRoute
