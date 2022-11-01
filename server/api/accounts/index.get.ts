import { db } from '~~/lib/db'

export default defineEventHandler((event) => {
  try {
    return db.account.findMany({
      include: {
        CashAccount: true,
        InvestmentAccount: true,
      },
    })
  } catch (err) {
    console.error(err)
    sendInternalError(event, err)
  }
})
