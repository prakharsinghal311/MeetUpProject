import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  // fetch("/api/get-new-meetup", {
  //   method: "GET",
  //   "Content-Type": "application/json",
  // }).then((response) => {
  //   console.log(response);
  // });

  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an api
  const client = await MongoClient.connect(
    "mongodb+srv://prakhargd31121999:ferfe1324@cluster0.v7bxtre.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  //console.log(getData);

  //const Actual_Meetups = [...DUMMY_MEETUPS, ...meetups];

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
