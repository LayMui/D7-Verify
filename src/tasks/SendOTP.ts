import { Log, Task } from '@serenity-js/core'
import { LastResponse, PostRequest, Send } from '@serenity-js/rest'

export const SendOTP = {
  toMobileNumber: (
    expiry: string,
    message: string,
    mobile: string,
    sender_id: string) => 
    Task.where(
       `#actor send OTP to mobile number`,
      Send.a(
        PostRequest.to('/send')
          .with({
            expiry: `${expiry}`,
            message: `${message}`,
            mobile: `${mobile}`,
            sender_id: `${sender_id}`,
          })
          .using({
            headers: {
             'authorization': 'Token ' + process.env.RAPID_API_TOKEN,
              'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
              'x-rapidapi-host': 'd7-verify.p.rapidapi.com',
              'Content-type': 'application/json',
            },
          })
      ),
        Log.the(LastResponse.body())
    ),
}
