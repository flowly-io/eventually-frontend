# eVentually

[eVentually](https://eventually-alpha.netlify.com) is a super Workflow events engine, that is designed to improve the events planning experience at [Monash University](https://monash.edu).

This was developed during [Hackamon 2019](https://monash.edu/students/hackamon).

You can also view our Pitch Deck [here](https://github.com/hackamon2019/pitch-deck)

## Stack

eVentually is super-powerful, we have 3 main components.

1. Frontend - this is located here, and deployments are integrated into Netlify.
2. [**Backend**](https://github.com/hackamon2019/backend) - this is a GraphQL communicating between the Frontend and our Database (this is the **core** engine of eVentually)
3. Database - we're running on Mongo Cloud in Singapore (AWS) - and has 3 shards running.

# Development

## Requirements

This is the frontend of the eVentually Platform, to develop you will need:

- NodeJS (Yarn & NVM recommended)

## To begin

1. Install dependencies

   ```bash
   npm install

   # or if you prefer yarn

   yarn
   ```

2. Start the project

   ```bash
   npm run start

   # or if you prefer yarn

   yarn start
   ```

# License

This project is licensed under MIT, to view the license see [LICENSE](./LICENSE)
