import Image from "next/image";
import Link from "next/link";

export const items = [
    {
      id: 1,
      title: "Movies, Music and Art",
      category: "Entertaiment",
      author: "Bates Ferri",
      descriptions: [
        "Entertainment is often described as a form of amusement or diversion that captivates and engages individuals. It encompasses a wide range of activities and experiences that are designed to entertain and provide enjoyment. Whether it's through movies, music, dramas, games, or other forms of media, entertainment aims to evoke emotions, spark imagination, and create memorable experiences."
      ]
    },
   
    
    {
      id: 2,
      title: "Fashion Trends: Past, Present, and Future",
      category: "Fashion",
      author: "Sophia Lee",
      descriptions: [
        "Traces the evolution of fashion trends throughout history.",
        "Predicts future directions in fashion based on cultural and societal changes.",
        "Creating the ultimate gaming guide involves covering a wide range of topics to cater to gamers of all levels and interests. Here's a structured outline for such a guide:Introduction to Gaming:Brief history of gaming.Evolution of gaming platforms (PC, console, mobile).Importance of gaming culture and community.Choosing the Right Gaming Platform:Comparison of PC gaming, console gaming (PlayStation, Xbox, Nintendo), and mobile gaming.Considerations for hardware specifications, game library, and online services.Gaming Hardware and Accessories:Overview of gaming PCs, gaming laptops, consoles, and mobile devices.Essential gaming peripherals (controllers, keyboards, mice, headsets).Gaming monitors and displays (refresh rate, resolution, response time).Ergonomic considerations for gaming setups"
      ]
    },
    {
    id: 3,
    title: "Mastering the Art of French Cooking",
    category: "food",
    author: "Julia Child",
    description: ["A two-volume French cookbook written by Julia Child, Louisette Bertholle, and Simone Beck, both of France."
      ]
    },
    {
      id: 4,
      title: "Advanced Sports Analytics",
      category: "Sport",
      author: "Sarah Williams",
      descriptions: [
        "Introduces advanced statistical methods used in sports analytics.",
        "Analyzes the impact of data-driven decision-making on team performance.",
        "Advanced sports analytics involves the use of data, statistics, and technology to gain deeper insights into athletic performance, strategy, and decision-making in sports. Here are some key aspects of advanced sports analytics:Player Performance Analysis:Analyzing player performance metrics such as speed, distance covered, acceleration, heart rate, and biomechanical data can provide coaches and trainers with valuable insights into an athlete's strengths, weaknesses, and areas for improvement. Advanced analytics techniques, including machine learning and predictive modeling, can help identify patterns and trends in player performance over time.Game Strategy Optimization:Sports analytics can be used to analyze game strategies, tactics, and play-calling decisions. By analyzing historical data and game footage, coaches and analysts can identify optimal strategies for maximizing scoring opportunities, minimizing turnovers, and exploiting opponents' weaknesses.Opponent Scouting and Game Preparation:Advanced scouting techniques involve analyzing opponents' strengths, weaknesses, tendencies, and performance metrics to develop game plans and strategies. By understanding opponents' playing styles and tendencies, teams can adjust their tactics and formations to gain a competitive advantage.In-Game Decision Support:Real-time analytics tools provide coaches and players with instant feedback and insights during games. This includes data visualization dashboards, live player tracking systems, and performance analytics software that allow coaches to make informed decisions on substitutions, play calling, and in-game adjustments."

      ]
    },
    {
    id: 5,
    title: "Into the Wild",
    category: "travels",
    author: "Jon Krakauer",
    description: ["A non-fiction book that tells the story of Christopher McCandless, a young man who hiked across North America into the Alaskan wilderness.",
      ]
    },
    {
      id: 6,
      title: "The Future of Transportation Technology",
      category: "Technology",
      author: "Alex Rodriguez",
      descriptions: [
        "Explores emerging technologies in transportation.",
        "Discusses the potential of autonomous vehicles and hyperloop systems.",
        "The future of transportation technology is poised to undergo significant transformations driven by advancements in various areas. Here are some key trends and innovations shaping the future of transportation:Electric and Autonomous Vehicles:The shift towards electric vehicles (EVs) and autonomous vehicles (AVs) is expected to revolutionize the automotive industry. EVs offer cleaner and more sustainable transportation, while AVs promise increased safety, efficiency, and convenience through self-driving capabilities.Mobility as a Service (MaaS):MaaS platforms integrate various transportation services, including public transit, ride-sharing, bike-sharing, and car-sharing, into a seamless and interconnected system. Users can access transportation services on-demand through mobile apps, reducing the reliance on private car ownership and promoting multi-modal transportation options.Hyperloop and High-Speed Rail:Hyperloop systems and high-speed rail networks aim to revolutionize long-distance travel by providing ultra-fast, energy-efficient, and environmentally-friendly transportation solutions. These systems could significantly reduce travel times between cities and regions, enhancing connectivity and mobility.Urban Air Mobility (UAM):UAM refers to the use of electric vertical takeoff and landing (eVTOL) aircraft for short-distance urban transportation. These air taxis and drones promise to alleviate congestion, reduce commute times, and provide aerial transportation solutions for urban mobility challenges."
      ]
    },
  
    
    ];
      
  console.log(items);

export default function Category() {
  return (
    <div className="grid grid-cols-3 gap-4">
        {items.map(item =>(
            <Link key={item.id} href={`/blog/${item.title.split(' ').join('-')}`} title={item.title}>
              <section className={`text-black bg-cover h-[300px] mt-11`} style={{backgroundImage: `url(/id${item.id}.jpg)`}}>
                <h2>{item.title}</h2>
              </section>
            </Link>
        ))}
    </div>
  )
}