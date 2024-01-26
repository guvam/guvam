import { getHighlighter } from 'shiki';

export const highlighter = await getHighlighter({
  theme: 'nord',
  langs: ['css', 'js'],
});
