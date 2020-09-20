import React from "react";
import { AppProps } from "next/app";
// TAG: INJECT_JSS START
import { ThemeProvider } from "react-jss";
// TAG: INJECT_JSS END
import { defaultTheme } from "@lib/theme";
const App = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    // TAG: INJECT_JSS START
    // remove server side jss styles
    const style = document.getElementById("server-side-styles");
    if (style) {
      style?.parentNode?.removeChild(style);
    }
    // TAG: INJECT_JSS END
  }, []);
  return (
    // TAG: INJECT_JSS START
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
    // TAG: INJECT_JSS END
  );
};
export default App;
