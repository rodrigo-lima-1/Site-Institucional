export {};

declare global {
  interface Window {
    Card: typeof import('./components/card').Card;
  }
}
