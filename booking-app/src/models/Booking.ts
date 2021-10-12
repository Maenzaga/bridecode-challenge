export type BookingApi = {
    "users": Array<{contacts: {email: string}}>;
    "partners": string[];
    "id": string;
    "profilePhoto": string;
    "weddingDate": number;
    "collaborating": false;
}

export type Booking = Omit<BookingApi, 'users' | 'weddingDate'> & {
users: Array<{email: string}>;
weddingDate: string
}

export type BookingsApiResponse = BookingApi[]
