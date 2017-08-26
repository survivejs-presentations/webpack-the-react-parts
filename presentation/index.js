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
  Layout,
  Link,
  List,
  ListItem,
  //Markdown,
  Quote,
  Slide,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  S,
  Text
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
              <ListItem>Little background</ListItem>
            </Appear>
            <Appear>
              <ListItem>Live demos</ListItem>
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
          <Heading caps size={1}>
            Build Tools
          </Heading>
          <Layout>
            <Table>
              <thead>
                <TableRow>
                  <TableHeaderItem>1st Gen.</TableHeaderItem>
                  <TableHeaderItem>2nd Gen.</TableHeaderItem>
                  <TableHeaderItem>3rd Gen.</TableHeaderItem>
                </TableRow>
              </thead>
              <tbody>
                <TableRow>
                  <TableItem>Make</TableItem>
                  <TableItem>Grunt</TableItem>
                  <TableItem>Browserify</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem />
                  <TableItem>Gulp</TableItem>
                  <TableItem>
                    <b>Webpack</b>
                  </TableItem>
                </TableRow>
                <TableRow>
                  <TableItem />
                  <TableItem>Broccoli</TableItem>
                  <TableItem>FuseBox</TableItem>
                </TableRow>
              </tbody>
            </Table>
          </Layout>
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

        <Slide transition={slideTransition}>
          <Heading size={2}>Optimization</Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../examples/optimization.js")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Bundle splitting</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/bundle-splitting.js")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Code splitting</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/code-splitting.js")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>React Through a CDN</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/cdn.js")}
            margin="20px auto"
          />
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

        <Slide transition={slideTransition} bgColor="black">
          <Heading size={2}>SSR with Code Splitting on Server Side</Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../examples/ssr-with-code-splitting.js")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition} bgColor="black">
          <Heading size={2}>SSR with Code Splitting on Component Side</Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../examples/ssr-component.js")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition} bgColor="black">
          <Appear>
            <Heading size={2} caps fit textColor="white" margin="12px 0">
              Until now, this has been painful
            </Heading>
          </Appear>

          <Appear>
            <Heading size={2} caps fit textColor="tertiary" margin="12px 0">
              "Universal" now does the work of transporting rendered chunks
            </Heading>
          </Appear>

          <Appear>
            <Heading size={2} caps fit textColor="white" margin="12px 0">
              to the client for speedy synchronous renders
            </Heading>
          </Appear>

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

          <Appear>
            <Heading size={2} caps fit textColor="tertiary" margin="20px 0">
              like traditional web apps
            </Heading>
          </Appear>

          <Appear>
            <Heading size={6} textColor="white" margin="20px 0">
              thanks <Text textColor="rgb(235, 78, 145)">@faceyspacey</Text>
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>A few other things Universal does:</Heading>
          <List>
            <Appear>
              <ListItem>imports 2 files: js + stylesheet chunks</ListItem>
            </Appear>
            <Appear>
              <ListItem>babel plugin generates require.resolveWeak</ListItem>
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
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Hot Module Replacement</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/hmr.js")}
            margin="20px auto"
          />
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
