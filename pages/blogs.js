import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button

} from "@material-tailwind/react";


export const Blog = () => {

  const cardData = [
    {
      title: "Helping lost pets find their way home",
      imageSrc: "https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1651153661.2751184/a-day-in-the-life-of-an-animal-shelter-volunteer.png",
      content: "As a volunteer dedicated to reuniting lost pets with their owners, I've had the privilege of being part of heartwarming moments. One memorable day, I received a call about a scared, stray dog in the neighborhood. Armed with treats and a leash, I approached cautiously. It took time, but with patience and gentle words, I managed to gain the dog's trust. Witnessing the joy on the owner's face when they saw their beloved pet back in their arms was an indescribable feeling. It's these moments that make every effort worthwhile, knowing that I'm making a difference in the lives of both pets and their human companions.",
      name: "John Doe",
      avatarSrc: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5, // Add the rating for this card
    },
    {
      title: "Keeping the elderly company",
      imageSrc: "https://www.carelink.org/wp-content/uploads/2021/08/caring-for-elderly-parents-stress.jpg",
      content: 'Volunteering to spend time with the elderly has been an enriching experience. I remember sitting with Ms. Thompson, sharing stories from our lives. Her eyes would light up as she recounted her adventures, and I found myself learning invaluable life lessons from her wisdom. Our weekly chats turned into cherished moments for both of us, bridging the generational gap and forming a genuine bond. The appreciation in their eyes and the heartfelt smiles make me realize the true significance of companionship.',
      name: "Jane Smith",
      avatarSrc: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 4, // Add the rating for this card
    },
    {
      title: "Reading to children",
      imageSrc: "https://stpaulsfirst.org/wp-content/uploads/2018/08/preschoolv.jpg",
      content: "Being a volunteer who reads to children has brought so much joy into my life. Seeing their eager faces and listening to their laughter as we explore the pages of magical worlds is an absolute delight. One particular storytime, a young boy shyly approached me after the session. He whispered that he wanted to be a storyteller too, just like me. Knowing that I'm igniting their imagination and nurturing their love for learning is a reward beyond measure. These small interactions have a lasting impact, reminding me of the power of storytelling in shaping young minds.",
      name: "Alex Johnson",
      avatarSrc: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 4, // Add the rating for this card
    },
    // Add more card data objects here
    {
      title: "Teaching horse riding to kids ",
      imageSrc: "https://healingwithhorsesranch.org/wp-content/uploads/elementor/thumbs/IMG_4435-scaled-e1602093380190-owksbx8a499rk9k63sc77bez5us4a0dcqinvk0aoig.jpg",
      content: "Volunteering to collect bottles for recycling has given me a new perspective on sustainability. Every plastic bottle collected feels like a small victory against environmental degradation. One Saturday morning, a group of enthusiastic volunteers and I combed the beach, picking up discarded bottles. A passerby stopped to thank us, and in that moment, I realized the impact of our collective efforts. It's a tangible reminder that even the smallest actions can contribute to a cleaner, greener planet.",
      name: "Ella Williams",
      avatarSrc: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 3, // Add the rating for this card
    },
    {
      title: "Colecting bottles for recycling",
      imageSrc: "https://www.budgetdumpster.com/blog/wp-content/uploads/2017/11/volunteer-recycling-bottles.jpg",
      content: "Dedicating time to clean up the oceans has been a humbling experience. Walking along the shoreline, picking up debris and trash, I'm reminded of the delicate balance we share with our oceans. During a cleanup event, I came across a group of children who joined in eagerly. Their enthusiasm was contagious, and together, we collected bags of litter. As we watched the waves crash on the now cleaner shore, I felt a renewed sense of responsibility towards protecting our marine ecosystems. Every piece of trash removed brings us closer to preserving these natural wonders for future generations.",
      name: "Michael Brown",
      avatarSrc: "https://randomuser.me/api/portraits/men/5.jpg",
      rating: 4, // Add the rating for this card
    },
    {
      title: "Taking the trash out the sea ",
      imageSrc: "https://uploads-ssl.webflow.com/62c6b224be780a3bf588c484/62e7cdd0005b5f0282b676a4_hb-cleanup10-0604_-2.jpeg",
      content: "To enhance the storytelling, including specific examples of the volume of bottles collected or the amount of waste reduced through the recycling efforts could have provided concrete evidence of the impact. Sharing data or statistics related to the environmental benefits of the initiative would have further emphasized its importance. Additionally, incorporating insights from volunteers about their motivations and experiences while participating in recycling activities could have added a personal touch.",
      name: "Sophia Lee",
      avatarSrc: "https://randomuser.me/api/portraits/women/6.jpg",
      rating: 5, // Add the rating for this card
    },

  ];
  return (
    <div>
      <Navbar />
      <div className='blogsMainDiv'>

      <div className="flex flex-col items-center justify-center min-h-screen">

        <main className="grid gap-6 p-8">
          {cardData.map((card, index) => (
            <HorizontalCard key={index} {...card} />
          ))}
        </main>
        <Footer />
      </div>
    </div>
    </div>
  );
};



export function HorizontalCard({ title, imageSrc, content, name, avatarSrc, rating }) {
  const starIcons = [];
  for (let i = 0; i < rating; i++) {
    starIcons.push(<StarIcon key={i} />);
  }

  return (
      <Card className="w-full max-w-[80rem] flex-row bg-white shadow-lg rounded">
        <CardHeader
          shadow={false}
          floated={false}
          className="w-2/5 m-0 rounded rounded-r-none shrink-0"
        >
          <img
            src={imageSrc}
            alt="card-image"
            className="object-cover w-full h-full rounded"
          />
        </CardHeader>
        <CardBody>
          <div className="flex flex-col">
            <div className="flex items-center gap-5 mb-2">
              <Avatar
                size="lg"
                variant="circular"
                src={avatarSrc}
                alt={name}

              />



              <div className="flex flex-col">

                <Typography variant="h5" color="blue-gray">
                  {name}
                </Typography>
                <div className="flex items-center gap-0.5 mb-2">
                  {starIcons}
                </div>
              </div>
            </div>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {title}
            </Typography>
            <Typography color="gray" className="mb-4 text-lg font-normal">
              {content}
            </Typography>

            <a href="/about" className="inline-block">
              <Button variant="text" className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>

            </a>
          </div>
        </CardBody>
      </Card>
  );
}

export default Blog;


function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="blogsStar"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

