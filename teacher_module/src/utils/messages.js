const initialGroups = [
  {
    id: 1,
    name: "Group 1",
    messages: [
      {
        id: 1,
        message:
          "Hi Mam, could you please share previous question papers? Thank you mam!",
        sender: false,
        time: "18:16",
      },
      {
        id: 2,
        message: "sure",
        sender: true,
        time: "18:16",
      },
      {
        id: 3,
        message:
          "I’ll share them in the group, so that everyone may prepare well",
        sender: true,
        time: "18:16",
      },
      {
        id: 4,
        message: "That would be great! Thanks a lot, Mam!",
        sender: false,
        time: "18:17",
      },
      {
        id: 5,
        message:
          "You're welcome! If you have any more questions, feel free to ask.",
        sender: true,
        time: "18:18",
      },
      {
        id: 6,
        message: "By the way, when is the next class scheduled?",
        sender: false,
        time: "18:19",
      },
      {
        id: 7,
        message: "The next class is on Monday at 10 AM. Don't forget!",
        sender: true,
        time: "18:20",
      },
      {
        id: 8,
        message: "Got it, thanks for the reminder!",
        sender: false,
        time: "18:21",
      },
    ],
  },

  {
    id: 2,
    name: "Group 2",
    messages: [
      {
        id: 1,
        message: "Hi Mam, is Gaurav sir present today?",
        sender: false,
        time: "18:16",
      },
      {
        id: 2,
        message: "No",
        sender: true,
        time: "18:16",
      },
      {
        id: 3,
        message: "He's on a medical leave for a week",
        sender: true,
        time: "18:16",
      },
      {
        id: 4,
        message:
          "Oh, I hope he gets well soon. Who will be taking his classes?",
        sender: false,
        time: "18:17",
      },
      {
        id: 5,
        message: "Mr. Sharma will be taking over his classes temporarily.",
        sender: true,
        time: "18:18",
      },
      {
        id: 6,
        message: "Alright, thanks for the information!",
        sender: false,
        time: "18:19",
      },
      {
        id: 7,
        message: "Is there anything else you would like to know?",
        sender: true,
        time: "18:20",
      },
      {
        id: 8,
        message:
          "No, that's all for now. I'll inform my classmates about the change.",
        sender: false,
        time: "18:21",
      },
      {
        id: 9,
        message: "Great! If you have any more questions, feel free to ask.",
        sender: true,
        time: "18:22",
      },
      {
        id: 10,
        message: "Sure, I'll keep that in mind. Thanks again!",
        sender: false,
        time: "18:23",
      },
      {
        id: 11,
        message: "You're welcome! Take care!",
        sender: true,
        time: "18:24",
      },
      {
        id: 12,
        message: "Hi, is the assignment due tomorrow?",
        sender: false,
        time: "18:25",
      },
      {
        id: 13,
        message: "No, it's due next week. Don't worry, you have time.",
        sender: true,
        time: "18:26",
      },
      {
        id: 14,
        message: "Phew! Thanks for clarifying.",
        sender: false,
        time: "18:27",
      },
      {
        id: 15,
        message: "Anytime! If you need help with anything, feel free to ask.",
        sender: true,
        time: "18:28",
      },
      {
        id: 16,
        message: "I appreciate that. Have a good day!",
        sender: false,
        time: "18:29",
      },
      {
        id: 17,
        message: "You too! Take care.",
        sender: true,
        time: "18:30",
      },
      {
        id: 18,
        message: "Hi, is the class canceled for today?",
        sender: false,
        time: "18:31",
      },
      {
        id: 19,
        message: "Yes, there's no class today. Enjoy your day!",
        sender: true,
        time: "18:32",
      },
      {
        id: 20,
        message:
          "Great! I'll catch up on some pending work. Thanks for letting me know.",
        sender: false,
        time: "18:33",
      },
    ],
  },
];

