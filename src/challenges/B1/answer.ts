/**
 * In this challenge, you must sort messages chronologically (oldest to latest) based on
 * their sentAt prop. If some messages have the same sentAt, then they should be
 * sorted by their content length (shortest first)
 *
 * @param messages Unsorted list of messages
 * @returns Sorted list of messages
 */

// ↓ uncomment bellow lines and add your response!

// export default function ({ messages }: { messages: Message[] }): Message[] {
//   return messages.sort((a, b) => {
//     return new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime() || a.content.length - b.content.length
//   });
// }


// used interfaces, do not touch
export interface Message {
  content: string;
  sentBy: string;
  sentAt: string;
}
