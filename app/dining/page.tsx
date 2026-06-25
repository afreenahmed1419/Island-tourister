import { redirect } from 'next/navigation'

// The Dining content now lives as a section on the home page.
export default function DiningPage() {
  redirect('/#dining')
}
