export interface Messages {
  error: string;
  success: string;
  warning: string;
  info: string;
}

// generic messages
const messages: Messages = {
  error: "Oops! Something went wrong. 😢 Try again later!",
  success: "Hooray! Operation successful! 🌟",
  warning: "Heads up! There's something you should know.",
  info: "Just an FYI...",
};

// specific messages for reports
export const reportMessages: Messages = {
  error: "Uh-oh! Couldn't create the report. 😢 Give it another shot!",
  success: "Great news! Report created successfully! 🌟",
  warning: "Hold on! Something seems off.",
  info: "Hey, did you know...",
};

// specific messages for comments
export const commentMessages: Messages = {
  error: "Oh no! Couldn't post your comment. 😢 Give it another try!",
  success: "Awesome! Your comment has been posted! 🌟",
  warning: "Psst! There's a little warning.",
  info: "Just wanted to share...",
};

export default messages;
