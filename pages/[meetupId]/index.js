import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Extreme_Makeover%2C_Mesa_Verde_Edition_-_panoramio.jpg/220px-Extreme_Makeover%2C_Mesa_Verde_Edition_-_panoramio.jpg"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is a first Meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Extreme_Makeover%2C_Mesa_Verde_Edition_-_panoramio.jpg/220px-Extreme_Makeover%2C_Mesa_Verde_Edition_-_panoramio.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first Meetup",
      },
    },
  };
}

export default MeetupDetails;
