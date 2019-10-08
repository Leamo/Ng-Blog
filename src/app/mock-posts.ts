import { Post } from './post';

export const POSTS: Post[] = [
  {
    title: 'Mon Premier Post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    loveIts: 0,
    created_at: new Date() 
  },
  {
    title: 'Mon Deuxième Post',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    loveIts: 1,
    created_at: new Date() 
  },
  {
    title: 'Un autre Post',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    loveIts: -1,
    created_at: new Date() 
  },
  {
    title: 'Un dernier Post',
    content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    loveIts: 0,
    created_at: new Date() 
  },
];
