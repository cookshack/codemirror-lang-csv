import { parser } from "./syntax.grammar";
import {
  LRLanguage,
  LanguageSupport,
  indentNodeProp,
  foldNodeProp,
  foldInside,
  delimitedIndent,
} from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";

export const csvLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        Separator: t.separator,
        Value: t.string,
        String: t.string,
      }),
    ],
  }),
});

export function csv() {
  return new LanguageSupport(csvLanguage);
}
