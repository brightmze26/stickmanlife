export const textNodes = [
  {
    id: 1,
    title: "Start",
    text: "Arghhh, I'm so bored. Uh, hey human. Help me get rid of this boredom. Let's play together. You just need to direct me on what to do to get rid of this boredom. Let's gooooo!!",
    img: "./img/start.png",
    options: [
      {
        text: "Let's Go",
        nextText: 2,
      },
      {
        text: "Do you have an idea of your future activities?",
        nextText: 1.1,
      },
    ],
  },

  {
    id: 1.1,
    title: "Play",
    text: "Uhm, I'm a stick who has a lot of talent. There are many things I can do. Like fighting, sports, racing, and even my brain has above average logic. Is that cool? Ohyaaa, even I have a talent for approaching women. Maybe, we can start from fighting and sports. Come on.",
    img: "./img/play.png",
    options: [
      {
        text: "Sport",
        nextText: 5,
      },
      {
        text: "Fight",
        nextText: 2,
      },
    ],
  },

  {
    id: 2,
    title: "Fight",
    text: "Thank you human. Actually I am a fighter, let's find the enemy. But, I need advice. Do you use tools or just bare hands?",
    img: "./img/fight2.png",
    options: [
      {
        text: "Use tools",
        nextText: 3,
      },
      {
        text: "Bare hands",
        nextText: 3.3,
      },
    ],
  },

  {
    id: 3.3,
    title: "Fight",
    text: "Bare hand? Does not matter. When I was a baby, I hit 15 people with my own hands. In fact, three people died.",
    img: "./img/fight3.png",
    options: [
      {
        text: "Kill",
        nextText: 3.1,
      },
      {
        text: "Life",
        nextText: 3.2,
      },
    ],
  },

  {
    id: 3,
    title: "Fight",
    text: "Wow, I feel street fighter energy from you. Looks like I found an even opponent. Do you think I should kill him or let him live? If I were you, of course I would suggest letting him live. But, this all depends on your hands.",
    img: "./img/fight.png",
    options: [
      {
        text: "Kill",
        nextText: 3.1,
      },
      {
        text: "Life",
        nextText: 3.2,
      },
    ],
  },

  {
    id: 3.1,
    title: "Play",
    text: "I feel psychopathic energy from you. It's best not to continue this. Let's look for positive energy. Maybe like sports? or playing logic? Wow, this is just getting more exciting. I was not wrong in choosing you to help me get rid of this boredom. Let's do it.",
    img: "./img/play2.png",
    options: [
      {
        text: "Sport",
        nextText: 5,
      },
      {
        text: "Logic",
        nextText: 7,
      },
    ],
  },

  {
    id: 3.2,
    title: "Play",
    text: "I admire you human. You have a good heart. I'm touched. Forget it, let's do the next activity.",
    img: "./img/live.png",
    options: [
      {
        text: "Sport",
        nextText: 5,
      },
      {
        text: "Logic",
        nextText: 7,
      },
    ],
  },

  {
    id: 5,
    title: "Sports",
    text: "Good choice human. I am very talented in sports. I once achieved first place at Neptune in basketball and football. You want to see my talent? Don't hesitate, friends.",
    img: "./img/sport.png",
    options: [
      {
        text: "Football",
        nextText: 5.1,
      },
      {
        text: "Basketball",
        nextText: 5.2,
      },
    ],
  },

    {
    id: 5.1,
    title: "Sport",
    text: "GOALLL!!! See that bro, how good I am. CR7 is also nothing compared to me. Would you like to see it again? Oh don't. I don't want to seem arrogant, because I'm a kind and humble person hehe. We'd better move on to the next activity.",
    img: "./img/football.png",
    options: [
      {
        text: "Race",
        nextText: 8,
      },
      {
        text: "Logic",
        nextText: 7,
      },
    ],
  },

  {
    id: 5.2,
    title: "Sport",
    text: "Easy human. For your information, when I played basketball at Neptune I shot 100 kilometers. Let's continue with the next activity, bro.",
    img: "./img/basketball.png",
    options: [
      {
        text: "Race",
        nextText: 8,
      },
      {
        text: "Logic",
        nextText: 7,
      },
    ],
  },

  {
    id: 7,
    title: "Logic",
    text: "Hahahaha you want to play logic with me? I'm good at this field. No need to say much, let's get started. The problem is like this : I have three apples, I threw the one away, how many apples are left? Easy isn't it? just try it.",
    img: "./img/logic.png",
    options: [
      {
        text: "3",
        nextText: 7.1,
      },
      {
        text: "2",
        nextText: 7.2,
      },
    ],
  },

  {
    id: 7.1,
    title: "Logic",
    text: "Yes, right. Let's continue with the next activity.",
    img: "./img/true.png",
    options: [
      {
        text: "Next",
        nextText: 9,
      },
      {
        text: "See Again",
        nextText: 7,
      },
    ],
  },

  {
    id: 7.2,
    title: "Logic",
    text: "Hahaha, my logic is still higher than yours. You're still not careful enough, do you want to try again? or give up?",
    img: "./img/false.png",
    options: [
      {
        text: "Again",
        nextText: 7,
      },
      {
        text: "Skip",
        nextText: 9,
      },
    ],
  },

  {
    id: 9,
    title: "Play",
    text: "Um, I'm confused about what else to do. But, I still want to do activities with you. Oh yeah, I just remembered I still have some talent. Let's start.",
    img: "./img/play3.png",
    options: [
      {
        text: "Find Girlfriend",
        nextText: 10,
      },
      {
        text: "Race",
        nextText: 8,
      },
    ],
  },

  {
    id: 8,
    title: "Race",
    text: "ISN'T IT COOL? 10 years I have been assembling my own motorbikes and cars. Come on, try it.",
    img: "./img/race.png",
    options: [
      {
        text: "Motorcyle",
        nextText: 8.1,
      },
      {
        text: "Car",
        nextText: 8.2,
      },
    ],
  },

  {
    id: 8.1,
    title: "Race",
    text: "You see? How fast my motorbike is. My efforts to assemble it were not in vain. By the way, I'm tired. But still want to do one thing, I want to have a girlfriend. But it depends on you, whether you want to find me a girlfriend or should I just take a break.",
    img: "./img/motor.png",
    options: [
      {
        text: "Sleep",
        nextText: 12,
      },
      {
        text: "Find Girlfriend",
        nextText: 10,
      },
    ],
  },

  {
    id: 8.2,
    title: "Race",
    text: "You see? How fast my car is. My efforts to assemble it were not in vain. 5000 km/h bruhh. By the way, I'm tired. But still want to do one thing, I want to have a girlfriend. But it depends on you, whether you want to find me a girlfriend or should I just take a break.",
    img: "./img/car.png",
    options: [
      {
        text: "Sleep",
        nextText: 12,
      },
      {
        text: "Find Girlfriend",
        nextText: 10,
      },
    ],
  },

  {
    id: 10,
    title: "Find Girlfriend",
    text: "Thank you human. I would like to get your advice on how to talk to him.",
    img: "./img/girl.png",
    options: [
      {
        text: "You are such a beautiful angel. Do you want to be my girlfriend?",
        nextText: 10.1,
      },
      {
        text: "You are such a beautiful devil. Do you want to be my girlfriend?",
        nextText: 10.2,
      },
    ],
  },

  {
    id: 10.1,
    title: "Find Girlfriend",
    text: "Girlfriend: You are very romantic, dear, yes I want to be your girlfriend. Wow, you are very clever human, it seems you are better at seducing than me.",
    img: "./img/love.png",
    options: [
      {
        text: "Kiss",
        nextText: 20.1,
      },
      {
        text: "Hug",
        nextText: 20.2,
      },
    ],
  },

  {
    id: 20.1,
    title: "Kiss",
    text: "I am very grateful to you human. Maybe it's time for me to rest. Once again, thanks human. Have a nice day.",
    img: "./img/kiss.png",
    options: [
      {
        text: "Sleep",
        nextText: 12.1,
      },
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },

  {
    id: 20.2,
    title: "Hug",
    text: "I am very grateful to you human. Maybe it's time for me to rest. Once again, thanks human. Have a nice day.",
    img: "./img/hug.png",
    options: [
      {
        text: "Sleep",
        nextText: 12.1,
      },
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },

  {
    id: 13,
    title: "End",
    text: "I'm so sad and tired. Maybe it's time for me to take a break. Thank you human.",
    img: "./img/end.png",
    options: [
      {
        text: "Sleep",
        nextText: 12,
      },
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },

  {
    id: 10.2,
    title: "Find Girlfriend",
    text: "Thank you for the misleading advice from you human. I was almost stoned to death by this woman",
    img: "./img/break.png",
    options: [
      {
        text: "Again",
        nextText: 10,
      },
      {
        text: "End",
        nextText: 13,
      },
    ],
  },

  {
    id: 12,
    title: "Sleep",
    text: "zz zz zz (You can let it rest alone or you want to play again)",
    img: "./img/sleep.png",
    options: [
      {
        text: "Sleep",
        nextText: 12,
      },
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },

  {
    id: 12.1,
    title: "Sleep",
    text: "zz zz zz (You can let him rest with his girlfriend or you want to play again)",
    img: "./img/sleep2.png",
    options: [
      {
        text: "Sleep",
        nextText: 12.1,
      },
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },

  
];