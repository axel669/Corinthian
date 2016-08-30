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
            <UI.Screen title="Test" backText={"test"} width={600} onBack={this.demo}>
                <UI.Button.Raised text="test" onTap={wat} />
                {/*<ExpandingMenu iconName="ion-navicon-round" iconColor="blue" />*/}
                {/*<Input.Text />
                <Input.Date />
                <Combobox selectedIndex={0}>
                    {arange(30, n => <Option key={n}>{n}</Option>)}
                </Combobox>
                {arange(60, n => <div key={n}>{n}</div>)}*/}
                {/*<Image source={url} height={150} color="cyan" />*/}
                {/*<Toggle.Awesome on={this.state.on} onChange={on => this.setState({on})} label={"Test"} subTitle="more text?" />*/}
                {/*<Button text={<span>{disabled ? <Spinner size={20} /> : null}Button Text</span>} disabled={disabled} onTap={() => this.setState({disabled: true})} />*/}
                {/*<Icon name="ion-calendar" size={20} />*/}
                {/*<Radio selectedIndex={this.state.index} onChange={index => this.setState({index})} title="Test">
                    {Array.from(range({
                        count: 10,
                        map: n => <Option value={n ** n}>{n}</Option>
                    }))}
                    <Option><Image source={url} height={30} /></Option>
                </Radio>*/}
                {/*<Button text="Test" />*/}
                {/*<div style={{width: '75%', maxWidth: 480}}>
                    <Calendar selectedDate={new Date()} />
                </div>*/}
                {/*<Input.Date onChange={date => this.setState({date})} date={this.state.date} label="My Birthday?" iconName="ion-calendar" format={"Expiration Date: {month}/{day}/{year}"} />*/}
                {/*<Button text="Wat" onTap={() => dialog.show({content: <Calendar selectedDate={new Date()} onDateSelected={cblog} />, title: "Select Date", buttons: [{text: "Cancel"}]})} />*/}
                {/*<input type="datetime" />*/}
                {/*<input type="time" onChange={evt => cblog(evt.target.value)} ref="test" />*/}
                {/*<TimeInput />*/}
                {/*<Card>
                    <RangeInput value={this.state.rangeValue} max={255} onChange={rangeValue => this.setState({rangeValue})} />
                    <input type="range" value={this.state.rangeValue} max={255} onChange={evt => this.setState({rangeValue: evt.target.value})} />
                </Card>*/}
                {/*<Input.URL label="URL" value={this.state.text} onChange={(text, valid) => {console.log(text, valid); this.setState({text});}} />
                <Input.Email label="Email" value={this.state.text} onChange={(text, valid) => {console.log(text, valid); this.setState({text});}} />
                <Input.Password label="Password" value={this.state.password} onChange={password => this.setState({password})} />
                <Input.Range value={this.state.rangeValue} max={255} onChange={rangeValue => this.setState({rangeValue})} />
                <FileInput text="Test" onChange={files => console.log(files)} multiple />*/}
                {/*<TimeSelector value={this.state.date} onChange={date => this.setState({date})} />*/}
                {/*<Input.Time value={this.state.date} onChange={date => this.setState({date})} />
                <Input.Date value={this.state.date} onChange={date => this.setState({date})} />*/}
                {/*<Input.File onChange={cblog} text="Select File" />*/}
                {/*<Flexbox colCount={3} padEnd maxItemWidth={100} align="space-around">
                    {arange(11, n => <Button text={n} block flush />)}
                </Flexbox>*/}
                {/*<Grid colCount={3} rowCount={4}>
                    {arange(11, n => <Button text={n} flush fill />)}
                </Grid>*/}
                {/*<Pinboard height={200}>
                    {arange(12,
                        n => {
                            const angle = (n / 6) * Math.PI;
                            const x = Math.cos(angle) * 70 + 145;
                            const y = Math.sin(angle) * 70 + 85;
                            const pos = {top: y, left: x, width: 30, height: 30};

                            return <div pinInfo={pos} style={{width: '100%', height: '100%', backgroundColor: 'cyan'}}>{n}</div>;
                        }
                    )}
                </Pinboard>*/}
                {/*<Input.Search iconName="ion-search" placeholder="Search Stuffs" />*/}
                {/*<Checkbox.Awesome checked={this.state.checked} onChange={checked => this.setState({checked})} label={"Test"} subTitle="more text?" />*/}
                {/*<Button text="Normal" />
                <Button text="Disabled" disabled />
                <Button.Cancel text="Cancel" />
                <Button.Confirm text="Confirm" />
                <Input.Range value={this.state.rangeValue} max={255} onChange={rangeValue => this.setState({rangeValue})} />*/}
                {/*<Form label="Form">*/}
                    {/*<Radio layout={Pinboard} layout-height={200}>
                        {arange(12,
                            n => {
                                const angle = (n / 6) * Math.PI;
                                const x = Math.cos(angle) * 70 + 145;
                                const y = Math.sin(angle) * 70 + 85;
                                const pos = {top: y, left: x, width: 30, height: 30};

                                return <div pinInfo={pos} style={{width: '100%', height: '100%'}}>{n}</div>;
                            }
                        )}
                    </Radio>*/}
                    {/*<Radio title="Test">
                        {Array.from(range({
                            count: 10,
                            map: n => <Option value={n ** n}>{n}</Option>
                        }))}
                        <Option><Image source={url} height={30} /></Option>
                    </Radio>*/}
                    {/*<Input.Text formName="Text" placeholder="Text" />
                    <Input.Password formName="Password" placeholder="Password" />
                    <Input.Search formName="Search" placeholder="Search" />
                    <Input.URL formName="URL" placeholder="URL" />
                    <Input.Email formName="Email" placeholder="Email" />

                    <Input.Date formName="date" />
                    <Input.Time formName="time" />
                    <Input.File formName="file" multiple valueFormat={list => `Files Selected: ${list.length}`} />
                    <Input.Range formName="range" min={0} max={255} />*/}
                {/*</Form>*/}
                {/*<div style={{position: 'absolute', bottom: 0, height: 50, width: 50, backgroundColor: 'cyan'}} />*/}
                {/*<Input.File*/}
                {/*<Card>
                    <Pinboard height={50}>
                        <Icon name="ion-happy" size={40} pinInfo={{top: 0, left: 10, width: 40, height: 50}} />
                        <div pinInfo={{top: 0, left: 55}}>User Name Thing?</div>
                        <div pinInfo={{top: 30, left: 55, fontSize: 11}}>User information about positiond and stuff</div>
                        <div pinInfo={{top: 5, left: 5, width: 10, height: 10, backgroundColor: 'cyan'}} />
                    </Pinboard>
                </Card>*/}
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
