import Image from "next/image";
import Accordion from "./_components/accordion";

export default function Home() {
  return (
    <main className="container px-4">
      <h1 className="text-center mt-6 text-3xl">
        Trips in Jordan
      </h1>
      <div>
        <h2 className="mb-7 mt-6">List of trips:</h2>
        <Accordion title="Full-day in Petra">
          <p className="mb-3">Let us take you to one of the 7 Wonders of the World - <b>Petra</b>
            <br />
            a Comfortable time-saving trip with an English-speaking driver will make your journey smooth and pleasant. 
          </p>
          <Image src="/images/petra.webp" alt="petra" width={800} height={550} />
          <p className="my-3">What’s to expect:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">07:00 Leave from Aqaba & head to Petra</li>
            <li className="ml-4">9:00 Petra</li>
            <li className="ml-4">15:00 Drive to Aqaba</li>
            <li className="ml-4">8:00 Aqaba</li>
          </ul>
          <p className="my-3">Included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">Private roundtrip transportation</li>
            <li className="ml-4">Bottled water</li>
            <li className="ml-4">English speaking driver</li>
            <li className="ml-4">Little Petra visit (optional)</li>
          </ul>
          <p className="my-3">Not included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">Local guides and admission fees</li>
            <li className="ml-4">Food</li>
          </ul>
          <p className="my-3">Lunch is available at the historical site (during the visit to Petra) /city of Wadi Musa (after visiting Petra)</p>
          <p className="my-3">Bring with you:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">Water bottle</li>
            <li className="ml-4">Snacks</li>
            <li className="ml-4">Hats</li>
            <li className="ml-4">Sunscreen</li>
          </ul>
          <p className="my-3">*Advising guests to purchase <a href="https://www.jordanpass.jo/" target="_blank">Jordan pass</a> to save the cost of the visa and enter the historical sites.</p>
          <p className="mt-3"><b>Pricing</b></p>
          <p className="mb-3">The price for the trip varies(depending on number of people) and calculated per person:</p>
          <ul className="list-disc">
            <li className="ml-4">1 Person - 100 JD</li>
            <li className="ml-4">2 people - 55 JD each</li>
            <li className="ml-4">3 people - 40 JD each</li>
            <li className="ml-4">4 people - 30 JD each</li>
          </ul>
        </Accordion>
        <Accordion title="FULL day in Petra + Wadi Rum (2 days)">
          <p className="mb-3">Contemplate the beauty of Petra and Wadi Rum during a two-day trip filled with fun and an unforgettable moments. </p>
          <div className="flex items-center gap-1">
            <Image src="/images/petra.webp" alt="petra" width={800} height={550}
              className="w-[45%] h-[117px] object-contain"
            />
            <Image src="/images/wadi-rum.jpg" alt="wadi rum" width={800} height={550} 
              className="w-[45%] h-[117px] object-contain"
            />
          </div>
          <p className="my-3">Day 1:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">6 am Leave Aqaba to Petra</li>
            <li className="ml-4">8 am Arrive at Petra</li>
            <li className="ml-4">3 pm Head to Wadi Rum</li>
            <li className="ml-4">5 pm Arrive at wadi rum</li>
            <li className="ml-4">6 pm Watch the sunset from the sunset viewpoint in desert wadi rum</li>
            <li className="ml-4">7 pm Popular dinner</li>
          </ul>
          <p className="my-3">Day 2:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">7 am next day breakfast</li>
            <li className="ml-4">8 am start the Jeep tour</li>
            <li className="ml-4">11 am back to Aqaba</li>
          </ul>
          <p className="my-3">Includes:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">All the transportations</li>
            <li className="ml-4">Private tent at Wadi Rum for individuals and shared tent from the couple and the groups Dinner and breakfast at the Bedouin camp</li>
            <li className="ml-4">3-hour jeep tour in Wadi Rum</li>
            <li>Water bottles</li>
            <li className="ml-4">English speaking driver (not a guide)</li>
          </ul>
          <p className="my-3">Not included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">Entry fees to the sites</li>
            <li className="ml-4">Guide on sites</li>
            <li className="ml-4">Snacks</li>
          </ul>
          <p className="my-3">Bring with you:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">Comfortable shoes</li>
            <li className="ml-4">Hat (to cover your head from the sun)</li>
            <li className="ml-4">Sunscreen</li>
            <li className="ml-4">Water (when visiting Petra)</li>
          </ul>
          <p className="mt-3"><b>Cancellation Policy</b></p>
          <p className="mb-3">The full amount will be refunded if the trip is canceled more than 24 before the scheduled trip time.</p>
          <p className="mt-3"><b>Pricing</b></p>
          <p className="mb-3">The price for the trip varies (depending on number of people) and calculated per person:</p>
          <ul className="list-disc">
            <li className="ml-4">1 Person - 270 JD</li>
            <li className="ml-4">2 people - 160 JD each</li>
            <li className="ml-4">3 people - 120 JD each</li>
            <li className="ml-4">4 people - 110 JD each</li>
          </ul>
        </Accordion>
        <Accordion title="FULL day in Petra + Wadi Rum">
          <p className="mb-3">
          Embark on an unforgettable journey with our full-day Petra and Wadi Rum trip, a mesmerizing 15-hour adventure that promises to transport you to some of the most extraordinary landscapes on the planet. This meticulously crafted expedition is designed for the adventurous soul seeking a truly unique and immersive experience.
          </p>
          <div className="flex items-center justify-between flex-wrap gap-1">
            <Image src="/images/petra.webp" alt="petra" width={800} height={550}
              className="w-[45%] h-[117px] object-contain"
            />
            <Image src="/images/wadi-rum.jpg" alt="wadi rum" width={800} height={550} 
              className="w-[45%] h-[117px] object-contain"
            />
            <Image src="/images/jeep.jpg" alt="jeep" width={800} height={550} 
              className="w-[45%] h-[117px] object-contain"
            />
          </div>
          <p className="my-3">What to expect:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">6:00 leave Aqaba to Petra</li>
            <li className="ml-4">8:30 arrive at Petra</li>
            <li className="ml-4">13:00 head to Wadi Rum</li>
            <li className="ml-4">15:00 arrive at wadi rum +2 hours jeep tour</li>
            <li className="ml-4">17:00 head to Aqaba</li>
            <li className="ml-4">18:30 arrive at Aqaba</li>
          </ul>
          <p className="mt-3"><b>Pricing</b></p>
          <p className="mb-3">The price for the trip varies (depending on number of people) and calculated per person:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">1 Person - 175 JD</li>
            <li className="ml-4">2 people - 95 JD each</li>
            <li className="ml-4">3 people - 65 JD each</li>
            <li className="ml-4">4 people - 55 JD each</li>
          </ul>
          <p className="my-3">Includes:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">All the transportations</li>
            <li className="ml-4">2-hour jeep tour in Wadi Rum</li>
            <li className="ml-4">Water bottles</li>
            <li className="ml-4">English speaking driver (not a guide)</li>
          </ul>
          <p className="my-3">Not included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">Entry fees to the sites</li>
            <li className="ml-4">Guide on sites</li>
            <li className="ml-4">Snacks</li>
          </ul>
          <p className="my-3">Bring with you:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">Comfortable shoes</li>
            <li className="ml-4">Hat (to cover your head from the sun)</li>
            <li className="ml-4">Sunscreen</li>
            <li className="ml-4">Water (when visiting Petra)</li>
          </ul>
          <p className="mt-3">*time is flexible based on agreement of your travel buddies (e.g. the trip can be started at 5am, etc)</p>
        </Accordion>
        <Accordion title="Overnight Stay + FULL Jeep tour in Wadi Rum">
          <div className="flex items-center justify-between flex-wrap gap-1 mb-3">
            <Image src="/images/Camels.jpg" alt="petra" width={800} height={550}
              className="w-[45%] h-[117px] object-contain"
            />
            <Image src="/images/wadi-rum.jpg" alt="wadi rum" width={800} height={550} 
              className="w-[45%] h-[117px] object-contain"
            />
            <Image src="/images/jeep.jpg" alt="jeep" width={800} height={550} 
              className="w-[45%] h-[117px] object-contain"
            />
            <Image src="/images/wadi-rum2.jpg" alt="jeep" width={800} height={550} 
              className="w-[45%] h-[117px] object-contain"
            />
          </div>
          <p className="mb-3"><b>Pricing: 65 JD / person</b></p>
          <p>What’s included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">FULL Jeep tour in Wadi Rum</li>
            <li className="ml-4">Overnight Stay at the Camp</li>
            <li className="ml-4">Breakfast, Lunch & Dinner</li>
            <li className="ml-4">Pick up & drop off at Wadi Rum Village</li>
          </ul>
          <p className="my-3">Not included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">Transportation to and from Wadi Rum Village</li>
            <li className="ml-4">Entrance & drop off at Wadi Rum</li>
          </ul>
          <p className="mt-3">*<a href="https://www.jordanpass.jo/" target="_blank">Jordan pass</a> covers the entrance fee</p>
        </Accordion>
        <Accordion title="Overnight Stay + HALF day Jeep tour in Wadi Rum">
        <div className="flex items-center justify-between flex-wrap gap-1 mb-3">
            <Image src="/images/Camels.jpg" alt="petra" width={800} height={550}
              className="w-[45%] h-[117px] object-contain"
            />
            <Image src="/images/wadi-rum.jpg" alt="wadi rum" width={800} height={550} 
              className="w-[45%] h-[117px] object-contain"
            />
            <Image src="/images/wadi-rum-jeep-tour.jpg" alt="jeep" width={800} height={550} 
              className="w-[45%] h-[117px] object-contain"
            />
            <Image src="/images/wadi-rum2.jpg" alt="jeep" width={800} height={550} 
              className="w-[45%] h-[117px] object-contain"
            />
          </div>
          <p className="mb-3"><b>Pricing: 50 JD / person</b></p>
          <p className="mb-3">What’s included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">HALF Jeep tour in Wadi Rum</li>
            <li className="ml-4">Overnight Stay at the Camp</li>
            <li className="ml-4">Breakfast and Dinner</li>
            <li className="ml-4">Pick up & drop off at Wadi Rum Village</li>
          </ul>
          <p className="my-3">Not included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">Transportation to and from Wadi Rum Village</li>
            <li className="ml-4">Entrance & drop off at Wadi Rum</li>
          </ul>
          <p className="mt-3">*<a href="https://www.jordanpass.jo/" target="_blank">Jordan pass</a> covers the entrance fee</p>
        </Accordion>
        <Accordion title="Tour to Wadi al-Mujib and Dead Sea">
          <p className="mb-3">Discover different historical on this private half-day tour. Experience the canyon hike and swim at the lowest point on earth.</p>
          <div className="flex items-center justify-between flex-wrap gap-1 mb-3">
            <Image src="/images/wadi-mujib.jpg" alt="petra" width={800} height={550}
              className="w-[45%] h-[117px] object-contain"
            />
            <Image src="/images/mujib2.jpg" alt="wadi rum" width={800} height={550} 
              className="w-[45%] h-[117px] object-contain"
            />
            <Image src="/images/dead-sea.jpg" alt="jeep" width={800} height={550} 
              className="w-[45%] h-[117px] object-contain"
            />
            <Image src="/images/dead-sea2.jpg" alt="jeep" width={800} height={550} 
              className="w-[45%] h-[117px] object-contain"
            />
          </div>
          <p className="mb-3">What to expect:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">07:00 Departure from Aqaba</li>
            <li className="ml-4">10:00 Arrive at Wadi Al Mujib</li>
            <li className="ml-4">12:00 Leave for the Dead Sea salt beach</li>
            <li className="ml-4">13:00 Arrive at Salt Beach and have free time to swim</li>
            <li className="ml-4">14:30 Lunch break (Optional)</li>
            <li className="ml-4">20:00 Head back to Aqaba</li>
          </ul>
          <p className="mb-1">*The departure time is flexible (e.g. the trip can start at 6, 7 AM, etc.)</p>
          <p className="mt-3"><b>Pricing</b></p>
          <p className="mb-3">The price for the trip varies (depending on number of people) and calculated per person:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">1 Person - 150 JD</li>
            <li className="ml-4">2 people - 80 JD each</li>
            <li className="ml-4">3 people - 55 JD each</li>
            <li className="ml-4">4 people - 45 JD each</li>
          </ul>
          <p className="mb-3">What’s included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">Private roundtrip transportation</li>
            <li className="ml-4">Bottled water</li>
            <li className="ml-4">English speaking driver</li>
            <li className="ml-4">Pick up & drop off at Wadi Rum Village</li>
          </ul>
          <p className="my-3">Not included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">Admission fees* Entrance fees to wadi al Mujib are not included in <a href="https://www.jordanpass.jo/" target="_blank">Jordan pass</a></li>
            <li className="ml-4">Food</li>
          </ul>
          <p className="mt-3">*Advising guests to have Breakfast at the hostel before start trip.</p>
          <p className="my-3">Bring with you:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">Swimming suit</li>
            <li className="ml-4">Hat (to cover your head from the sun)</li>
            <li className="ml-4">Sunscreen</li>
            <li className="ml-4">Towel</li>
            <li className="ml-4">Comfortable shoes</li>
          </ul>
        </Accordion>
        <Accordion title="Wadi Rum, Petra, Wadi al Mujib,Dead Sea">
        <div className="flex items-center justify-between flex-wrap gap-1 mb-3">
            <Image src="/images/wadi-rum.jpg" alt="petra" width={800} height={550}
              className="w-[45%] h-[117px] object-contain"
            />
            <Image src="/images/mujib2.jpg" alt="wadi rum" width={800} height={550} 
              className="w-[45%] h-[117px] object-contain"
            />
            <Image src="/images/dead-sea2.jpg" alt="jeep" width={800} height={550} 
              className="w-[45%] h-[117px] object-contain"
            />
            <Image src="/images/petra.webp" alt="jeep" width={800} height={550} 
              className="w-[45%] h-[117px] object-contain"
            />
          </div>
          <p>3 Days and 2 nights Trip</p>
          <p className="my-3">Day 1:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">7:00 Leve Aqaba for Wadi Al Mujib</li>
            <li className="ml-4">10:30 Arrive at Wadi Al Mujib</li>
            <li className="ml-4">13:00 Drive to the Dead Sea</li>
            <li className="ml-4">13:30 Arrive at Salt Beach and have free time to swim</li>
            <li className="ml-4">15:00 Lunch break</li>
            <li className="ml-4">15:30 Drive to Petra</li>
            <li className="ml-4">17:30 Arrive Little Petra</li>
            <li className="ml-4">19:00 Arrive at the hotel/hostel in Petra check in the rooms</li>
            <li className="ml-4">20:00 Dinner</li>
          </ul>
          <p className="my-3">Day 2:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">06:30 Start the Hike at Petra from the visitor centre</li>
            <li className="ml-4">13:30 Drive to Wadi Rum</li>
            <li className="ml-4">15:30 Arrive to Wai Rum and drive by 4*4 car to the camp & the sunset point</li>
            <li className="ml-4">16:30 Watch the sunset from the sunset point</li>
            <li className="ml-4">18:00 Bedouin dinner</li>
            <li className="ml-4">19:00 Stargazing and chill time</li>
          </ul>
          <p className="my-3">Day 3:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">05:30 Watch the sunset (Option)</li>
            <li className="ml-4">08:00 Breakfast</li>
            <li className="ml-4">09:00 Start the Jeep tour</li>
            <li className="ml-4">12:00 Head to Aqaba </li>
            <li className="ml-4">13:30 Arrive to Aqaba </li>
            <li className="ml-4">15:00 lunch at Hostel</li>
          </ul>
          <p className="mt-3"><b>Pricing</b></p>
          <p className="mb-3">The price for the trip varies (depending on number of people) and calculated per person:</p>
          <ul className="list-disc">
            <li className="ml-4">1 Person - 450 JD</li>
            <li className="ml-4">2 people - 280 JD each</li>
            <li className="ml-4">3 people - 220 JD each</li>
            <li className="ml-4">4 people - 190 JD each</li>
          </ul>
          <p className="my-3">Includes:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">All the transportations</li>
            <li className="ml-4">Lunch</li>
            <li className="ml-4">Accommodation in Petra (private room or dorm bed upon availability, dinner + breakfast or lunch box)</li>
            <li className="ml-4">Private tent at Wadi Rum for individuals and shared tent from the couple and the groups</li>
            <li className="ml-4">Dinner and breakfast at the Bedouin camp</li>
            <li className="ml-4">3-hour jeep tour in Wadi Rum</li>
            <li className="ml-4">Lunch in Aqaba</li>
            <li className="ml-4">Water bottles</li>
            <li className="ml-4">English-speaking driver (not a guide)</li>
          </ul>
          <p className="my-3">Not included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">Entry fees to the sites *Wadi al Mujib is not included in <a href="https://www.jordanpass.jo/" target="_blank">Jordan pass</a></li>
            <li className="ml-4">Guide on sites</li>
            <li className="ml-4">Snacks</li>
          </ul>
          <p className="my-3">Bring with you:</p>
          <ul className="list-disc mb-1">
            <li className="ml-4">Comfortable shoes</li>
            <li className="ml-4">Hat (to cover your head from the sun)</li>
            <li className="ml-4">Sunscreen</li>
            <li className="ml-4">Swimming suit</li>
          </ul>
          <p className="mt-3">*Advising guests to have breakfast at the hostel before
          starting the trip</p>
        </Accordion>
      </div>
    </main>
  );
}
