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
  //S
  //Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues(
  {
    commonschunk1: require("../images/commonschunk1.png"),
    codeSplitting: require("../images/codesplitting.png"),
    survivejs: require("../images/survivejs.png"),
  },
  v => v.replace("/", "")
);

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quarternary: "rgba(255, 219, 169, 0.43)",
});
theme.screen.components.codePane.fontSize = "60%";

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
              <ListItem>Related Solutions</ListItem>
            </Appear>
            <Appear>
              <ListItem>Techniques</ListItem>
            </Appear>
            <Appear>
              <ListItem>Universal Apps</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Brief History of Webpack</Heading>
          <List>
            <Appear>
              <ListItem>
                2012 March - Tobias starts developing webpack due to{" "}
                <Link href="https://github.com/medikoo/modules-webmake/issues/7">
                  an abandoned PR
                </Link>{" "}
                (code splitting)
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
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Brief History of Webpack</Heading>
          <List>
            <Appear>
              <ListItem>
                2017 March - Open Collective reached $80k annual budget
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                2017 April -<Link href="https://survivejs.com/webpack/">
                  SurviveJS - Webpack
                </Link>{" "}
                goes paper
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>2017 June - Webpack 3</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                2017 November - Annual budget roughly $400k (OC, Mozilla grant,
                support contract for Trivago)
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Related Solutions
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <Link href="https://www.npmjs.com/package/create-react-app">
              create-react-app (CRA)
            </Link>{" "}
            by Facebook
          </Heading>
          <List>
            <Appear>
              <ListItem>webpack based setup out of the box</ListItem>
            </Appear>
            <Appear>
              <ListItem>Consume as a dependency</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>eject</b> to get access to configuration
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                See also{" "}
                <Link href="https://www.npmjs.com/package/react-app-rewired">
                  react-app-rewired
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://www.npmjs.com/package/nwb">nwb</Link> by Jonny
            Buchanan
          </Heading>
          <List>
            <Appear>
              <ListItem>Less opinionated than CRA</ListItem>
            </Appear>
            <Appear>
              <ListItem>Not just React</ListItem>
            </Appear>
            <Appear>
              <ListItem>A toolkit to improve your development flow</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://github.com/NYTimes/kyt">kyt</Link> by New York
            Times
          </Heading>
          <List>
            <Appear>
              <ListItem>Closer to nwb</ListItem>
            </Appear>
            <Appear>
              <ListItem>Provides starter-kyts</ListItem>
            </Appear>
            <Appear>
              <ListItem>Covers whole stack</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <Link href="https://www.npmjs.com/package/webpack-blocks">
              webpack-blocks
            </Link>{" "}
            by Andy Wermke
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Andy read{" "}
                <Link href="https://survivejs.com/webpack/">my book</Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Compose configuration out of "blocks"</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                You can also do this yourself with{" "}
                <Link href="https://www.npmjs.com/package/webpack-merge">
                  webpack-merge
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <Link href="https://www.npmjs.com/package/neutrino">neutrino</Link>{" "}
            by Eli Perelman (Mozilla)
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Similar goal as for <b>webpack-blocks</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Revolves around the idea of <b>presets</b>. See the{" "}
                <Link href="https://neutrino.js.org/presets/neutrino-preset-react/">
                  React one
                </Link>.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://survivejs.com/blog/neutrino-interview/">
                  Read {"Eli's"} interview to learn more
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Techniques
          </Heading>
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
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/environment-variables">
              Feature Flags
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                <code>DefinePlugin</code> replaces free variables. Babel can do
                this too.
              </ListItem>
            </Appear>
          </List>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../examples/env-1.js")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
          <Appear>
            <div>Configuration</div>
          </Appear>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../examples/env-2.js")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide transition={slideTransition} bgColor="black">
          <BlockQuote>
            <Quote>
              Minifying === How to convert code into a smaller form without
              losing anything essential?
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/optimizing/minifying">
              Minifying
            </Link>
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Certain unsafe transformations can <b>break</b> code
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/uglifyjs-webpack-plugin">
                  UglifyJs
                </Link>,{" "}
                <Link href="https://www.npmjs.com/package/babel-minify-webpack-plugin">
                  babel-minify-webpack-plugin
                </Link>,{" "}
                <Link href="https://www.npmjs.com/package/webpack-closure-compiler">
                  Closure Compiler
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                CSS can be minified too through{" "}
                <Link href="https://www.npmjs.com/package/clean-css">
                  clean-css
                </Link>{" "}
                and <Link href="http://cssnano.co">cssnano</Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Same for HTML. See{" "}
                <Link href="https://www.npmjs.com/package/posthtml">
                  posthtml
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Bundle Splitting
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
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/commons.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>CommonsChunkPlugin</code> and <code>manifest</code>
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/manifest.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Code Splitting
          </Heading>
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
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/import.js")}
            margin="20px auto"
            overflow="overflow"
          />
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
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/split-output.js")}
            margin="20px auto"
            overflow="overflow"
          />
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
              Single Page Applications
            </Heading>
          </Appear>

          <Appear>
            <Heading size={2} caps fit textColor="tertiary">
              Server Side Rendering (SSR)
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} caps fit textColor="black">
            The problem: not SSR, not code splitting
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
            SSR + Code Splitting
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
          <Heading size={2} fit>
            Universal Rendering on the Server Side
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../examples/ssr-with-code-splitting.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Universal Rendering on Component Level
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../examples/ssr-component.js")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            A few other things Universal does:
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Imports two files: JavaScript and stylesheet chunks
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Babel plugin generates <code>require.resolveWeak</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Component-level state fetching and client rehydration
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Route-aware pre-fetching (of both data and chunks!)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <code>Universal.render()</code> === Single entry point for both
                client and server
              </ListItem>
            </Appear>
          </List>

          <Appear>
            <Heading size={6} margin="20px 0">
              <Link href="https://github.com/faceyspacey/universal-demo">
                Check demo!
              </Link>
            </Heading>
          </Appear>

          <Appear>
            <Heading size={6} margin="20px 0">
              Thanks{" "}
              <Link href="https://twitter.com/faceyspacey">
                <span style={{ color: "rgb(235, 78, 145)" }}>@faceyspacey</span>
              </Link>
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/webpack/">
            <Heading size={1}>SurviveJS - Webpack</Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="324px" />
          <Link href="https://twitter.com/bebraw">
            <Heading size={2} textColor="secondary">
              by Juho Vepsäläinen
            </Heading>
          </Link>
          <br />
          <Link href="https://github.com/survivejs-demos/webpack-the-react-parts">
            <Heading size={4} textColor="tertiary">
              Check the slides and demo at GitHub
            </Heading>
          </Link>
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
      </Deck>
    );
  }
}
