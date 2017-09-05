import ReactDOMServer from "react-dom/server";
import { flushChunkNames } from "react-universal-component/server";
import flushChunks from "webpack-flush-chunks";

...

const app = ReactDOMServer.renderToString(<App />);
const { js, styles, cssHash } = flushChunks(webpackStats, {
  chunkNames: flushChunkNames()
});

res.send(`
  <html>
    ${styles}
    <div id="root">${app}</div>
    ${cssHash}
    ${js}
  </html>
`);
