/**
 * In this challenge, you have to regroup messages into an array of day based on their
 * sentAt property, messages in a day must be sorted by their sent at prop (oldest first)
 * The main array must be sort chronologically by their day dates (oldest first)
 * You have to manipulate dates in vanillaJS. Be carefull to call, if needed, setUTCHours, setUTCMinutes, ...
 * instead of setHours, setMinutes, ... to avoid timezone offsets!
 *
 * Example:
 * Input: [{ content: "Hi there", sentAt: "2020-11-17T10:38:01.021Z" }, { content: "Hello", sentAt: "2020-11-17T11:45:01.721Z" }, { content: "It's a new day", sentAt: "2020-11-18T10:38:01.021Z" }]
 * Output: [
 *      {
 *          day: "2020-11-17T00:00:00.000Z",
 *          messages: [
 *              { content: "Hi there", sentAt: "2020-11-17T10:38:01.021Z" },
 *              { content: "Hello", sentAt: "2020-11-17T11:45:01.721Z" },
 *          ]
 *      },
 *      {
 *          day: "2020-11-18T00:00:00.000Z",
 *          messages: [
 *              { content: "It's a new day", sentAt: "2020-11-18T10:38:01.021Z" },
 *          ]
 *      },
 * ]
 *
 * @param messages List of messages, unsorted and not grouped in days
 * @returns Sorted list of days (only days with messages!) with a list of sorted messages of the day
 */

import { log } from "console";

// ↓ uncomment bellow lines and add your response!

export default function ({ messages }: { messages: Message[] }): DayMessages[] {
  const getISOFormattedDay = (date: string): string => {
    const dateDay: number = new Date(date).getUTCDate();
    const month: number = new Date(date).getUTCMonth() + 1;
    const year: number = new Date(date).getUTCFullYear();
    
    const ISODay: Date = new Date(year, month);
    ISODay.setUTCDate(dateDay);
    ISODay.setUTCHours(0);    

    return ISODay.toISOString();
  };

  let daysSet: Set<string> = new Set();

  messages.forEach((message: Message): void => {
    daysSet.add(getISOFormattedDay(message.sentAt));
  })

  const days: string[] = Array.from(daysSet).sort(
    (a: string, b: string): number => new Date(a).getTime() - new Date(b).getTime()
  );

  const dayMessages: DayMessages[] = days.map((day: string): DayMessages => {
    const dayFilteredMessages: Message[] = messages.filter((message: Message): boolean => {      
      return getISOFormattedDay(message.sentAt) === day
    })

    return {
      day: day,
      messages: dayFilteredMessages
    }
  })

  dayMessages.forEach((dayMessage: DayMessages): void => {
    dayMessage.messages.sort(
      (a: Message, b: Message): number => new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime()
    )
  })

  return dayMessages;
}

// used interfaces, do not touch
export interface Message {
  content: string;
  sentBy: string;
  sentAt: string;
  message: string;
}

export interface DayMessages {
  day: string;
  messages: Message[];
}
