/**
 * In this challenge, you must find and attach to each ad the ad (or ads)
 * with which the current ad has the most tags in common. This algo will
 * be very useful to get similar products of a given product.
 * Attached ads must be sorted by their title (A to Z).
 * You must not change the order of the main list of ads.
 *
 * @param ads List of ads without closestAds
 * @returns The same list but with a new closestAds prop on each
 */

// ↓ uncomment bellow lines and add your response!

// export default function ({
//   ads,
// }: {
//   ads: AdWithTags[];
// }): AdWithTagsAndClosestAds[] {
//   const adsWithClosestAds: AdWithTagsAndClosestAds[] = [];

//   ads.forEach((ad) => {
//     const closestAds: AdWithTags[] = [];

//     ad.tags.forEach((tag) => {
//       for (let i = 0; i < ads.length; i++) {
//         if (ads[i].title !== ad.title) {
//           for (let j = 0; j < ads[i].tags.length; j++) {
//             if (tag === ads[i].tags[j]) {
//               closestAds.push(ads[i]);
//             }
//           }
//         }
        
//       }
//     })

//     adsWithClosestAds.push({...ad, closestAds})
//   })
  
//   return adsWithClosestAds;
// }


// used interfaces, do not touch
export interface AdWithTags {
  title: string;
  price: number;
  tags: string[];
}

export interface AdWithTagsAndClosestAds extends AdWithTags {
  closestAds: AdWithTags[];
}
