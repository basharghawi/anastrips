/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Accordion from "./_components/accordion";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <h1 className="text-center mt-6 text-3xl">
        Trips in Jordan
      </h1>
      <div className="max-w-screen-sm mx-auto">
        <h2 className="mb-7 mt-6">List of trips:</h2>
        <Accordion title="Full-day in Petra">
          <p className="mb-3">Let us take you to one of the 7 Wonders of the World - <b>Petra</b>
            <br />
            a Comfortable time-saving trip with an English-speaking driver will make your journey smooth and pleasant.
          </p>
          <Image src="/images/petra.webp" alt="petra" width={800} height={550} />
          <p className="my-3">What’s to expect:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">7:00 AM Leave from Aqaba & head to Petra</li>
            <li className="ml-5">9:00 AM Petra</li>
            <li className="ml-5">3:00 PM Drive to Aqaba</li>
            <li className="ml-5">8:00 PM Aqaba</li>
          </ul>
          <p className="my-3">Included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">Private roundtrip transportation</li>
            <li className="ml-5">Bottled water</li>
            <li className="ml-5">English speaking driver</li>
            <li className="ml-5">Little Petra visit (optional)</li>
          </ul>
          <p className="my-3">Not included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">Local guides and admission fees</li>
            <li className="ml-5">Food</li>
          </ul>
          <p className="my-3">Lunch is available at the historical site (during the visit to Petra) /city of Wadi Musa (after visiting Petra)</p>
          <p className="my-3">Bring with you:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">Water bottle</li>
            <li className="ml-5">Snacks</li>
            <li className="ml-5">Hats</li>
            <li className="ml-5">Sunscreen</li>
          </ul>
          <p className="my-3">*Advising guests to purchase <a href="https://www.jordanpass.jo/" target="_blank">Jordan pass</a> to save the cost of the visa and enter the historical sites.</p>
          <p className="mt-3"><b>Pricing</b></p>
          <p className="mb-3">The price for the trip varies(depending on number of people) and calculated per person:</p>
          <ul className="list-disc">
            <li className="ml-5">1 Person - 100 JD</li>
            <li className="ml-5">2 people - 55 JD each</li>
            <li className="ml-5">3 people - 40 JD each</li>
            <li className="ml-5">4 people - 30 JD each</li>
          </ul>
        </Accordion>
        <Accordion title="FULL day in Petra + Wadi Rum (2 days)">
          <p className="mb-3">Contemplate the beauty of Petra and Wadi Rum during a two-day trip filled with fun and an unforgettable moments. </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-1">
              <Image src="/images/petra.webp" alt="petra" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/wadi-rum.jpg" alt="wadi rum" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="my-3">Day 1:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">6 am Leave Aqaba to Petra</li>
            <li className="ml-5">8 am Arrive at Petra</li>
            <li className="ml-5">3 pm Head to Wadi Rum</li>
            <li className="ml-5">5 pm Arrive at wadi rum</li>
            <li className="ml-5">6 pm Watch the sunset from the sunset viewpoint in desert wadi rum</li>
            <li className="ml-5">7 pm Popular dinner</li>
          </ul>
          <p className="my-3">Day 2:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">7 am next day breakfast</li>
            <li className="ml-5">8 am start the Jeep tour</li>
            <li className="ml-5">11 am back to Aqaba</li>
          </ul>
          <p className="my-3">Includes:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">All the transportations</li>
            <li className="ml-5">Private tent at Wadi Rum for individuals and shared tent from the couple and the groups Dinner and breakfast at the Bedouin camp</li>
            <li className="ml-5">3-hour jeep tour in Wadi Rum</li>
            <li>Water bottles</li>
            <li className="ml-5">English speaking driver (not a guide)</li>
          </ul>
          <p className="my-3">Not included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">Entry fees to the sites</li>
            <li className="ml-5">Guide on sites</li>
            <li className="ml-5">Snacks</li>
          </ul>
          <p className="my-3">Bring with you:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">Comfortable shoes</li>
            <li className="ml-5">Hat (to cover your head from the sun)</li>
            <li className="ml-5">Sunscreen</li>
            <li className="ml-5">Water (when visiting Petra)</li>
          </ul>
          <p className="mt-3"><b>Cancellation Policy</b></p>
          <p className="mb-3">The full amount will be refunded if the trip is canceled more than 24 before the scheduled trip time.</p>
          <p className="mt-3"><b>Pricing</b></p>
          <p className="mb-3">The price for the trip varies (depending on number of people) and calculated per person:</p>
          <ul className="list-disc">
            <li className="ml-5">1 Person - 270 JD</li>
            <li className="ml-5">2 people - 160 JD each</li>
            <li className="ml-5">3 people - 120 JD each</li>
            <li className="ml-5">4 people - 110 JD each</li>
          </ul>
          <p className="my-3">*Advising guests to purchase <a href="https://www.jordanpass.jo/" target="_blank">Jordan pass</a> to save the cost of the visa and enter the historical sites.</p>
        </Accordion>
        <Accordion title="FULL day in Petra + Wadi Rum">
          <p className="mb-3">
            Embark on an unforgettable journey with our full-day Petra and Wadi Rum trip, a mesmerizing 15-hour adventure that promises to transport you to some of the most extraordinary landscapes on the planet. This meticulously crafted expedition is designed for the adventurous soul seeking a truly unique and immersive experience.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-1">
              <Image src="/images/petra.webp" alt="petra" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/wadi-rum.jpg" alt="wadi rum" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/jeep.jpg" alt="jeep" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="my-3">What to expect:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">6:00 AM leave Aqaba to Petra</li>
            <li className="ml-5">8:30 AM arrive at Petra</li>
            <li className="ml-5">01:00 PM head to Wadi Rum</li>
            <li className="ml-5">03:00 PM arrive at wadi rum +2 hours jeep tour</li>
            <li className="ml-5">05:00 PM head to Aqaba</li>
            <li className="ml-5">06:30 PM arrive at Aqaba</li>
          </ul>
          <p className="mt-3"><b>Pricing</b></p>
          <p className="mb-3">The price for the trip varies (depending on number of people) and calculated per person:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">1 Person - 175 JD</li>
            <li className="ml-5">2 people - 95 JD each</li>
            <li className="ml-5">3 people - 65 JD each</li>
            <li className="ml-5">4 people - 55 JD each</li>
          </ul>
          <p className="my-3">Includes:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">All the transportations</li>
            <li className="ml-5">2-hour jeep tour in Wadi Rum</li>
            <li className="ml-5">Water bottles</li>
            <li className="ml-5">English speaking driver (not a guide)</li>
          </ul>
          <p className="my-3">Not included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">Entry fees to the sites</li>
            <li className="ml-5">Guide on sites</li>
            <li className="ml-5">Snacks</li>
          </ul>
          <p className="my-3">Bring with you:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">Comfortable shoes</li>
            <li className="ml-5">Hat (to cover your head from the sun)</li>
            <li className="ml-5">Sunscreen</li>
            <li className="ml-5">Water (when visiting Petra)</li>
          </ul>
          <p className="mt-3">*time is flexible based on agreement of your travel buddies (e.g. the trip can be started at 5am, etc)</p>
          <p className="my-3">*Advising guests to purchase <a href="https://www.jordanpass.jo/" target="_blank">Jordan pass</a> to save the cost of the visa and enter the historical sites.</p>
        </Accordion>
        <Accordion title="Overnight Stay + FULL Jeep tour in Wadi Rum">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="col-span-1">
              <Image src="/images/Camels.jpg" alt="petra" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/wadi-rum.jpg" alt="wadi rum" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/jeep.jpg" alt="jeep" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/wadi-rum2.jpg" alt="jeep" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="mb-3"><b>Pricing: 70 JD / person</b></p>
          <p>What’s included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">FULL Jeep tour in Wadi Rum</li>
            <li className="ml-5">Overnight Stay at the Camp</li>
            <li className="ml-5">Breakfast, Lunch & Dinner</li>
            <li className="ml-5">Pick up & drop off at Wadi Rum Village</li>
          </ul>
          <p className="my-3">Not included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">Transportation to and from Wadi Rum Village</li>
            <li className="ml-5">Entrance & drop off at Wadi Rum</li>
          </ul>
          <p className="mt-3">*<a href="https://www.jordanpass.jo/" target="_blank">Jordan pass</a> covers the entrance fee</p>
        </Accordion>
        <Accordion title="Overnight Stay + HALF day Jeep tour in Wadi Rum">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="col-span-1">
              <Image src="/images/Camels.jpg" alt="petra" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/wadi-rum.jpg" alt="wadi rum" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/wadi-rum-jeep-tour.jpg" alt="jeep" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/wadi-rum2.jpg" alt="jeep" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="mb-3"><b>Pricing: 55 JD / person</b></p>
          <p className="mb-3">What’s included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">HALF Jeep tour in Wadi Rum</li>
            <li className="ml-5">Overnight Stay at the Camp</li>
            <li className="ml-5">Breakfast and Dinner</li>
            <li className="ml-5">Pick up & drop off at Wadi Rum Village</li>
          </ul>
          <p className="my-3">Not included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">Transportation to and from Wadi Rum Village</li>
            <li className="ml-5">Entrance & drop off at Wadi Rum</li>
          </ul>
          <p className="mt-3">*<a href="https://www.jordanpass.jo/" target="_blank">Jordan pass</a> covers the entrance fee</p>
        </Accordion>
        <Accordion title="Camping in Wadi Rum desert">
          <p className="mb-3">
            Experience camping in Wadi Rum mountain
          </p>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="col-span-1">
              <Image src="/images/camp.jpeg" alt="petra" width={800} height={550}
                     className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/camp5.jpeg" alt="jeep" width={800} height={550}
                     className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/camp2.jpeg" alt="wadi rum" width={800} height={550}
                     className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/camp3.jpeg" alt="jeep" width={800} height={550}
                     className="object-cover w-full h-full"
              />
            </div>
          </div>
          <ul className="list-disc mb-1">
            <li className="ml-5">Enjoy tea, coffee, and food on firewood</li>
            <li className="ml-5">Sleeping in tent and gazing at the stars and enjoying sunset and sunrise on top of a
              mountain
            </li>
            <li className="ml-5">Experience Jeep tour and hiking in the magnificent desert of Wadi Rum</li>
          </ul>
          <p className="mt-3"><b>Pricing</b></p>
          <ul className="list-disc mb-1">
            <li className="ml-5">1 Person - 150 JD</li>
            <li className="ml-5">2 people - 110 JD each</li>
            <li className="ml-5">3 people - 95 JD each</li>
            <li className="ml-5">4 people - 85 JD each</li>
          </ul>
          <p>Prices include transportation</p>
        </Accordion>
        <Accordion title="Tour to Wadi al-Mujib and Dead Sea">
          <p className="mb-3">Discover different historical on this private half-day tour. Experience the canyon hike
            and swim at the lowest point on earth.</p>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="col-span-1">
              <Image src="/images/wadi-mujib.jpg" alt="petra" width={800} height={550}
                     className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/mujib2.jpg" alt="wadi rum" width={800} height={550}
                     className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/dead-sea.jpg" alt="jeep" width={800} height={550}
                     className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/dead-sea2.jpg" alt="jeep" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="mb-3">What to expect:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">07:00 AM Departure from Aqaba</li>
            <li className="ml-5">10:00 AM Arrive at Wadi Al Mujib</li>
            <li className="ml-5">12:00 PM Leave for the Dead Sea salt beach</li>
            <li className="ml-5">01:00 PM Arrive at Salt Beach and have free time to swim</li>
            <li className="ml-5">02:30 PM Lunch break (Optional)</li>
            <li className="ml-5">08:00 PM Head back to Aqaba</li>
          </ul>
          <p className="mb-1">*The departure time is flexible (e.g. the trip can start at 6, 7 AM, etc.)</p>
          <p className="mt-3"><b>Pricing</b></p>
          <p className="mb-3">The price for the trip varies (depending on number of people) and calculated per person:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">1 Person - 150 JD</li>
            <li className="ml-5">2 people - 80 JD each</li>
            <li className="ml-5">3 people - 55 JD each</li>
            <li className="ml-5">4 people - 45 JD each</li>
          </ul>
          <p className="mb-3">What’s included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">Private roundtrip transportation</li>
            <li className="ml-5">Bottled water</li>
            <li className="ml-5">English speaking driver</li>
            <li className="ml-5">Pick up & drop off at Wadi Rum Village</li>
          </ul>
          <p className="my-3">Not included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">Admission fees* Entrance fees to wadi al Mujib are not included in <a href="https://www.jordanpass.jo/" target="_blank">Jordan pass</a></li>
            <li className="ml-5">Food</li>
          </ul>
          <p className="mt-3">*Advising guests to have Breakfast at the hostel before start trip.</p>
          <p className="my-3">Bring with you:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">Swimming suit</li>
            <li className="ml-5">Hat (to cover your head from the sun)</li>
            <li className="ml-5">Sunscreen</li>
            <li className="ml-5">Towel</li>
            <li className="ml-5">Comfortable shoes</li>
          </ul>
        </Accordion>
        <Accordion title="Wadi Rum, Petra, Wadi al Mujib,Dead Sea">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="col-span-1">
              <Image src="/images/wadi-rum.jpg" alt="petra" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/mujib2.jpg" alt="wadi rum" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/dead-sea2.jpg" alt="jeep" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/petra.webp" alt="jeep" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p>3 Days and 2 nights Trip</p>
          <p className="my-3">Day 1:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">7:00 AM Leve Aqaba for Wadi Al Mujib</li>
            <li className="ml-5">10:30 AM Arrive at Wadi Al Mujib</li>
            <li className="ml-5">01:00 PM Drive to the Dead Sea</li>
            <li className="ml-5">01:30 PM Arrive at Salt Beach and have free time to swim</li>
            <li className="ml-5">03:00 PM Lunch break</li>
            <li className="ml-5">03:30 PM Drive to Petra</li>
            <li className="ml-5">05:30 PM Arrive Little Petra</li>
            <li className="ml-5">07:00 PM Arrive at the hotel/hostel in Petra check in the rooms</li>
            <li className="ml-5">08:00 PM Dinner</li>
          </ul>
          <p className="my-3">Day 2:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">06:30 AM Start the Hike at Petra from the visitor centre</li>
            <li className="ml-5">01:30 AM Drive to Wadi Rum</li>
            <li className="ml-5">03:30 PM Arrive to Wai Rum and drive by 4*4 car to the camp & the sunset point</li>
            <li className="ml-5">04:30 PM Watch the sunset from the sunset point</li>
            <li className="ml-5">06:00 PM Bedouin dinner</li>
            <li className="ml-5">07:00 PM Stargazing and chill time</li>
          </ul>
          <p className="my-3">Day 3:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">05:30 AM Watch the sunset (Option)</li>
            <li className="ml-5">08:00 AM Breakfast</li>
            <li className="ml-5">09:00 AM Start the Jeep tour</li>
            <li className="ml-5">12:00 PM Head to Aqaba </li>
            <li className="ml-5">01:30 PM Arrive to Aqaba </li>
            <li className="ml-5">03:00 PM lunch at Hostel</li>
          </ul>
          <p className="mt-3"><b>Pricing</b></p>
          <p className="mb-3">The price for the trip varies (depending on number of people) and calculated per person:</p>
          <ul className="list-disc">
            <li className="ml-5">1 Person - 450 JD</li>
            <li className="ml-5">2 people - 280 JD each</li>
            <li className="ml-5">3 people - 220 JD each</li>
            <li className="ml-5">4 people - 190 JD each</li>
          </ul>
          <p className="my-3">Includes:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">All the transportations</li>
            <li className="ml-5">Lunch</li>
            <li className="ml-5">Accommodation in Petra (private room or dorm bed upon availability, dinner + breakfast or lunch box)</li>
            <li className="ml-5">Private tent at Wadi Rum for individuals and shared tent from the couple and the groups</li>
            <li className="ml-5">Dinner and breakfast at the Bedouin camp</li>
            <li className="ml-5">3-hour jeep tour in Wadi Rum</li>
            <li className="ml-5">Lunch in Aqaba</li>
            <li className="ml-5">Water bottles</li>
            <li className="ml-5">English-speaking driver (not a guide)</li>
          </ul>
          <p className="my-3">Not included:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">Entry fees to the sites *Wadi al Mujib is not included in <a href="https://www.jordanpass.jo/" target="_blank">Jordan pass</a></li>
            <li className="ml-5">Guide on sites</li>
            <li className="ml-5">Snacks</li>
          </ul>
          <p className="my-3">Bring with you:</p>
          <ul className="list-disc mb-1">
            <li className="ml-5">Comfortable shoes</li>
            <li className="ml-5">Hat (to cover your head from the sun)</li>
            <li className="ml-5">Sunscreen</li>
            <li className="ml-5">Swimming suit</li>
          </ul>
          <p className="mt-3">*Advising guests to have breakfast at the hostel before
            starting the trip</p>
        </Accordion>
        <Accordion title="Aqaba full-day walking tour">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="col-span-1">
              <Image src="/images/aqaba1.jpeg" alt="petra" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/aqaba2.jpeg" alt="wadi rum" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/aqaba3.jpg" alt="jeep" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/aqaba4.jpg" alt="jeep" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="mb-3">Experience a full day in Aqaba</p>
          <ul className="list-disc mb-3">
            <li className="ml-5">Visit the beautiful modern village Ayla</li>
            <li className="ml-5">Try the best local food (Falafel, Palestinian Ka'ak, Hibiscus juice, and Kunafa)</li>
            <li className="ml-5">Pizza street and corniche street</li>
            <li className="ml-5">Spices shopping and culture places</li>
            <li className="ml-5">Best panoramic views and photography</li>
            <li className="ml-5">Visit Aqaba castel and museum</li>
            <li className="ml-5">Visit mini house beach cafes with a beautiful view and Hibiscus</li>
            <li className="ml-5">Half hour <b>Glass Boat</b> tour</li>
          </ul>
          <p className="mb-3">Enjoy all the above from <b>10:00am</b> to <b>4:00pm</b></p>
          <p className="mb-1">Prices:</p>
          <ul className="list-disc mb-3">
            <li className="ml-5">1 Person - 45 JD</li>
            <li className="ml-5">2 people - 40 JD each</li>
            <li className="ml-5">3 people - 35 JD each</li>
            <li className="ml-5">4 people - 30 JD each</li>
          </ul>
          <p>For 5 or more people, please contact us for the price information</p>
        </Accordion>
        <Accordion title="Aqaba half-day walking tour">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="col-span-1">
              <Image src="/images/aqaba5.jpg" alt="petra" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/aqaba6.jpg" alt="wadi rum" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/aqaba7.jpg" alt="jeep" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/aqaba8.jpg" alt="jeep" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="mb-3">Experience a half day in Aqaba</p>
          <ul className="list-disc mb-3">
            <li className="ml-5">Visit the beautiful modern village Ayla</li>
            <li className="ml-5">Try the best local food (Falafel, Palestinian Ka'ak, Hibiscus juice, and Kunafa)</li>
            <li className="ml-5">Pizza street and corniche street</li>
            <li className="ml-5">Spices shopping and culture places</li>
            <li className="ml-5">Best panoramic views and photography</li>
          </ul>
          <p className="mb-3">Enjoy all the above from <b>11:00am</b> to <b>2:00pm</b></p>
          <p className="mb-1">Prices:</p>
          <ul className="list-disc mb-3">
            <li className="ml-5">1 Person - 30 JD</li>
            <li className="ml-5">2 people - 25 JD each</li>
            <li className="ml-5">3 people - 20 JD each</li>
            <li className="ml-5">4 people - 15 JD each</li>
          </ul>
          <p>For 5 or more people, please contact us for the price information</p>
        </Accordion>
        <Accordion title="Glass Boat Tours">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="col-span-1">
              <Image src="/images/aqaba1.jpeg" alt="petra" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/aqaba2.jpeg" alt="wadi rum" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/glassboaat4.webp" alt="jeep" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/glasssboat2.jpg" alt="jeep" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="mb-1"><b>Half hour tour</b></p>
          <p className="mb-3">Price: 25 JD</p>
          <p className="mb-1"><b>One hour tour</b></p>
          <p className="mb-3">Price: 45 JD</p>
          <ul className="list-disc mb-3">
            <li className="ml-5">Watch the tank site</li>
            <li className="ml-5">Your around hotels and borders</li>
            <li className="ml-5">Coral reef tour</li>
          </ul>
          <p className="mb-1"><b>Half-day tour</b></p>
          <ul className="list-disc mb-3">
            <li className="ml-5">4 hours boat tour</li>
            <li className="ml-5">Watch tank site and coral reef</li>
            <li className="ml-5">Watch plane and ship site</li>
            <li className="ml-5">Snorkiling tour</li>
            <li className="ml-5">Military museums site</li>
            <li className="ml-5">Japanese garden site</li>
            <li className="ml-5">lunch and soft drink included</li>
          </ul>
          <p className="mb-1">Prices:</p>
          <ul className="list-disc">
            <li className="ml-5">1 person - 110 JD</li>
            <li className="ml-5">2 person - 90 JD</li>
            <li className="ml-5">3 person - 75 JD</li>
            <li className="ml-5">4 person - 55 JD</li>
          </ul>
        </Accordion>
        <Accordion title="Wadi Araba full day">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="col-span-1">
              <Image src="/images/wadi-araba.webp" alt="petra" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            {/*<div className="col-span-1">*/}
            {/*  <Image src="/images/wadi-araba1.jpg" alt="wadi rum" width={800} height={550}*/}
            {/*    className="object-cover w-full h-full"*/}
            {/*  />*/}
            {/*</div>*/}
            <div className="col-span-1">
              <Image src="/images/wadi-araba2.jpg" alt="jeep" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/wadi-araba3.jpg" alt="jeep" width={800} height={550}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="mb-3">Wadi Araba is a breathtaking desert valley that offers a unique escape into Jordan's natural beauty. Nestled between the Dead Sea and Aqaba, this tranquil region is a blend of golden dunes, rugged mountains, and unspoiled landscapes. Visitors can enjoy exhilarating activities like sandboarding, camel rides, and 4x4 desert safaris, or unwind under the starry skies with traditional Bedouin hospitality. Whether it's the striking sunsets or the serene solitude, Wadi Araba promises an unforgettable adventure for nature lovers and thrill-seekers alike.</p>
          <ul className="list-disc mb-3">
            <li className="ml-5"> Tour and walk In Wadi Arabia </li>
            <li className="ml-5"> Tour to see Nkhila Area </li>
            <li className="ml-5"> Firewood tea experience</li>
            <li className="ml-5"> Learn about Bedouin culture</li>
            <li className="ml-5"> photographing desert landscapes</li>
            <li className="ml-5"> Lunch and drinks </li>
            <li className="ml-5"> Transportation included</li>
          </ul>
          <p className="mb-1">Prices:</p>
          <ul className="list-disc">
            <li className="ml-5">1 person - 70 JD</li>
            <li className="ml-5">2 person - 55 JD</li>
            <li className="ml-5">3 person - 45 JD</li>
            <li className="ml-5">4 person - 40 JD</li>
          </ul>
        </Accordion>
        <Accordion title="Majestic Mountain Hiking Adventure">
        <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="col-span-1">
              <div className="w-full h-[250px]">
                <Image src="/images/hiking_1.jpg" alt="hiking 1" width={800} height={550}
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </div>
            <div className="col-span-1">
             <div className="w-full h-[250px]">
              <Image src="/images/hiking_2.jpg" alt="hiking 2" width={800} height={550}
                className="object-cover  object-center -full h-full"
              />
             </div>
            </div>
            <div className="col-span-1">
              <div className="w-full h-[250px]">
                <Image src="/images/hiking_3.jpg" alt="hiking 3" width={800} height={550}
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full h-[250px]">
                <Image src="/images/hiking_4.jpg" alt="hiking 4" width={800} height={550}
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </div>
          </div>
          <p className="mb-3">
            Explore the breathtaking mountain trails of Aqaba, where dramatic desert landscapes
            meet rocky peaks. Discover stunning views, ancient paths, and the raw beauty of
            Jordan's southern wilderness. An unforgettable hiking experience that combines
            natural wonder, geological marvels, and cultural richness.
          </p>
          <p className="mb-3"><b>Price: 35 JD / person</b></p>
          <p className="mb-1">Our journey includes</p>
          <ul className="list-disc">
            <li className="ml-5">Guiding</li>
            <li className="ml-5">Photograph</li>
            <li className="ml-5">Cooking (Meal)</li>
            <li className="ml-5">Water & hot drinks</li>
            <li className="ml-5">Traditional songs</li>
          </ul>
        </Accordion>
      </div>
      <a className="hidden" href="/ViewCertificate_241118_132422_241118_133310.pdf">view the pdf</a>
    </main>
  );
}
