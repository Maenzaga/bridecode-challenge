export type BookingApi = {
    "createdAt":number;
    "users": Array<{contacts: {email: string}}>;
    "partners": string[];
    "id": string;
    "profilePhoto": string;
    "weddingDate": number;
    "collaborating": false;
    "tasksDone":number;
    "tasksTotal":number;
    "guestsInitialTarget":number;
}

export type Booking = Omit<BookingApi, 'users' | 'weddingDate' | 'createdAt'> & {
users: Array<{email: string}>;
weddingDate: string;
createdAt: string;
}

export type BookingsApiResponse = BookingApi[]
