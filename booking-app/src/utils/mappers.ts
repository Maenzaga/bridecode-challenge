import moment from 'moment'
import { Booking, BookingApi, BookingsApiResponse } from "../models/Booking";

export const mapBookingFromApi = (bookingApi: BookingApi): Booking => ({...bookingApi, weddingDate: moment(bookingApi.weddingDate).format('ll'),  users: bookingApi.users.map(user => ({email: user.contacts.email}))})

export const mapBookingsResponse = (bookingsResponse: BookingsApiResponse) => bookingsResponse.map(mapBookingFromApi)