/**
 * Social media links used throughout the application
 */
export const SOCIAL_LINKS = {
  /** Twitter/X profile URL */
  TWITTER: "https://x.com/0xAndreja",
  /** LinkedIn profile URL */
  LINKEDIN: "https://www.linkedin.com/in/andreja-kojadinovic/",
  /** GitHub profile URL */
  GITHUB: "https://github.com/AndrejaSRB",
} as const;

/** Type for social media platform names */
export type SocialPlatform = keyof typeof SOCIAL_LINKS;
