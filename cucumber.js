module.exports = {
  default: `
        --publish-quiet
        --require=src/**/*.ts
        --require-module=ts-node/register
        --format=@serenity-js/cucumber
        --world-parameters={"baseApiUrl":"https://community-open-weather-map.p.rapidapi.com"}
    `,
}
