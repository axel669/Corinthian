import React from 'react';

import Touchable from "lib-source/ui/touchable.js";

import Button from "lib-source/ui/button.js";
import ImageButton from "lib-source/ui/imagebutton.js";
import IconButton from "lib-source/ui/iconbutton.js";

import Image from "lib-source/ui/image.js";
import Spinner from "lib-source/ui/spinner.js";

import Checkbox from "lib-source/ui/checkbox.js";
import RadioGroup from "lib-source/ui/radio.js";

import TextInput from "lib-source/ui/textinput.js";
import Switch from "lib-source/ui/switch.js";
import RangeInput from "lib-source/ui/rangeinput.js";
import Combobox from "lib-source/ui/combobox.js";

import ProgressBar from "lib-source/ui/progressbar.js";

import Card from "lib-source/ui/card.js";
import Screen from "lib-source/ui/screen.js";
import ScrollContainer from "lib-source/ui/scrollcontainer.js";

import Grid from "lib-source/ui/grid.js";
import Flexbox from "lib-source/ui/flexbox.js";
import Split from "lib-source/ui/split.js";
import CenterContent from "lib-source/ui/centercontent.js";
import Form from "lib-source/ui/form.js";
import Divider from "lib-source/ui/divider.js";
import PinBoard from "lib-source/ui/pinboard.js";

// React.initializeTouchEvents(true);

export default Object.freeze({
    Touchable,
    Button,
    ImageButton,
    IconButton,

    Image,
    Spinner,

    Checkbox,
    RadioGroup,
    TextInput,
    Switch,
    RangeInput,
    Combobox,

    ProgressBar,

    Card,
    ScrollContainer,

    Screen,
    Grid,
    Flexbox,
    Split,
    CenterContent,
    Form,
    Divider,
    PinBoard,

    Item: props => null,
    Option: props => null,
    Pin: props => null
});
