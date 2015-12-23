const {Route} = ReactRouter;
// let {RaisedButton, Screen} = UI;

const Wrapper = React.createClass({
    render () {
        return <div style={{backgroundColor: 'lightteal', height: '100%'}}>{this.props.children}</div>;
    }
});

const Main = React.createClass({
    getInitialState () {
        return {
            check: true,
            selectedIndex: 0,
            inputValue: 50
        };
    },
    updateSetting (name) {
        return value => {
            console.log('saving:', name, value);
            this.setState({[name]: value});
        };
    },
    save () {
        console.log(this.state);
    },
    render () {
        const url = "https://s-media-cache-ak0.pinimg.com/736x/89/aa/35/89aa35dbf42e2abd5a9b8082ebc4a3c3.jpg";
        // console.log(this.state);
        return (
            <UI.Screen title="Testing" subtext="WOAH" scrollable={true}>
                {/*<UI.Button text="Plain Button" />
                <UI.Button text="Raised Button" raised={true} />
                <UI.IconButton icon="ion-home" />
                <UI.IconButton icon="ion-home" raised={true} />
                <UI.Card>
                    Spaced content?
                </UI.Card>
                <UI.RangeInput min={0} max={100} value={this.state.inputValue} onChange={inputValue => this.setState({inputValue})} />
                <UI.RadioGroup selectedIndex={this.state.selectedIndex} onChange={this.updateSetting('selectedIndex')}>
                    <UI.Item value={100} height={150}>
                        <UI.Image source="https://s-media-cache-ak0.pinimg.com/736x/89/aa/35/89aa35dbf42e2abd5a9b8082ebc4a3c3.jpg" height={150} />
                    </UI.Item>
                    <UI.Item value={200} height={40}>Some Text</UI.Item>
                </UI.RadioGroup>
                <UI.Checkbox checked={this.state.check} label="Checkbox?" onChange={this.updateSetting('check')} />
                <UI.Checkbox checked={this.state.check} label="Checkbox?" onChange={this.updateSetting('check')} checkSide="right" />
                <UI.Checkbox checked={this.state.check} label="Favourite" onChange={this.updateSetting('check')} onIcon="ion-android-star" offIcon="ion-android-star-outline" />*/}
                <UI.Image source={url} height={150} />
                <UI.Image source={url} height={150} display={{type: 'clip'}} />
                <UI.Image source={url} height={150} display={{fill: {width: '100%', height: '100%'}}} />

                <UI.Grid colCount={4} rowCount={3} height="100%">
                    <UI.Image source={url} height={150} />
                    <UI.Image source={url} height={150} />
                    <UI.Image source={url} height={150} />
                    <UI.Image source={url} height={150} />
                    <UI.Image source={url} height={150} />
                    <UI.Image source={url} height={150} />
                    <UI.Image source={url} height={150} />
                    <UI.Image source={url} height={150} />
                    <UI.Image source={url} height={150} />
                    <UI.Image source={url} height={150} />
                    <UI.Image source={url} height={150} />
                </UI.Grid>

                <UI.Split.Vertical boundaries={[100, -200, '90%']} height="100%">
                    <UI.Image source={url} height="100%" />
                    <UI.Image source={url} height="100%" />
                    <UI.Image source={url} height="100%" />
                    <UI.Image source={url} height="100%" />
                </UI.Split.Vertical>

                <UI.Split.Horizontal dimensions={['25%', '10%', '40%', '25%']} height="100%">
                    <UI.Image source={url} height="100%" />
                    <UI.Image source={url} height="100%" />
                    <UI.Image source={url} height="100%" />
                    <UI.Image source={url} height="100%" />
                </UI.Split.Horizontal>
            </UI.Screen>
        );
    }
});

App.start(
    <Route>
        <Route path="/" component={Main} />
    </Route>
);
