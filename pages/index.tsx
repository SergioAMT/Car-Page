
"use client"
import type { ReactElement } from 'react'
import { CustomButton, Footer, Hero, Navbar, Trending } from "@/components";
import { useRouter } from "next/navigation";
import Layout from '../components/Layout';
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {

  const router = useRouter();

  const handleChange = () => {
    router.push("/list")
  }

  return (
    <main className='overflow-hidden'>
      {/* En este componente se renderiza el titulo h1
      al igual que las imagenes principales */}
      <Hero />
      <div className='w-full flex-center gap-5 mt-10'>
        <CustomButton
          title='Show Cars Available'
          btnType='button'
          containerStyles='bg-primary-blue rounded-full text-white'
          handleClick={handleChange}
        />
      </div>
      <div className='w-full flex-center gap-5 mt-10'>
        <Trending />
      </div>
    </main>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home