import type { FeedbackType } from './types/FeedbackType';
import { writable } from "svelte/store";

export const FeedbackStore = writable([ 
   {
      id: 1,
      rating: 10,
      text: 'As we can see from the code, our notes contain an id, a title, content that has the details of the note, a list of tags, the date it was last modified, and an isFavorite flag, indicating if the note has been added to favorites or not. Most of the display is straightforward, with a few exceptions.'
      },
      {
      id: 2,
      rating: 8,
      text: 'As we can see from the code, our notes contain an id, a title, content that has the details of the note, a list of tags, the date it was last modified, and an isFavorite flag, indicating if the note has been added to favorites or not. Most of the display is straightforward, with a few exceptions.'
      },
      {
      id: 3,
      rating: 9,
      text: 'As we can see from the code, our notes contain an id, a title, content that has the details of the note, a list of tags, the date it was last modified, and an isFavorite flag, indicating if the note has been added to favorites or not. Most of the display is straightforward, with a few exceptions.'
      }
])