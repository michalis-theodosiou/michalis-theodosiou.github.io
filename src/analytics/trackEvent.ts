const getCommonProperties = () => {
    return {
      resolution: window.screen.width + "x" + window.screen.height,
      screen: {
        width: window.screen.width,
        height: window.screen.height,
        density: window.devicePixelRatio,
      },
    };
  };
  
  interface EventData {
    [key: string]: string | number | boolean | object;
  }

  declare global {
    interface Window { analytics: any; }
}

  
  export const trackEvent = (
    name: string,
    action: string,
    event?: EventData,
    widget?: string
  ) =>
    window.analytics.track(
      widget ? `${name}/${widget}/${action}` : `${name}/${action}`,
      { ...getCommonProperties(), ...event }
    );