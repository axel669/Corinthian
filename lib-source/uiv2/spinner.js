import Image from "lib-source/uiv2/Image";
import SpinnerDataURL from "lib-source/data-uri/load-spinner.gif.source";

const Spinner = ({size}) => <Image width={size} height={size} source={SpinnerDataURL} />;

export default Spinner;
