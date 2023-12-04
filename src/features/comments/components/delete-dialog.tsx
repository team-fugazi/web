import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

interface Props {
    handler: () => void;
}

export const DeleteDialog: React.FC<Props> = ({ handler }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="text-xs font-light text-gray-500 hover:underline hover:text-gray-700">
        delete
      </button>
    </Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
          Are you sure you want to delete this comment?
        </Dialog.Title>
        <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
          This action cannot be undone.
        </Dialog.Description>

        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button onClick={() => handler} className="bg-red-500 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
              delete
            </button>
          </Dialog.Close>
        </div>

        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
