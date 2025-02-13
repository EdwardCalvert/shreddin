import { EVENT_STATUS_FLAGS } from "@components/events/event-status-flags"
//{
//     title: "Pitfichie",
//     locked: false,
//     datetime : new Date(2025, 10,12),
//     key:"12",
//     status: EVENT_STATUS_FLAGS.DRIVING,
//     warnings: EVENT_WARNING_FLAGS.NONE,
//     imageUrl: "/the-tappie-tower.jpg"

// },
export  const MockEvents =[{
    title: "Pitfichie",
    locked: false,
    datetime : new Date(2025, 10,12),
    key:"12",
    status: EVENT_STATUS_FLAGS.DRIVING,
    imageUrl: "/the-tappie-tower.jpg"

},
{
    title: "Benachie",
    locked: false,
    datetime : new Date(2024, 11,12),
    key:"13",
    status: EVENT_STATUS_FLAGS.NONE & EVENT_STATUS_FLAGS.CANCELLED,
    imageUrl: "/Walk-Bennachie-3.webp"

},
{
    title: "Benachie",
    locked: true,
    datetime : new Date(2024, 15,18),
    key:"14",
    status: EVENT_STATUS_FLAGS.RESCHEDULED,
    imageUrl: "/Walk-Bennachie-3.webp"

}]