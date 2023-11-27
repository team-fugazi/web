import React from "react";
import * as AvatarRadix from "@radix-ui/react-avatar";

// interfaces && types
import { User } from "@auth0/auth0-react";

const Avatar: React.FC<User> = ({ user }) => (
  <div className="flex gap-5">
    <AvatarRadix.Root className="bg-blackA1 inline-flex h-[42px] w-[42px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <AvatarRadix.Image
        className="h-full w-full rounded-[inherit] object-cover border"
        src={user.picture}
        alt="user picture"
      />
      <AvatarRadix.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        U
      </AvatarRadix.Fallback>
    </AvatarRadix.Root>
  </div>
);

export default Avatar;
