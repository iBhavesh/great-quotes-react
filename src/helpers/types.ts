export interface Quote {
  text: string;
  author: string;
}

export interface QuoteWithId extends Quote {
  id: string;
}
