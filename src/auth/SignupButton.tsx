export const SignupButton = () => {
    return (
      <a
        href="/auth/signup"
        className="block rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-secondary hover:text-primary focus:outline-none focus:ring"
        type="button"
      >
        Sign up
      </a>
    );
  };