import { parser } from "./syntax.grammar";
import { LRLanguage, LanguageSupport, syntaxHighlighting } from "@codemirror/language";
import { styleTags, tagHighlighter, tags as t } from "@lezer/highlight";

export const csvLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        Separator: t.separator,
        Cell1: t.string,
        Cell2: t.keyword,
        Cell3: t.number,
        Cell4: t.definition(t.variableName),
        Cell5: t.typeName,
      }),
    ],
  }),
});

export function csv() {
  return new LanguageSupport(csvLanguage);
}
