# Serenity/JS 

## Prerequisites

Need to install jdk 11 (at least 8) for running the serenityBDD report

This project is clone from the template at 
https://github.com/serenity-js/serenity-js-cucumber-template


### Installation

Once you have the code on your computer, use your computer terminal to run the following command in the directory where you've cloned the project:
```
yarn
```

Create a .env file with the content
D7_VERIFY_BASE_URL=https://d7-verify.p.rapidapi.com
RAPID_API_TOKEN=<from https://dashboard.d7networks.com/verification-api#>
X_RAPIDAPI_KEY=<https://rapidapi.com/d7admin/api/d7-verify/>
## To run your tests
`yarn run test` runs test scenarios with the tag @test 

## To view the report after the testrun
`yarn run report`

references:
Need to sign up an account at D7 Network for the authorization token
https://dashboard.d7networks.com/accounts/login/


