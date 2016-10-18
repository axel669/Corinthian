const range = function* (args) {
  let {start = 0, end = null, count = null, step = 1, map = i => i} = args;

  if (end === null) {
    if (count === null) {
      throw new Error("Must give the size of the range")
    }
    end = start + count;
  }

  while (true) {
    if (start >= end) {
      break;
    }
    yield map(start);
    start += step;
  }
};

window.frange = function* (count, map = i => i) {
    let current = 0;
    while (true) {
        if (current === count) {
            break;
        }
        yield map(current);
        current += 1;
    }
};
window.arange = (count, map) => Array.from(frange(count, map));

// window.benchmark = (iterations, first, second) => {
//     const r = [];
//     for (const testNum of range({count: 30})) {
//         let a = performance.now();
//         for (let i = 0; i < iterations; i += 1) {
//             first(i);
//         }
//         a = performance.now() - a;
//
//         let b = performance.now();
//         for (let i = 0; i < iterations; i += 1) {
//             second(i);
//         }
//         b = performance.now() - b;
//         r.push([a.toFixed(3), b.toFixed(3)]);
//     }
//     return r;
// };
//
// const checkProp = (obj, prop, value) => obj.hasOwnProperty(prop) === true && obj[prop] === value;
// const x = {a: 10, b: 12};
//
// const res = benchmark(1e6, (i) => (i % 2 === 0) ? i >> 1 : 0, (i) => (i % 2 === 0) ? i / 2 : 0);
// console.log(res.map(i => i.join('\t')).join('\n'));

/*
const url = "http://vignette1.wikia.nocookie.net/bayonetta/images/e/e3/Cereza_Bayonetta_2_render.png/revision/latest?cb=20140615210025";
*/
const url = "http://assets1.ignimgs.com/thumbs/userUploaded/2014/10/12/Bayonetta2_1280-1413142451100.jpg";

App.rippleEnabled = true;
const Main = React.createClass({
    async demo() {
        // if (await Dialog.confirm("Really?") === true) {
            console.log("Nope!");
        // }
    },
    getInitialState() {
        return {
            checked: false,
            on: false,
            disabled: false,
            button: {
                image: false
            },
            index: -1,
            text: "",
            password: "",
            value: null,
            date: chrono(),
            rangeValue: 100
        };
    },
    render() {
        const {disabled} = this.state;
        const textHandler = (text, value) => {
            // console.log('value', value);
            this.setState({text, value});
        }
        const extension = {
            type: 'grid',
            items: [1, 2, 3, 4]
        };
        const wat = () => {
            // debugger;
            App.navigation.push("/test");
        };

        return (
            <UI.Screen title="Test" backText={"test"} width={600} onBack={this.demo} scrollable>
                <UI.Card titleColor="#444" titleTextColor="white" title="Test">Content</UI.Card>
                <UI.Button block text="Test" />
                <UI.Button text="Test" />
                <UI.Button.Raised text="test" onTap={wat} />
                <UI.Input.Range min={0} max={100} value={this.state.rangeValue} onChange={rangeValue => this.setState({rangeValue})} />
                <UI.ProgressBar progress={this.state.rangeValue / 100} />
                <UI.Form>
                    <UI.Toggle formName="toggle" label="Test" />
                    <UI.Input.Time formName="time" format="{hour/12padded} - {minute} - {second}" />
                    <UI.Input.Date formName="date" />
                    <UI.Input.Text formName="text" />
                    <UI.Input.Password formName="pw" />
                    <UI.Input.Search formName="search" />
                    <UI.Input.URL formName="url" />
                    <UI.Input.Range min={0} max={100} />
                    <UI.Radio formName="radio">
                        {arange(10, n => <UI.Option value={n ** 2}>{n}</UI.Option>)}
                    </UI.Radio>
                </UI.Form>
            </UI.Screen>
        );
    }
});

App.start(
    <Route>
        <Route path="/" component={Main} />
        <Route path="/test" component={() => <UI.Screen title="test" backText="Main" />} />
    </Route>
);

// const token = ajax.cancelToken();
// (async () => {
//     await chrono.wait(500);
//     console.log(await dialog.spinner("Logging in"));
//     // console.log('done');
//     // console.log(
//     //     await dialog.spinner("Logging in").then(
//     //     )
//     // );
//     // console.log(await ajax(`http://axel669.net/echo/index2.php?t=${Date.now()}`, {token}));
// })();
// (async () => {
//     // await chrono.wait(1000);
//     // console.log(await dialog.spinner("Logging in"));
//     dialog.hide(
//         dialog.success(await ajax(`http://axel669.net/echo/index2.php?t=${Date.now()}`, {token}))
//     );
// })();
// chrono.trigger(2000, token.cancel);
