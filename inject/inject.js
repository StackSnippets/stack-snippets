templates = {
  baseReact: `<!-- begin snippet: js hide: false console: true babel: true -->

<!-- language: lang-js -->

    class App extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <p>One</p>
        );
      }
    }
    ReactDOM.render(<App />, document.getElementById("root"));

<!-- language: lang-html -->

    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <div id="root"></div>

<!-- end snippet -->`,
  baseVue: `<!-- begin snippet: js hide: false console: true babel: true -->

<!-- language: lang-js -->

    const app = new Vue({
      el: '#app',
      data: function() {
        return {
          message: "Vue"
        }
      },
      created: function () {
        console.log('created');
      },
      methods: {
      }
    })

<!-- language: lang-html -->

    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
    <div id="app">
      {{message}}
    </div>

<!-- end snippet -->`
};

(function() {
  const template = templates[contentId];
  const answerInputNode = document.getElementById('wmd-input');
  answerInputNode.value += template;
  answerInputNode.click();
  answerInputNode.scrollIntoView({behavior: 'smooth', block: 'center'})
})();

