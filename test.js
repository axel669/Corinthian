let Demo = React.createClass({
    render () {
        return <UI.Screen scrollable={true}>
            <UI.Card>
                <UI.Button style={{height: 100}} text={<span>LOL<br />TEST</span>} />
                <UI.TextInput icon="ion-email" iconStyle={{color: 'teal'}} fillWidth="80%" />
                <div style={{width: 100, height: 100, border: '1px solid black'}}>
                    <UI.Button text="woah" fillContainer={true} />
                </div>
                {factotum.range(10, n => <UI.Image source="adriana.jpg" width="100%" height={100} />)}
            </UI.Card>
        </UI.Screen>
    }
});

App.start(<ReactRouter.Route handler={Demo} />);
