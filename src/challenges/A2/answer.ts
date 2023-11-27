/**
 * In this challenge, you have to add a list of tags to each category (based on
 * ad tags in the category). Duplicate tags for one category is not permitted. Tags
 * must me sorted alphabatically. Categories order, ads order and ads tags order must remain
 * untouched.
 *
 * @param categories List of categories without tags, but with ads
 * @returns List of categories with a new prop tags
 */

// ↓ uncomment bellow lines and add your response!

// export default function ({
//   categories,
// }: {
//   categories: Category[];
// }): CategoryWithTags[] {
//   const categoriesWithTags: CategoryWithTags[] = [];

//   categories.forEach((category) => {
//     let categoryTagsSet: Set<string> = new Set();

//     category.ads.forEach((ad) => {
//       ad.tags.forEach((tag) => {
//         categoryTagsSet.add(tag);
//       })
//     })

//     const categoryTags: string[] = Array.from(categoryTagsSet).sort();

//     categoriesWithTags.push({...category, tags: categoryTags});
//   })

//   return categoriesWithTags;
// }


// used interfaces, do not touch
interface Ad {
  title: string;
  price: number;
  tags: string[];
}

export interface Category {
  ads: Ad[];
  name: string;
}

export interface CategoryWithTags extends Category {
  tags: string[];
}
