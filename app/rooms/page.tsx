import { redirect } from 'next/navigation'

// The Rooms & Suites content now lives as a section on the home page.
export default function RoomsPage() {
  redirect('/#rooms')
}
