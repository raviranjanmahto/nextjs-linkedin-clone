import Header from "@/components/Header";

// components
import UserInformation from "@/components/UserInformation";

export default function Home() {
  return (
    <div className='grid'>
      <section>
        {/* User information */}
        <UserInformation />
      </section>
      <section>
        {/* Post form */}
        {/* Post feed */}
      </section>

      <section>
        {/* Widget */}
        <div></div>
      </section>
    </div>
  );
}
