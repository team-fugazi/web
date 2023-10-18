import * as RadixHoverCard from "@radix-ui/react-hover-card";

// Types
import { Random } from "unsplash-js/dist/methods/photos/types";

export const HoverCard = ({ image }: { image: Random }) => (
  <div className="z-50 absolute bottom-4 right-4">
    <RadixHoverCard.Root>
      <RadixHoverCard.Trigger asChild>
        <a
          className="inline-block cursor-pointer rounded bg-white p-2 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]"
          href="https://twitter.com/radix_ui"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="block rounded"
            src="/unsplash/logo.svg"
            alt="Unsplash"
            width={25}
            height={25}
          />
        </a>
      </RadixHoverCard.Trigger>
      <RadixHoverCard.Portal>
        <RadixHoverCard.Content
          className="w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all"
          sideOffset={5}
        >
          <div className="flex flex-col gap-[7px]">
            <img
              className="block h-[60px] w-[60px] rounded-full"
              width={60}
              height={60}
              src={image.user.profile_image.medium}
              alt={image.user.name}
            />
            <div className="flex flex-col gap-[15px]">
              <div>
                <div className="m-0 text-[15px] font-medium leading-[1.5] text-mauve12">
                  {image.user.name}
                </div>
                <div className="m-0 text-[15px] leading-[1.5] text-mauve10">
                  @{image.user.instagram_username}
                </div>
              </div>
              <div className="m-0 text-[15px] leading-[1.5] text-mauve12">
                {image.user.bio?.length! > 50
                  ? image.user.bio?.slice(0, 50) + "..."
                  : image.user.bio}
              </div>
              <div className="flex gap-[15px]">
                <div className="flex gap-[5px]">
                  <div className="m-0 text-[15px] font-medium leading-[1.5] text-mauve12">
                    {image.user.total_likes}
                  </div>{" "}
                  <div className="m-0 text-[15px] leading-[1.5] text-mauve10">
                    Likes
                  </div>
                </div>
                <div className="flex gap-[5px]">
                  <div className="m-0 text-[15px] font-medium leading-[1.5] text-mauve12">
                    {image.user.total_photos}
                  </div>{" "}
                  <div className="m-0 text-[15px] leading-[1.5] text-mauve10">
                    Shots
                  </div>
                </div>
              </div>
            </div>
          </div>

          <RadixHoverCard.Arrow className="fill-white" />
        </RadixHoverCard.Content>
      </RadixHoverCard.Portal>
    </RadixHoverCard.Root>
  </div>
);
