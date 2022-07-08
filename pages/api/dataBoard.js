// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      newLeads: [
        {
          title: "Leads",
          value: "10",
          percent: "-6.00",
        },
        {
          title: "Connected",
          value: "80",
          percent: "4.5",
        },
        {
          title: "Connected %",
          value: "50%",
          percent: "-6.00",
        },
      ],
    },
    {
      responseTime: [
        {
          title: "5 Min Response",
          value: "59",
          percent: "7",
        },
        {
          title: "5 Min Response %",
          value: "59",
          percent: "6.3",
        },
        {
          title: "Avg. Response Time",
          value: "03:12:11",
          percent: "-11",
        },
      ],
    },
    {
      bookingTime: [
        {
          title: "Same Day Booking",
          value: "27",
          percent: "-1.2",
        },
        {
          title: "Same Day Booking %",
          value: "38%",
          percent: "2.4",
        },
        {
          title: "avg. Time to Booking",
          value: "17:14:12",
          percent: "4.6",
        },
      ],
    },
  ])
}
