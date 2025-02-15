export const EVENT_STATUS_FLAGS= {
    NONE: 0,
    //Success States
    INTEREST_REGISTERED :1 <<1,

    //Info states
    DRIVING: 1 <<10,
    PASSENGER: 1<<11,
    MAKING_OWN_WAY: 1<<12,
    PEDALING_OUT: 1<<13,

    //Error States
    CANCELLED: 1<<15,
    RESCHEDULED: 1<<16,
    MAXIMUM_CAPACITY: 1<<17,

    //Pending states
    BOOKING_SCHEDULED: 1<<20,
    BOOKING_OPEN: 1<<21,
    EVENT_OCCURRED: 1<<22,
    EVENT_ATTENDED: 1<< 23,
    EVENT_ABSENCE: 1<< 24,
}

const EVENT_RESPONSE_FLAGS ={
    NONE: 0,
    //Success States
    INTEREST_REGISTERED :1 <<1,
    DRIVING: 1 <<10,
    PASSENGER: 1<<11,
    MAKING_OWN_WAY: 1<<12,
    PEDALING_OUT: 1<<13,
    EVENT_ATTENDED: 1<< 23,
    EVENT_ABSENCE: 1<< 24,

}

const EVENT_= {

    //Error States
    CANCELLED: 1<<15,
    RESCHEDULED: 1<<16,
    MAXIMUM_CAPACITY: 1<<17,

    //Pending states
    BOOKING_SCHEDULED: 1<<20,
    BOOKING_OPEN: 1<<21,
    EVENT_OCCURRED: 1<<22,

}