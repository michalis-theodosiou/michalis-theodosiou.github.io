import { trackEvent } from "./trackEvent";

export const trackIncrement = (value: Number) =>
  trackEvent("Counter", "Counter incremented", { value });