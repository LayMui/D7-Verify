Feature: Generate OTP
In order to generate and send OTP to Mobile number
As a mobile user James
James wants to get OTP Verification for successful submission

Background:
    Given James is at the D7 verify url

Rule: Able to send OTP to mobile number
@test
Scenario: Able to send OTP to mobile number
    When he send OTP 
    | expiry | message                 | mobile       | sender_id |
    | 900    | Your otp code is {code} | 971562316353 | SMSInfo   |
    Then he is able to get OTP verification

  
  