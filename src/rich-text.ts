/**
 * Swiss UI - Rich Text Components
 *
 * Optional rich text editing components that require Tiptap.
 *
 * Peer Dependencies:
 * - @tiptap/react
 * - @tiptap/starter-kit
 * - @tiptap/extension-link
 * - @tiptap/extension-underline
 *
 * @example
 * ```tsx
 * import { RichTextEditor } from '@swiss-ui/react/rich-text';
 *
 * <RichTextEditor
 *   value={html}
 *   onChange={setHtml}
 *   placeholder="Enter formatted text..."
 * />
 * ```
 */

export { RichTextEditor } from './components/RichTextEditor';
export type { RichTextEditorProps } from './components/RichTextEditor';

export { RichTextToolbar } from './components/RichTextEditor';
export type { RichTextToolbarProps } from './components/RichTextEditor';

export { LinkDialog } from './components/RichTextEditor';
export type { LinkDialogProps } from './components/RichTextEditor';
