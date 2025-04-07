export const TERM_ARTICLES_QUERY = `
  query TermArticles($lemma: String!, $srcLangs: [String]!, $targetLangs: [String]!) {
    conceptList(exact: $lemma, srcLangs: $srcLangs, targetLangs: $targetLangs) {
      name
      collections
      definition
      explanation
      terms {
        note
        source
        status
        expression {
          lemma
          presentationLemma
          language
          pos
          dialect
          country
        }
      }
    }
  }
`;
