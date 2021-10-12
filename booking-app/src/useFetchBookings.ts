import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import useSWR from "swr";
import { Booking, BookingsApiResponse } from "./models/Booking";
import api from "./api/bookings";
import { mapBookingsResponse } from "./utils/mappers";

export const useFetchBookings = () => {
    const [bookings, setBookings] = useState<Booking[]>([])

  const fetcher = async (url: string) => {
    const response: AxiosResponse<BookingsApiResponse> = await api.get(
      url
    );
    return response.data;
  };

  const { data, error } = useSWR<BookingsApiResponse>("/bookedByCouples", fetcher);

  const removeBookings = async (id: string) => {
    await api.delete(`/bookings/${id}`);
    const newBookingsList = bookings.filter((booking) => {
      return booking.id !== id;
    });

    setBookings(newBookingsList);

  };

  useEffect(() => {
      if (data) {
        setBookings(mapBookingsResponse(data))
      }
  }, [data])

  return { data: bookings, error }
}