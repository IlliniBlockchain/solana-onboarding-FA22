export type CounterAnchor = {
  "version": "0.1.0",
  "name": "counter_anchor",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "counterAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "increase",
      "accounts": [
        {
          "name": "counterAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "increment",
          "type": "u64"
        }
      ]
    },
    {
      "name": "decrease",
      "accounts": [
        {
          "name": "counterAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "decrement",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "counter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u64"
          }
        ]
      }
    }
  ]
};

export const IDL: CounterAnchor = {
  "version": "0.1.0",
  "name": "counter_anchor",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "counterAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "increase",
      "accounts": [
        {
          "name": "counterAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "increment",
          "type": "u64"
        }
      ]
    },
    {
      "name": "decrease",
      "accounts": [
        {
          "name": "counterAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "decrement",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "counter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
