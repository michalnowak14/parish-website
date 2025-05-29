// lib/queries.ts
export const announcementsQuery = `*[_type == "announcement" && isActive == true] | order(publishedAt desc) {
  _id,
  title,
  "imageUrl": image.asset->url,
  body,
  publishedAt
}`;
