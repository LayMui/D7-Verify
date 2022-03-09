import { Ensure, equals } from '@serenity-js/assertions'
import { Task } from '@serenity-js/core'
import { LastResponse } from '@serenity-js/rest'

export const VerifyOTP = {
  hasSuccessfulStatus: (statusCode: number) =>
    Task.where(
      `#actor verify OTP is successful`,
      Ensure.that(LastResponse.status(), equals(statusCode))
    ),
}
