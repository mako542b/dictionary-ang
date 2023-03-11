export interface Wordinterface {
    word: string;
    phonetic: string;
    phonetics: {
      text: string;
      audio?: string;
    }[];
    origin: string;
    meanings: meaninginterface[];
  }

  export interface meaninginterface {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example?: string;
      synonyms: string[];
      antonyms: string[];
    }[];
  }