const initialDMs = [
  {
    id: 1,
    name: "Student 1",
    group: "Group 1",
    messages: [
      {
        id: 1,
        message:
          "Hi Mam, could you please share previous question papers? Thank you mam!",
        sender: false,
        time: "18:16",
      },
      {
        id: 2,
        message: "sure",
        sender: true,
        time: "18:16",
      },
      {
        id: 3,
        message:
          "I’ll share them in the group, so that everyone may prepare well",
        sender: true,
        time: "18:16",
      },
      {
        id: 4,
        message: "That would be great! Thanks a lot, Mam!",
        sender: false,
        time: "18:17",
      },
      {
        id: 5,
        message:
          "You're welcome! If you have any more questions, feel free to ask.",
        sender: true,
        time: "18:18",
      },
      {
        id: 6,
        message: "By the way, when is the next class scheduled?",
        sender: false,
        time: "18:19",
      },
      {
        id: 7,
        message: "The next class is on Monday at 10 AM. Don't forget!",
        sender: true,
        time: "18:20",
      },
      {
        id: 8,
        message: "Got it, thanks for the reminder!",
        sender: false,
        time: "18:21",
      },
    ],
  },

  {
    id: 2,
    name: "Student 2",
    group: "Group 2",
    messages: [
      {
        id: 1,
        message: "Hi Mam, is Gaurav sir present today?",
        sender: false,
        time: "18:16",
      },
      {
        id: 2,
        message: "No",
        sender: true,
        time: "18:16",
      },
      {
        id: 3,
        message: "He's on a medical leave for a week",
        sender: true,
        time: "18:16",
      },
      {
        id: 4,
        message:
          "Oh, I hope he gets well soon. Who will be taking his classes?",
        sender: false,
        time: "18:17",
      },
      {
        id: 5,
        message: "Mr. Sharma will be taking over his classes temporarily.",
        sender: true,
        time: "18:18",
      },
      {
        id: 6,
        message: "Alright, thanks for the information!",
        sender: false,
        time: "18:19",
      },
      {
        id: 7,
        message: "Is there anything else you would like to know?",
        sender: true,
        time: "18:20",
      },
      {
        id: 8,
        message:
          "No, that's all for now. I'll inform my classmates about the change.",
        sender: false,
        time: "18:21",
      },
      {
        id: 9,
        message: "Great! If you have any more questions, feel free to ask.",
        sender: true,
        time: "18:22",
      },
      {
        id: 10,
        message: "Sure, I'll keep that in mind. Thanks again!",
        sender: false,
        time: "18:23",
      },
      {
        id: 11,
        message: "You're welcome! Take care!",
        sender: true,
        time: "18:24",
      },
      {
        id: 12,
        message: "Hi, is the assignment due tomorrow?",
        sender: false,
        time: "18:25",
      },
      {
        id: 13,
        message: "No, it's due next week. Don't worry, you have time.",
        sender: true,
        time: "18:26",
      },
      {
        id: 14,
        message: "Phew! Thanks for clarifying.",
        sender: false,
        time: "18:27",
      },
      {
        id: 15,
        message: "Anytime! If you need help with anything, feel free to ask.",
        sender: true,
        time: "18:28",
      },
      {
        id: 16,
        message: "I appreciate that. Have a good day!",
        sender: false,
        time: "18:29",
      },
      {
        id: 17,
        message: "You too! Take care.",
        sender: true,
        time: "18:30",
      },
      {
        id: 18,
        message: "Hi, is the class canceled for today?",
        sender: false,
        time: "18:31",
      },
      {
        id: 19,
        message: "Yes, there's no class today. Enjoy your day!",
        sender: true,
        time: "18:32",
      },
      {
        id: 20,
        message:
          "Great! I'll catch up on some pending work. Thanks for letting me know.",
        sender: false,
        time: "18:33",
      },
    ],
  },
];

export {
    initialGroups,
    initialDMs
}
