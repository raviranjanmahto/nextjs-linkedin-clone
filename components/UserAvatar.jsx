import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const UserAvatar = ({ imageUrl, firstName, lastName }) => {
  return (
    <Avatar>
      <AvatarImage src={imageUrl || "https://github.com/shadcn.png"} />
      <AvatarFallback>
        {firstName?.charAt(0)}
        {lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
