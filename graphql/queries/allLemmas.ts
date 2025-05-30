export const ALL_LEMMAS_QUERY = `query AllLemmas($inputValue: String!, $searchMode: String!, $srcLangs: [String]!, $targetLangs: [String]!, $wantedDicts: [String]!, $after: String) {
      stemList(
        first: 100
        search: $inputValue
        mode: $searchMode
        srcLangs: $srcLangs
        targetLangs: $targetLangs
        wantedDicts: $wantedDicts
        after: $after
      ) {
        totalCount
        edges {
          node {
            stem
          }
        }
      }
    }`;
