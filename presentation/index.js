// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  //Cite,
  CodePane,
  Deck,
  //Fill,
  Heading,
  Image,
  //Layout,
  Link,
  List,
  ListItem,
  //Markdown,
  Quote,
  Slide,
  //Table,
  //TableRow,
  //TableHeaderItem,
  //TableItem,
  S
  //Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues(
  {
    commonschunk1: require("../images/commonschunk1.png"),
    codeSplitting: require("../images/codesplitting.png"),
    survivejs: require("../images/survivejs.png"),
    ssrSplitting: require("../images/react-router-ssr-splitting.png")
  },
  v => v.replace("/", "")
);

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={slideTransition} transitionDuration={500} theme={theme}>
        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Webpack - The React Parts
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Agenda</Heading>
          <List>
            <Appear>
              <ListItem>Background</ListItem>
            </Appear>
            <Appear>
              <ListItem>Techniques</ListItem>
            </Appear>
            <Appear>
              <ListItem>Universal Apps</ListItem>
            </Appear>
            <Appear>
              <ListItem>QA</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Brief History of Webpack</Heading>
          <List>
            <Appear>
              <ListItem>
                2012 March - Tobias starts developing webpack due to a rejected
                PR (code splitting)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                2013 - <b>react-hot-loader</b> appears
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                2014 February - Webpack 1. Noticed by Pete Hunt of Instagram
                (popularity++)
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Brief History of Webpack</Heading>
          <List>
            <Appear>
              <ListItem>2016 July - Webpack core team established</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                2016 October -{" "}
                <Link href="https://opencollective.com/webpack">
                  Webpack Open Collective
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>2017 January - Webpack 2</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                2017 March - Open Collective reached $80k annual budget
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>2017 June - Webpack 3</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                2017 August - Annual budget roughly $300k (OC, Mozilla grant,
                support contract for Trivago)
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Related Solutions</Heading>
          <List>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/create-react-app">
                  create-react-app
                </Link>{" "}
                by Facebook
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/nwb">nwb</Link> by
                Jonny Buchanan
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://github.com/NYTimes/kyt">kyt</Link> by New
                York Times
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/webpack/optimizing"
              textColor="white"
            >
              Optimizing
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/analyzing-build-statistics">
              Analyzing Build Statistics
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                To know what your build consists of, generate{" "}
                <b>build statistics</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Use <code>--json</code> for statistics
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Use <code>--profile</code> to capture timing information
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Node API gives access to statistics too and you can find a
                couple of plugins
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Plenty of tools for analysis</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Optimization</Heading>
          <List>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types">
                  babel-plugin-transform-react-remove-prop-types
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://survivejs.com/webpack/optimizing/environment-variables">
                  webpack <code>DefinePlugin</code>
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/babel-plugin-transform-inline-environment-variables">
                  babel-plugin-transform-inline-environment-variables
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/babel-plugin-minify-replace">
                  babel-plugin-minify-replace
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Minify using{" "}
                <Link href="https://www.npmjs.com/package/uglifyjs-webpack-plugin">
                  uglifyjs-webpack-plugin
                </Link>,{" "}
                <Link href="https://www.npmjs.com/package/babel-minify-webpack-plugin">
                  babel-minify-webpack-plugin
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Bundle/code Splitting
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/building/bundle-splitting">
              Bundle Splitting
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Anti-pattern - <b>Single</b> bundle with <b>application</b> and{" "}
                <b>vendor</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>First step - Separate into two bundles</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Second step - Apply hashes to file names bust cache
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>CommonsChunkPlugin</code> can do the job
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>AggressiveSplittingPlugin</code> etc. for more control
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Separating Application and Vendor
          </Heading>
          <Image src={images.commonschunk1} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>CommonsChunkPlugin</code>
          </Heading>
          <CodePane lang="javascript">
            {`module.exports = {
  ...
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: isVendor,
    }),
  ]
};

function isVendor({ resource }) {
  return resource && resource.indexOf('node_modules') >= 0 &&
    resource.match(/\\.js$/);
}`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/building/code-splitting">
              Code Splitting
            </Link>
          </Heading>
          <Image src={images.codeSplitting} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <code>import()</code>
          </Heading>
          <CodePane lang="javascript">
            {`import(
  /* webpackChunkName: "optional-name" */ './module'
).then(
  module => {...}
).catch(
  error => {...}
);
`}
          </CodePane>
          <List>
            <Appear>
              <ListItem>
                Familiar <code>Promise</code> patterns work here
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Consider{" "}
                <Link href="https://www.npmjs.com/package/react-loadable">
                  react-loadable
                </Link>{" "}
                ,{" "}
                <Link href="https://www.npmjs.com/package/react-universal-component">
                  react-universal-component
                </Link>, etc.
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Code Splitting Output</Heading>
          <CodePane lang="javascript">
            {`webpackJsonp([0], {
  KMic: function(a, b, c) {
    ...
  },
  co9Y: function(a, b, c) {
    ...
  },
});`}
          </CodePane>
          <List>
            <Appear>
              <ListItem>
                In addition, a small <code>Promise</code> based bit to load the
                code
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} caps fit>
            Inline JavaScript
          </Heading>

          <Appear>
            <Heading size={2} caps fit textColor="tertiary">
              AJAX (async)
            </Heading>
          </Appear>

          <Appear>
            <Heading size={2} caps fit>
              <S type="strikethrough">Single Page Applications</S>
            </Heading>
          </Appear>

          <Appear>
            <Heading size={2} caps fit textColor="tertiary">
              Universal Apps
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={slideTransition} bgColor="black">
          <BlockQuote>
            <Quote>For power users the SPA is dead (SEO!).</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} caps fit textColor="tertiary">
            Enter "Universal"
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} caps fit textColor="black">
            The problem: not SSR, not Code-Splitting
          </Heading>
          <Appear>
            <Heading size={5} caps fit textColor="tertiary">
              Doing both together
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} caps fit textColor="black">
              without trading one for the other
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} caps fit textColor="tertiary">
            SSR + SPLITTING
          </Heading>
          <Appear>
            <Heading size={2} textColor="black">
              ===
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} caps fit textColor="tertiary">
              UNIVERSAL RENDERING
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={10} textColor="black">
            Here's what the React Router docs have to say about it
          </Heading>
          <Appear>
            <Image
              src={images.ssrSplitting}
              margin="10px auto"
              height="550px"
            />
          </Appear>
          <Appear>
            <Quote textColor="tertiary">#ssr #splitting #godspeed</Quote>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} caps fit>
            Our sites are heavier than ever.
          </Heading>
          <Appear fid="2">
            <Heading size={2} caps textColor="tertiary">
              not splitting
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps textColor="black">
              doesn't just
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps textColor="tertiary">
              increase bounce rates
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps fit>
              it also compounds the SEO problem
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps fit textColor="tertiary">
              since search engines like fast sites
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            SSR with Code Splitting on the Server Side
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../examples/ssr-with-code-splitting.js")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            SSR with Code Splitting on Components
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../examples/ssr-component.js")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} caps fit margin="12px 0">
            Until now, this has been painful
          </Heading>

          <Appear>
            <Heading size={2} caps fit margin="12px 0">
              "Universal" now does the work of transporting rendered chunks
            </Heading>
          </Appear>

          <Appear>
            <Heading size={2} caps fit margin="12px 0">
              to the client for speedy synchronous renders
            </Heading>
          </Appear>

          <Appear>
            <CodePane
              lang="javascript"
              source={`
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'

const app = ReactDOMServer.renderToString(<App />)
const { js, styles, cssHash } = flushChunks(webpackStats, {
  chunkNames: flushChunkNames()
})
          `}
            />
          </Appear>

          <Appear>
            <Heading size={2} caps fit textColor="tertiary" margin="20px 0">
              like traditional web apps
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            A few other things Universal does:
          </Heading>
          <List>
            <Appear>
              <ListItem>imports 2 files: js + stylesheet chunks</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                babel plugin generates <code>require.resolveWeak</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Component-level state fetching + client rehydration
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Route-aware pre-fetching (of both data + chunks!)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                {
                  "Universal.render() === single entry point for both client/server"
                }
              </ListItem>
            </Appear>
          </List>

          <Appear>
            <Heading size={2} fit textColor="tertiary" margin="20px 0">
              checkout: https://github.com/faceyspacey/universal-render
            </Heading>
          </Appear>

          <Appear>
            <Heading size={6} margin="20px 0">
              Thanks{" "}
              <span style={{ color: "rgb(235, 78, 145)" }}>@faceyspacey</span>
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Hot Module Replacement</Heading>
          <List>
            <Appear>
              <ListItem>
                <Link href="https://survivejs.com/webpack/appendices/hmr-with-react/">
                  It is complicated
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Option: hard refresh and rehydration from{" "}
                <code>localStorage</code> (loses state local to components but
                not application state)
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/">
            <Heading size={1}>SurviveJS</Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="524px" />
        </Slide>

        <Slide transition={slideTransition} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made in Finland by
          </Heading>
          <Link href="https://twitter.com/bebraw">
            <Heading caps fit size={2} textColor="secondary">
              Juho Vepsäläinen
            </Heading>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
