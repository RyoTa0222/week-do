type TokenType =
  | 'color'
  | 'fontFamilies'
  | 'sizing'
  | 'spacing'
  | 'borderRadius'
  | 'lineHeights'
  | 'letterSpacing'
  | 'fontWeights'
  | 'fontSizes'

interface TokenObj {
  value: string
  type: TokenType
}

declare module '*/tokens.json' {
  interface Token {
    colors: Record<string, TokenObj | Record<string, TokenObj>>
    fontFamilies: Record<string, TokenObj>
    sizing: Record<string, TokenObj>
    spacing: Record<string, TokenObj>
    borderRadius: Record<string, TokenObj>
    lineHeights: Record<string, TokenObj>
    letterSpacing: Record<string, TokenObj>
    fontWeights: Record<string, TokenObj>
    fontSizes: Record<string, TokenObj>
  }

  const value: Token
  export = value
}
