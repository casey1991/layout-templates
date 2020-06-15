import { AppProps } from "next/app";
// sass
import "../public/styles/index.scss";
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default App;
