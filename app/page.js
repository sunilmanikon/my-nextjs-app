import {Meals} from "@/app/meals/page";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
        <p><Link href='/community'>Community</Link></p>
        <p><Link href='/meals/share'>Meals Share</Link></p>
        <p><Link href='/meals/veggies'>Veggies</Link></p>
    </main>
  );
}
