import { cpp } from '@codemirror/lang-cpp';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { java } from '@codemirror/lang-java';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import type { Extension } from '@codemirror/state';
import type { LanguageId } from '../../types/course';

export function languageExtension(language: LanguageId): Extension {
  switch (language) {
    case 'python': return python();
    case 'javascript': return javascript({ jsx: true, typescript: true });
    case 'html-css': return [html(), css()];
    case 'java': return java();
    case 'cpp': return cpp();
  }
}
