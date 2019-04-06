const events = [
    {
      _id: "5ca823ce7c2d7803c0d44759",
      name: "WIRED games night",
      organisers: [
        {
          _id: "5ca823ce7c2d7803c0d44759",
          firstname: "Ben",
          lastname: "Yap",
          email: "bwyap@outlook.com",
          userType: "STUDENT"
        }
      ],
      audiences: ["STUDENT"],
      maxCapacity: 50,
      capabilities: [
        {
          _id: "5ca823ce7c2d7803c0d44759",
          name: "Catering",
          description: "Food and drink for your event",
          checkpoints: [
            {
              description: "Allocate budget",
              done: true
            },
            {
              description: "Find suitable caterer",
              done: false
            },
            {
              description: "Order food from caterers",
              done: false
            },
            {
              description: "Pay caterers",
              done: false
            }
          ]
        },
        {
            _id: "5ca823ce7c2d7803c0d44759",
            name: "Bin",
            description: "Bin and drink for your event",
            checkpoints: [
              {
                description: "Allocate bin",
                done: false
              },
              {
                description: "Find suitable bin",
                done: true
              },
              {
                description: "Order Bin from caterers",
                done: true
              },
              {
                description: "Pay bin",
                done: false
              }
            ]
          }
      ],
      startDateTime: "2019-04-10T06:00:00.000Z",
      endDateTime: "2019-04-10T10:00:00.000Z"
    }
  ];

export default events;