import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { createApi } from "unsplash-js";
import { useLocalStorage } from "@uidotdev/usehooks";

// Icons
import { ExternalLinkIcon } from "@radix-ui/react-icons";

// Components
// import { HoverCard } from "@/features/auth/HoverCard";

// Types
import { Random } from "unsplash-js/dist/methods/photos/types";

// ENV
const unsplashKey = import.meta.env.VITE_UNSPLASH_ACCESS;
const unslpashCollection = import.meta.env.VITE_UNSPLASH_COLLECTION;

const AuthPage = () => {
  const [lastUser] = useLocalStorage("lastUser", null);
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [, setImage] = useState<Random | Random[]>();
  const [, setImageLoading] = useState<boolean>(true);

  // Create API instance with Unsplash
  const api = createApi({
    accessKey: unsplashKey!,
  });

  // Get random image with specific query
  const res = async () => {
    return await api.photos.getRandom({
      query: "fintech",
      orientation: "portrait",
      collectionIds: [unslpashCollection!],
    });
  };

  // Wait for response and resolve
  useEffect(() => {
    const fetchRandomImage = async () => {
      const image = await res();
      // Check if the response type is not an error
      if (image.type !== "error") {
        // Access the image data and set it in the state
        setImage(image.response);
        setImageLoading(false);
      }
    };
    fetchRandomImage();
  }, []);

  if (isAuthenticated) return <Navigate to="/" />;
  if (isLoading) return <p>Hang on there...</p>;

  return (
    <main className="h-screen overflow-y-hidden">
      <div className="flex h-full w-full flex-row">
        <section className="flex flex-col items-center justify-center bg-white py-10 md:w-1/2">
          <h1 className="absolute top-2 left-5 text-4xl font-bold leading-tight tracking-tighter md:pr-8 md:text-6xl">
            Fugazi.
          </h1>

          <div className="mx-auto flex w-full max-w-sm flex-col break-words text-left">
            {lastUser ? (
              <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tighter md:pr-8 md:text-3xl">
                Welcome back, Frederik
              </h2>
            ) : (
              <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tighter md:pr-8 md:text-3xl">
                Welcome to Fugazi
              </h2>
            )}

            <p className="text-md mb-8">
              We&apos;re glad to see you again! Please sign in to your account
              to access all the features and services.
            </p>

            {/** Authentication providers */}
            <div>
              <button
                onClick={() => loginWithRedirect()}
                className="flex w-full items-center justify-center rounded border border-erie bg-none py-3 font-semibold text-erie shadow-erie hover:shadow-md"
              >
                <ExternalLinkIcon className="mr-2" width={20} height={20} />
                Sign in
              </button>
            </div>

            <small className="text-base-400 mx-auto mt-4">
              Dont have an account?{" "}
              <a className="link" href="mailto:thorbensen@gmail.com">
                Contact Team
              </a>
            </small>
          </div>
        </section>

        <section className="h-screen w-1/2 flex-initial">
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1636690513351-0af1763f6237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3271&q=80"
              alt=""
              className="object-cover h-full"
            />

            {/* <img
                src={image?.urls.regular}
                alt={
                  image.description
                    ? image.alt_description
                    : `Illustration by ${image.user.name}`
                }
                className="object-cover"
              /> */}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AuthPage;
