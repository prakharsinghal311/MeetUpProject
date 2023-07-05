import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Extreme_Makeover%2C_Mesa_Verde_Edition_-_panoramio.jpg/220px-Extreme_Makeover%2C_Mesa_Verde_Edition_-_panoramio.jpg",
    address: "Some address 5, 12345 Some city",
    description: "This is a first Meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Extreme_Makeover%2C_Mesa_Verde_Edition_-_panoramio.jpg/220px-Extreme_Makeover%2C_Mesa_Verde_Edition_-_panoramio.jpg",
    address: "Some address 10, 12345 Some city",
    description: "This is a second Meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export async function getStaticProps() {
  // fetch data from an api
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
