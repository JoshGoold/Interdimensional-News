import React from "react";
import { useState, useEffect } from "react";

const Head = () => {
  const [story, setStory] = useState({
    Gender: "",
    Occupation: "",
    Age: "",
    Downside: "",
    Name: "",
    Married: "",
    Children: "",
    Words: [],
    Town: "",
    Anchor: ""
  });
  const [news, setNews] = useState("");
  const [day, setDay] = useState("")
  const [time, setTime] = useState("")
  const [universe, setUniverse] = useState("")
  const numberGenerator = () => {
    try {
      const variation = Math.floor(Math.random() * 1000 + 1);
      return variation;
    } catch (error) {
      console.error(e.message);
    }
  };

  useEffect(()=>{
    situationRoom()
    situationRoom()
  },[])

  const list = {
    Gender: ["Male", "Female"],
    Occupations: [
      "Bus Driver",
      "Elderly Citizen",
      "President",
      "Mcdonalds Worker",
      "Janitor",
      "Glue Salesman",
      "Professional Cat Herder",
      "Napkin Inspector",
      "Underwater Basket Weaver",
      "Glitter Engineer",
      "Official Snack Tester",
      "Professional Button Pusher",
      "Pigeon Whisperer",
      "Sock Matcher",
      "Avocado Ripener",
      
    ],
    Characters: [
      "Bill",
      "Steve",
      "Karen",
      "Carrol",
      "Terry",
      "Bob",
      "Humpfrey",
      "Carl",
      "Kim",
      "Stephanie",
      "Judy",
      "Fred",
      "Butch Flowers",
      "Anita Bath",
      "Harry Baals",
      "Dixie Normous",
      "Ben Dover",
      "Major Minor",
      "Ima Hogg", 
      "Sue Flay",
      "Anita Mann", 
      "Paige Turner",
      "Justin Thyme",  
      "Barry Cadabra",
    ],
    Downsides: [
      "Stupid",
      "Irratating",
      "Abnoxious",
      "Loud",
      "Severely Obese",
      "Raging Alcoholic",
      "Racist",
      "Impatient",
      "Inconsiderate",
      "Selfish",
      "Arrogant",
      "Unreliable",
      "Close-minded",
      "Overly Critical",
      "Dishonest",
      "Lazy",
      "Messy",
      "Domineering",
    ],
    Married: ["Married", "Not Married"],
    Children: [24, 5, 10, 2, 15, 4, 7, 12, 8],
    Age: Math.floor(Math.random() * 75 + 12),
    Words: {
      positive: [
        "elated", // overjoyed
        "happy",
        "joyful",
        "calm",
        "peaceful",
        "excited",
        "thrilled",
        "hopeful",
        "fond", // having a liking for something
        "bright", // cheerful and optimistic
      ],
      negative: [
        "sad",
        "angry",
        "scared",
        "frustrated",
        "disappointed",
        "gloomy", // dark and depressing
        "lonely",
        "bored",
        "anxious", // worried or uneasy
        "tired",
      ],
      descriptive: [
        "beautiful",
        "lovely",
        "ugly",
        "loud",
        "quiet",
        "soft",
        "rough",
        "bright", // referring to light
        "dark",
        "smooth",
      ],
    },
    Towns: [
      "Dinkum Flats, Australia",
      "Scratch Ankle, Alabama",
      "Lower Nowhere, California",
      "Truth or Consequences, New Mexico",
      "Boring, Oregon",
      "Looneyville, California",
      "Toad Suck, Arkansas",
      "Why Not, Mississippi",
      "Embarrass, Minnesota",
      "No Name, Colorado",
      "Ouchita, Oklahoma"
    ],
    Anchor: [
      "Just now:",
      "Breaking News:",
      "Urgent:",
      "Just In:",
      "Report:",
      "Scientists Discover:",
      "Officials Say:",
      "Analysis:",
      "Sources Claim:",
      "Landmark:",
      "Global:",
      "Wall Street:",
      "Tech Giant:",
      "Environmental Crisis:",
      "Researchers Find:",
      "New Study Shows:",
      "Election Update:",
      "International:",
      "Market Watch:",
      "BREAKING:",  
      "UPDATE:",
    ],
    Day: [
      "February 27",
      "October 5",
      "January 13",
      "November 11",
      "August 2",
      "May 17",
      "November 19",  
      "March 24",
      "July 12"
    ],
    Time: [
      "12:07 PM",
      "11:40 AM",
      "2:58 AM",
      "9:46 PM",
      "3:47 AM",
      "3:21 PM",
      "10:43 PM",
      "6:02 PM",
      "11:15 AM",
      "10:49 AM"
    ]
  };

  const situationRoom = () => {
    const number = numberGenerator();
    setUniverse(number)
    if (number % 2 === 0) {
      const Gender = Math.floor((Math.random() * 100) % 2 === 0)
        ? list.Gender[0]
        : list.Gender[1];
      const Age = list.Age;
      const Married =
        Math.floor(Math.random() * 100) % 2 === 0
          ? list.Married[0]
          : list.Married[1];
      const Children =
        list.Children[Math.floor(Math.random() * list.Children.length)];
      const Name =
        list.Characters[Math.floor(Math.random() * list.Characters.length)];
      const Downside =
        list.Downsides[Math.floor(Math.random() * list.Downsides.length)];
      const Occupation =
        list.Occupations[Math.floor(Math.random() * list.Occupations.length)];
        const Town = list.Towns[Math.floor(Math.random()*list.Towns.length)]
        const Anchor = list.Anchor[Math.floor(Math.random()*list.Anchor.length)]
        const day = list.Day[Math.floor(Math.random()*list.Day.length)]
        setDay(day)
        const time = list.Time[Math.floor(Math.random()*list.Time*length)]
        setTime(time)
      const words = []

      for(var i = 0; i < 10; i++){
        let word = "";
        if(i === 0){
         word = list.Words.descriptive[Math.floor(Math.random()*list.Words.descriptive.length)]
         words.push(word)
        }
        else if(i%2 === 0){
          word = list.Words.negative[Math.floor(Math.random()*list.Words.negative.length)]
          words.push(word)
        }
        else{
          word = list.Words.positive[Math.floor(Math.random()*list.Words.positive.length)]
          words.push(word)
        } 
        
      }

      setStory({
        Gender: Gender,
        Occupation: Occupation,
        Age: Age,
        Married: Married,
        Children: Children,
        Name: Name,
        Downside: Downside,
        Words: words,
        Town: Town,
        Anchor: Anchor
      });
    } else {
      const Gender = Math.floor((Math.random() * 100) % 2 === 0)
        ? list.Gender[0]
        : list.Gender[1];
      const Age = list.Age;
      const Married =
        Math.floor(Math.random() * 100) % 2 === 0
          ? list.Married[0]
          : list.Married[1];
      const Children =
        list.Children[Math.floor(Math.random() * list.Children.length)];
      const Name =
        list.Characters[Math.floor(Math.random() * list.Characters.length)];
      const Downside =
        list.Downsides[Math.floor(Math.random() * list.Downsides.length)];
      const Occupation =
        list.Occupations[Math.floor(Math.random() * list.Occupations.length)];
        const Town = list.Towns[Math.floor(Math.random()*list.Towns.length)]
        const Anchor = list.Anchor[Math.floor(Math.random()*list.Anchor.length)]
        const day = list.Day[Math.floor(Math.random()*list.Day.length)]
        setDay(day)
        const time = list.Time[Math.floor(Math.random()*list.Time*length)]
        setTime(time)
        const words = []

      for(var i = 0; i < 10; i++){
        let word = "";
        if(i === 0){
         word = list.Words.descriptive[Math.floor(Math.random()*list.Words.descriptive.length)]
         words.push(word)
        }
        else if(i%2 === 0){
          word = list.Words.positive[Math.floor(Math.random()*list.Words.positive.length)]
          words.push(word)
        }
        else{
          word = list.Words.negative[Math.floor(Math.random()*list.Words.negative.length)]
          words.push(word)
        } 
      }

      setStory({
        Gender: Gender,
        Occupation: Occupation,
        Age: Age,
        Married: Married,
        Children: Children,
        Name: Name,
        Downside: Downside,
        Words: words,
        Town: Town,
        Anchor: Anchor
      });
    }
    const Stories = [
      `${story.Anchor} a ${story.Age} year old ${story.Gender} was being ${
        story.Downside
      } ${story.Gender === "Male" ? "he" : "she"} says its because ${
        story.Gender === "Male" ? "he" : "she"
      } is a ${story.Occupation}, later we learn  ${
        story.Gender === "Male" ? "he" : "she"
      } is ${story.Married === "Yes" ? "Married" : "Not Married"} and has ${
        story.Children
      } children named ${story.Name}`,

      `${story.Anchor} in ${story.Town} a group of ${story.Children} ${story.Downside} 
       children were harrasing a group of ${story.Gender}s, the leader of the 
       group ${story.Name} says it was because they were ${story.Occupation}'s`,

      `${story.Anchor} ${story.Children} ${story.Gender} pre-school students robbed a 
      ${story.Age} year old ${story.Occupation}, ${story.Gender === "Male" ? "he" : "she"} was ${story.Married} and was 
      known for turning ${story.Age} people into ${story.Downside}'s`,

      `${story.Anchor} stay ${story.Words[Math.floor(Math.random()*story.Words.length)]} today in ${story.Town},
      ${story.Children} ${story.Downside} children were caught tormenting ${story.Name} a profound ${story.Occupation},
      all ${story.Children} have been arrested on the scene`,

      `${story.Anchor} in ${story.Town} a ${story.Words[Math.floor(Math.random()*story.Words.length)]} young ${story.Gender} was pretending
       to be a ${story.Occupation} which sparked a group of ${story.Age} ${story.Downside} protestors, we are now being told by ${story.Name}
       the key witness that he is  ${story.Words[Math.floor(Math.random()*story.Words.length)]} and hates people who are ${story.Words[Math.floor(Math.random()*story.Words.length)]}.`,

       `${story.Anchor} during a ${story.Occupation}'s meeting with a ${story.Words[Math.floor(Math.random()*story.Words.length)]} pre-school class in ${story.Town} the ${story.Gender}'s
       in the class called him ${story.Words[Math.floor(Math.random()*story.Words.length)]} he then broke down and admitted to suffering from being ${story.Downside},
       ${story.Name} the class clown decided to laugh at him for being ${story.Downside} and being ${story.Age}lbs
       overweight ${story.Name} then suffered from ${story.Children} bullet wounds to the chest.`,

       `${story.Anchor} today in ${story.Town} a dog park misunderstanding ignited ${story.Age} ${story.Words[Math.floor(Math.random()*story.Words.length)]} elderly citizens
       to start a cult in which they swore to destroy all ${story.Occupation}'s as they believe all are ${story.Downside}, ${story.Name} the indvidual who started all this ruckus,
       tells us that he is ${story.Words[Math.floor(Math.random()*story.Words.length)]} and thinks all ${story.Married === "Yes" ? "Married" : "Not Married"} couples should have atleast ${story.Children}
        ${story.Words[Math.floor(Math.random()*story.Words.length)]} children in hopes to make the world a better place.`,
      
        `${story.Anchor} a church located in ${story.Town} hosted an event which invited all ${story.Words[Math.floor(Math.random()*story.Words.length)]} suffering people from being ${story.Downside}
        local mayor ${story.Name} says he is ${story.Words[Math.floor(Math.random()*story.Words.length)]} and will be attending as long as his ${story.Children} minute
        massage appointment is with a ${story.Gender} otherwise he will send ${story.Age} ${story.Words[Math.floor(Math.random()*story.Words.length)]} children to ruin the party.`,

        `${story.Anchor} herds of ${story.Downside} ${story.Gender} citizens are profusely pooping on anyone named ${story.Name}'s lawn, the first victim of this attack ${story.Name} a local ${story.Occupation}
        belives this is ${story.Words[Math.floor(Math.random()*story.Words.length)]} and will be suing the city of ${story.Town} for ${story.Children} million dollars. 
        later we learn ${story.Gender === "Male" ? "his":"her"} lawn had been pooped on ${story.Age} times, a truly ${story.Words[Math.floor(Math.random()*story.Words.length)]} experience for all ${story.Name}'s
        in the area. `,

        `${story.Anchor} the yearly marathon run in ${story.Town} abruptly ended when ${story.Name} a local ${story.Occupation} sent ${story.Age} ${story.Words[Math.floor(Math.random()*story.Words.length)]}
         dementia patients to interrupt the ${story.Words[Math.floor(Math.random()*story.Words.length)]} participants. We are told ${story.Name} wished more people were
         ${story.Downside} and wanted to spread awareness. ${story.Children} ${story.Words[Math.floor(Math.random()*story.Words.length)]} ${story.Gender}'s peed on him in retaliation.`,

         `${story.Anchor} chaos is on the streets of ${story.Town} today after a ${story.Words[Math.floor(Math.random()*story.Words.length)]} ${story.Age} year old ${story.Gender} named ${story.Name} tamed ${story.Children} skunks 
         to torment the citizens. The mayor of the town is a known ${story.Downside} who decided to send a group of ${story.Age} ${story.Occupation} to irraticate the skunks.
         ${story.Name} said they are ${story.Words[Math.floor(Math.random()*story.Words.length)]} and wants to sue the town.`
    ];

    setNews(Stories[Math.floor(Math.random() * Stories.length)]);
  };

  return (
    <>
      <div className="">
        <div className="bg-red-500 px-2 py-2 text-3xl">
          <h1 className="text-white">Interdimensional News</h1>
        </div>
        <div className="bg-opacity-50 bg-slate-300 shadow-lg">
          <p className="px-2">
            With the click of a button you can have access to interdimensional
            news from around the multi-verse!
          </p>
        </div>
        <div className="bg-neutral-100 px-2 py-5">
          <div className="flex justify-center items-center my-4 ">
            <h1 className=" text-5xl border-b font-thin">Todays News</h1>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-green-400 rounded-md px-2 text-white hover:scale-105 hover:shadow-lg"
              onClick={situationRoom}
            >
              Next Story
            </button>
          </div>
          <div className="mx-4 flex justify-center my-5 items-center">
            <article className="text-center shadow-md px-2 py-8 relative bg-white lg:w-3/5">
              {news}
              <span className="absolute right-0 bottom-0 font-thin text-sm px-2 py-2">{day},{time} Universe {universe}</span>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
