// eslint-disable-next-line import/no-anonymous-default-export
export default {
  nav: {
    logo: "NF",
    links: [
      { text: "Technologies", to: "stack" },
      { text: "Projects", to: "mywork" },
      { text: "Contact", to: "mycontact" },
    ],
  },
  header: {
    img: process.env.PUBLIC_URL + "./assets/linkedin.jpg",
    imgPlaceholder:
      "data:image/png;base64,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",
    text: ["Hi!", "It's me Nathan.", "I am a "],
    typical: [
      "Software Developer 🖥",
      2000,
      "Problem Solver 💭",
      2000,
      "Life-Long Learner 📚",
      2000,
    ],
    btnText: "Discover More",
  },

  stack: {
    title: "Stack",
    tech: [
      {
        img: process.env.PUBLIC_URL + "./assets/rubylogo.png",
        alt: "ruby",
      },
      {
        img: process.env.PUBLIC_URL + "/logo512.png",
        alt: "react",
      },
      {
        img: process.env.PUBLIC_URL + "./assets/javascript.png",
        alt: "html javascript css",
      },
      {
        img: process.env.PUBLIC_URL + "./assets/node.png",
        alt: "node",
      },
      {
        img: process.env.PUBLIC_URL + "./assets/socketio.png",
        alt: "socket.io",
      },
    ],
    desc: `I have experience using JS, Node, React, Express, Ruby, Rails, HTML5, CSS to create full stack projects and I am constantly expanding my knowledge!`,
  },
  work: {
    title: "Projects",
    projects: [
      {
        title: "Projects",
        img: process.env.PUBLIC_URL + "./assets/pregame.png",
        imgPlaceholder:
          "data:image/png;base64,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",
        projectName: "The Pregame",
        desc: "The Pregame is a web application that allows friends to connect and play their favorite drinking games from the comfort of their own home! Created using React, Node.JS and Socket.io",
        link: {
          // site: "https://fedzendev.netlify.app/",
          github: "https://github.com/nfedzen/capstone",
        },
      },
      {
        title: "Projects",
        img: process.env.PUBLIC_URL + "./assets/portfolio-site.png",
        imgPlaceholder:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAAB3RJTUUH5AoTBgYsKRKkMwAABZhJREFUSMd1lltoXdcRhr+ZWeemu205kixZiuoUJ7Wb1E2cCENrIuI0hbZQKPShuFEgGAoN7UMf2hJcYoQTl+KGPuTBDyF5Kb1CwIZeQkubQBPLTmxHaWpHkaUEJ3Ksu85NZ5+91+rD0bF0LOeHxdp77TXz739mzewt3AZ3P3iAeLXUOfDwt37X2rNzOASEEEiqEYXZT2nr3oEPgRBABF/4ePqVyb/8/vHcls7C+xff2uTP3brwt/0jPDr2Q44c+vWB+KHhh9oH7xYfJ3ifEOIq2wrvICs3mM7uI9XWgVnQ4uT/Du4bnzxwcmLk1b/v/3P42rmXGnxa/eIPu77Hkd0PICptH/ae+3EOGy1+afe23bOXqBZXkN4Bhlrf5ttNv+XC+RvMtn+Z0vIK6hyp5cWmoUsfPLLQccWhMv79vn2Vb2b28MfFcQAU4PTeJ+jszmAm21XleVRGnUhPt1/g0Kf/ZGDiX3SwxJ3XXmPmwjLtc9dYev9d5q5OUVzO433AqfRgMqoqz5vJ9s7uDKf3PrEertatigitwXMiwIgGRBXUjEo2w7nJAltWKoy/HRNNJLz3cZEb3Vdxd+wkiWKqPsZrwBDnYUQAUX7UulXyAO714Sdp35pmeT76QRAO156DGmSoEu7o4b6OvbQYnJ0LXHxriu6+nTy8ZyczUYZSElNNYhIJmAoCAhwW4XL7tvQvXx9+EmcmFJar+9TkqboyBcxB3jIs9Ozlu/cOY6rc1/E4Hx3cT0tLOyslTyGC/8wXuJYvok4wVYRQj9BTheXqq2ZyweWanESVZCRAX/0QKOAsMNO0gzNxlqk33+UbQ19k15130dPVy8LCAp+MnePDa58w2NrMUrlE2lldSR19AiPpjF103ofPmdPHNh45BUwS4ighHuznUrFASz7whTaQRJiPlaqmyC29x+zlGbKZz5N1DqeC30gDX/c+/MaZyVCAgVtJFCGuVInyZdSleWM5ZrwC5pXllQxbSmUONZf4q6SZLKfwFuFMSWrhqqNfYMiZ0/uBzCYlePAeX41IIkgqyqoZIkKlEpORDJcXmpm551G6Ui3Ia//AUoKEBiUZ4H7nUtKg4iaJX9scqJF5D9UECBgw33cvY9t3EVq20nb1Cs3pFM4JfnOXGnDOae72JHqTYx3rd5LKEKeziCgCOCeY01p1NyLnzEnx1lUTsFhIGWQNgkAIoAI+gIigAkkIxEAiYE5wKcGHTSRF51IyvVmJoEFIm9DTpDiEShLwQFqFyAeaHQjK9YowDzinOKd4NrFMO3N6XmAVyDbUSag5nluNwXtUAgEIa0c0H0EchJI3BDCrK2lI/GqA886cnBWYAu5ZD5egXjCBnAuEBGTN1tdpAnhf6yGshcucIqFByVSAs3rpzYVpc3qmLtc5rRlYLb7lqlCKoRQL5VgoV2tzIVYKkdZyVFfihEY/euadscVp9+DB7QAvi/AdYBBqCTYTkiAUE0MDxLc5mw15NMGcIGGDisDL+7/SiZoJTS3uv2Zy0pxE5gRnipqsxUjQtTl8xkBqyq0eBSeRmZxc84u2PXeCuOoRlRfV5JSZeHWCGWSkRFbyWCiS0yJNnzEyslojqQ2vJqdE5cW46ml77sR6Nyv/4mcAHSIcM5EjE+WVzNxXC/QO5Ah+rQwD1C3qhqLC9JUSA2Nt9OdaKj6EUyFwFFjKPfMssOFHIvfMs0THfr4E/NSpXkbin+xIzw72px3BQ6kqzJUMH2rF2tUak7baF66SjkFaplKmv6p6/xJQSh893tBBbiJ99DhqUpKnR1/40/QHRyZnykuLKwmL+YRyOSFDRJaINBH5omcxn7CwnDB5vXT99PT0YXl69AU1aSDYqLoB/bvuIl9MWh7Ykz3etS31yK0vsxEhhGRmtvrKv8+vHuvtSlU+mpzYtOf/aHJKEOMikqoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTAtMTlUMDY6MDY6NDQtMDQ6MDC342kQAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEwLTE5VDA2OjA2OjQ0LTA0OjAwxr7RrAAAAABJRU5ErkJggg==",
        projectName: "Personal Portfolio Site",
        desc: "The portfolio site that you are currently on! Fully responsive with custom animations created using React and Tailwindcss.",
        link: {
          // site: "https://fedzendev.netlify.app/",
          github: "https://github.com/nfedzen/new-portfolio",
        },
      },
      {
        title: "Projects",
        img: process.env.PUBLIC_URL + "./assets/kingscup.png",
        imgPlaceholder:
          "data:image/png;base64,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",
        projectName: "King's Cup",
        desc: "To start the game, the cards are spread around the can. Each player takes turns pulling a card. The value of each card corresponds with a drinking action. Once the action is performed, the player puts their card in the tab of the beer can. If the can pops, the person who popped it drinks the beer. To apply that rule, each time you click on a card, there is a chance for the can to pop. The more clicks you take, the higher the chance of the can popping",
        link: {
          site: "https://kingscup.netlify.app/",
          github: "",
        },
      },
      {
        title: "Projects",
        img: process.env.PUBLIC_URL + "./assets/buzzkill.png",
        imgPlaceholder:
          "data:image/png;base64,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",
        projectName: "BuzzKill",
        desc: 'Have you ever had a bad time while under the influence of marijuana? Have you ever WANTED to have a bad time while under the influence of marijuana? If your answer to both of these questions was "yes" or "absolutely, say no more", then welcome yourself to the first and only website which let you discover strains of marijuana oriented toward having a bad time! Whether it is dizziness, dry eyes, anxiety, dry mouth, paranoia or a righteous combination of these five, Buzzkill has you covered, and even lets you specify by constituent strain. After making your selection, you can either navigate back to the list or return to the homepage to modify the symptoms you would like to experience.',
        link: {
          github: "https://github.com/nfedzen/BuzzKill",
        },
      },
      {
        title: "Projects",
        img: process.env.PUBLIC_URL + "./assets/powweather.png",
        imgPlaceholder:
          "data:image/png;base64,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",
        projectName: "Pow Weather",
        desc: 'Pow Weather is a CLI application for checking the weather and pow for your favorite Colorado Ski Resorts! Get up-to-date weather information for 22 ski resorts in CO so you and your friends can get shreddy with that fresh butter.',
        link: {
          github: "https://github.com/nfedzen/pow_weather",
        },
      },
    ],
  },
  contact: {
    title: "Contact Me!",
    desc: "If you'd like to chat or have a project you want to collaborate on, please don't hesistate to reach out!",
    socials: [
      {
        alt: "github",
        img: process.env.PUBLIC_URL + "./assets/github.png",
        link: "https://github.com/nfedzen"
      },
      {
        alt: "link",
        img: process.env.PUBLIC_URL + "./assets/linkedin-logo.png",
        link: "https://www.linkedin.com/in/nathan-fedzen/"
      },
      {
        alt: "gmail",
        img: process.env.PUBLIC_URL + "./assets/gmail.png",
        link: "mailto:nathanfedzen@gmail.com"
      },
    ],
    img: process.env.PUBLIC_URL + "./assets/linkedin.jpg",
    imgPlaceholder:
      "data:image/jpeg;base64,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",
  },
};
