import { z } from "zod";

const User = z.object({
  // description: z.string(),
  // facebook_id: z.string().optional(),
  // followees_count: z.number(),
  // followers_count: z.number(),
  // github_login_name: z.string().nullable(),
  id: z.string(),
  // items_count: z.number(),
  // linkedin_id: z.string().optional(),
  // location: z.string(),
  name: z.string(),
  // organization: z.string(),
  // permanent_id: z.number(),
  profile_image_url: z.string().url(),
  // team_only: z.boolean(),
  // twitter_screen_name: z.string().nullable(),
  // website_url: z.string().optional(),
});

const Tag = z.object({
  name: z.string(),
  versions: z.array(z.string()),
});

export const qiitaItemsResponseSchema = z.object({
  // rendered_body: z.string(),
  body: z.string(),
  // coediting: z.boolean(),
  // comments_count: z.number(),
  // created_at: z.string(),
  // group: z.any().nullable(),
  id: z.string(),
  likes_count: z.number(),
  private: z.boolean(),
  // reactions_count: z.number(),
  // stocks_count: z.number(),
  tags: z.array(Tag),
  title: z.string(),
  updated_at: z.string(),
  url: z.string().url(),
  user: User,
  // page_views_count: z.number(),
  // team_membership: z.any().nullable(),
  // organization_url_name: z.string().nullable(),
  // slide: z.boolean()
})

export type qiitaItemsResponse = z.infer<typeof qiitaItemsResponseSchema>;
