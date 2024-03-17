const postsData = [
    {
        "id": 1,
        "creature": 1,
        "content": "I love you yosra a lot, and I will never leave you <3",
        "picture": "http://placekitten.com/200/300",
        "createdAt": "03/17/2024 01:00",
        "paws": [
            { "userId": 2 },
            { "userId": 3 },
            { "userId": 4 }
        ],
        "comments": [
            { "creatorId": 2, "content": "You look cute together" },
            { "creatorId": 3, "content": "You look cute together" }
        ]
    },
    {
        "id": 2,
        "creature": 1,
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "picture": "http://placekitten.com/200/300",
        "createdAt": "03/17/2024 02:00",
        "paws": [
            { "userId": 3 },
            { "userId": 4 },
            { "userId": 5 }
        ],
        "comments": [
            { "creatorId": 3, "content": "Nice post!" },
            { "creatorId": 4, "content": "Keep it up!" }
        ]
    },
    {
        "id": 3,
        "creature": 2,
        "content": "Vestibulum nec sapien id libero lacinia viverra.",
        "picture": "http://placekitten.com/200/300",
        "createdAt": "03/17/2024 03:00",
        "paws": [
            { "userId": 4 },
            { "userId": 5 },
            { "userId": 6 }
        ],
        "comments": [
            { "creatorId": 4, "content": "Great post!" },
            { "creatorId": 5, "content": "Amazing content!" }
        ]
    },
    {
        "id": 4,
        "creature": 2,
        "content": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        "picture": "http://placekitten.com/200/300",
        "createdAt": "03/17/2024 04:00",
        "paws": [
            { "userId": 5 },
            { "userId": 6 },
            { "userId": 7 }
        ],
        "comments": [
            { "creatorId": 5, "content": "Nice picture!" },
            { "creatorId": 6, "content": "Awesome content!" }
        ]
    },
    {
        "id": 5,
        "creature": 3,
        "content": "Integer feugiat, turpis id consectetur tincidunt, mauris nisi vehicula odio, id tincidunt purus ante eget lectus.",
        "picture": "http://placekitten.com/200/300",
        "createdAt": "03/17/2024 05:00",
        "paws": [
            { "userId": 6 },
            { "userId": 7 },
            { "userId": 8 }
        ],
        "comments": [
            { "creatorId": 6, "content": "Great job!" },
            { "creatorId": 7, "content": "Amazing post!" }
        ]
    },
    {
        "id": 6,
        "creature": 3,
        "content": "Donec euismod augue quis leo convallis eleifend.",
        "picture": "http://placekitten.com/200/300",
        "createdAt": "03/17/2024 06:00",
        "paws": [
            { "userId": 7 },
            { "userId": 8 },
            { "userId": 9 }
        ],
        "comments": [
            { "creatorId": 7, "content": "Nice one!" },
            { "creatorId": 8, "content": "Keep it up!" }
        ]
    },
    {
        "id": 7,
        "creature": 4,
        "content": "Curabitur ultricies felis id enim tempor, in congue velit dictum.",
        "picture": "http://placekitten.com/200/300",
        "createdAt": "03/17/2024 07:00",
        "paws": [
            { "userId": 8 },
            { "userId": 9 },
            { "userId": 10 }
        ],
        "comments": [
            { "creatorId": 8, "content": "Great content!" },
            { "creatorId": 9, "content": "Awesome post!" }
        ]
    },
    {
        "id": 8,
        "creature": 4,
        "content": "Quisque at mauris quis velit gravida semper.",
        "picture": "http://placekitten.com/200/300",
        "createdAt": "03/17/2024 08:00",
        "paws": [
            { "userId": 9 },
            { "userId": 10 },
            { "userId": 1 }
        ],
        "comments": [
            { "creatorId": 9, "content": "Nice picture!" },
            { "creatorId": 10, "content": "Amazing content!" }
        ]
    },
    {
        "id": 9,
        "creature": 5,
        "content": "Aenean vitae risus dictum, tempor elit id, vehicula nulla.",
        "picture": "http://placekitten.com/200/300",
        "createdAt": "03/17/2024 09:00",
        "paws": [
            { "userId": 10 },
            { "userId": 1 },
            { "userId": 2 }
        ],
        "comments": [
            { "creatorId": 10, "content": "Great post!" },
            { "creatorId": 1, "content": "Nice one!" }
        ]
    },
    {
        "id": 10,
        "creature": 5,
        "content": "Duis tincidunt libero at nibh ultricies, ut cursus lorem malesuada.",
        "picture": "http://placekitten.com/200/300",
        "createdAt": "03/17/2024 10:00",
        "paws": [
            { "userId": 1 },
            { "userId": 2 },
            { "userId": 3 }
        ],
        "comments": [
            { "creatorId": 1, "content": "Nice content!" },
            { "creatorId": 2, "content": "Great job!" }
        ]
    }
]

export default postsData;