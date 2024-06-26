"use client";

import { useUser } from "@clerk/nextjs";
import UserAvatar from "./UserAvatar";
import { Button } from "./ui/button";
import { ImageIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";

const PostForm = () => {
  const ref = useRef(null);
  const fileInputRef = useRef(null);
  const { user } = useUser();
  const { firstName, lastName, imageUrl } = user || {};
  const [preview, setPreview] = useState(null);

  const handleFormAction = async formData => {
    const formDataCopy = formData;
    ref.current?.reset();
    const text = formDataCopy.get("postInput");
    if (!text.trim()) throw new Error("You must provide a post input");
    setPreview(null);

    try {
      await createPostAction(formDataCopy);
    } catch (error) {
      throw new Error("Error while creating post");
    }
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className='mb-2'>
      <form
        ref={ref}
        action={formData => {
          // Handle form submission with server action
          handleFormAction(formData);
          // Toast notification based on promise above
        }}
        className='p-3 bg-white rounded-md'
      >
        <div className='flex items-center space-x-2'>
          <UserAvatar
            imageUrl={imageUrl}
            firstName={firstName}
            lastName={lastName}
          />
          <input
            type='text'
            name='postInput'
            placeholder='Start writing a post...'
            className='flex-1 outline-none rounded-full py-3 px-4 border'
          />
          <input
            ref={fileInputRef}
            type='file'
            name='image'
            accept='image/*'
            hidden
            onChange={handleImageChange}
          />

          <button type='submit' hidden>
            Post
          </button>
        </div>

        {/* Preview conditional check */}
        {preview && (
          <div className='mt-3'>
            <Image
              src={preview}
              alt='preview'
              width={200}
              height={200}
              className='w-full object-cover'
            />
          </div>
        )}

        <div className='flex justify-end mt-2 space-x-2'>
          <Button type='button' onClick={() => fileInputRef.current?.click()}>
            <ImageIcon className='mr-2' size={16} color='currentColor' />
            {preview ? "Change" : "Add"} image
          </Button>

          {/* Add a remove preview button */}
          {preview && (
            <Button
              type='button'
              variant='outline'
              onClick={() => setPreview(null)}
            >
              <XIcon className='mr-2' size={16} color='currentColor' />
              Remove image
            </Button>
          )}
        </div>
      </form>

      <hr className='mt-2 border-gray-300' />
    </div>
  );
};

export default PostForm;
