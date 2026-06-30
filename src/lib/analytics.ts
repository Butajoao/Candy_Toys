type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent("candytoy:analytics", {
      detail: { eventName, payload },
    }),
  );
}
