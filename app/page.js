import Header from "@/components/Header";
import PostForm from "@/components/PostForm";

// components
import UserInformation from "@/components/UserInformation";

export default function Home() {
  return (
    <div className='grid grid-cols-8 mt-5 sm:px-5'>
      <section className='hidden md:inline md:col-span-2'>
        {/* User information */}
        <UserInformation />
      </section>
      <section className='col-span-full md:col-span-6 xl:col-span-4 xl:max-w-xl mx-auto w-full'>
        {/* Post form */}
        <PostForm />
        {/* Post feed */}
      </section>

      <section className='hidden xl:inline justify-center col-span-2'>
        {/* Widget */}
        <div></div>
      </section>
    </div>
  );
}
