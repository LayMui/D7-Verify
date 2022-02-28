import { DataTable, Given, Then, When } from '@cucumber/cucumber'
import { Actor } from '@serenity-js/core'
import { ChangeApiConfig } from '@serenity-js/rest'
import { SendOTP } from '../tasks/SendOTP'

Given(
  '{actor} is at the D7 verify url',
  async (actor: Actor) =>
    await actor.attemptsTo(
      ChangeApiConfig.setUrlTo(process.env.D7_VERIFY_BASE_URL)
    )
)

When('{pronoun} send OTP', async (actor: Actor, table: DataTable) => {
    const expiry = table.hashes()[0].expiry
    const message = table.hashes()[0].message
    const mobile = table.hashes()[0].mobile
    const sender_id = table.hashes()[0].sender_id
      await actor.attemptsTo(SendOTP.toMobileNumber(expiry, message, mobile, sender_id))
})

Then('{pronoun} is able to a OTP Verification', async (actor: Actor) => {
  //  await actor.attemptsTo()
})
