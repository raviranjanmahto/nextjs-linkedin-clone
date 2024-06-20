import { currentUser } from "@clerk/nextjs/server";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";
import UserAvatar from "./UserAvatar";

const UserInformation = async () => {
  const user = await currentUser();
  const { firstName, lastName, imageUrl } = user || {};
  return (
    <div className='flex flex-col justify-center items-center bg-white rounded-md border py-4'>
      <UserAvatar
        imageUrl={imageUrl}
        firstName={firstName}
        lastName={lastName}
      />

      <SignedIn>
        <div className='text-center'>
          <p className='font-semibold'>
            {firstName}
            {lastName}
          </p>

          <p className='text-xs'>
            @{firstName}
            {lastName}-{user?.id?.slice(-4)}
          </p>
        </div>
      </SignedIn>

      <SignedOut>
        <div className='text-center space-y-2'>
          <p className='font-semibold'>You are not signed in</p>

          <Button asChild className='bg-[#0B63C4] text-white'>
            <SignedIn>Sign in</SignedIn>
          </Button>
        </div>
      </SignedOut>

      <hr className='w-full border-gray-200 my-5' />

      <div className='flex justify-between w-full px-4 text-sm'>
        <p className='font-semibold text-gray-400'>Posts</p>
        <p className='text-blue-400'>0</p>
      </div>

      <div className='flex justify-between w-full px-4 text-sm'>
        <p className='font-semibold text-gray-400'>Posts</p>
        <p className='text-blue-400'>0</p>
      </div>
    </div>
  );
};

export default UserInformation;
