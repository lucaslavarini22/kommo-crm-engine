/**
 * Design Tokens extraídos via Engenharia Reversa do Kommo Brasil (kommo.com/br)
 * Padrão Tailwind CSS v4 & Next.js
 */

export const KommoTokens = {
  colors: {
    brand: {
      primary: '#00A0FF',       // Kommo Electric Blue
      primaryHover: '#0087D6',
      cyan: '#00D2FF',
      deepNavy: '#0E0142',      // Texto principal de alto contraste
    },
    messaging: {
      whatsapp: '#15CF74',     // Verde oficial WhatsApp Meta API
      whatsappHover: '#2DA771',
      telegram: '#229ED9',
      instagram: '#E1306C',
    },
    background: {
      base: '#FFFFFF',
      surface: '#F8FAFC',
      cardHover: '#F1F5F9',
      darkSurface: '#080126',
    },
    status: {
      leadNew: '#3B82F6',
      leadContacted: '#F59E0B',
      leadNegotiation: '#8B5CF6',
      leadWon: '#10B981',
      leadLost: '#EF4444',
    }
  },
  typography: {
    fontHeading: 'Euclid Circular A, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontBody: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    }
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  shadows: {
    card: '0 4px 20px -2px rgba(14, 1, 66, 0.05)',
    cardHover: '0 12px 30px -4px rgba(14, 1, 66, 0.12)',
    floatingButton: '0 8px 24px -4px rgba(0, 160, 255, 0.3)',
  }
} as const;

export type KommoTokensType = typeof KommoTokens;
