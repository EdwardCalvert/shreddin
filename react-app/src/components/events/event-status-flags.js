export const EVENT_STATUS_FLAGS= {
    NONE: 0,
    //Success States
    INTEREST_REGISTERED :1 <<0,

    //Info states
    DRIVING: 1 <<10,
    PASSENGER: 1<<11,
    MAKING_OWN_WAY: 1<<12,
    PEADALING_OUT: 1<<13,

    //Error States
    CANCELLED: 1<<20,
    RESCHEDULED: 1<<21,
    MAXIMUM_CAPACITY: 1<<22,

    //Pending states
    BOOKING_SCHEDULED: 1<<30,
    BOOKING_OPEN: 1<<31,
}