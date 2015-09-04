let camera = navigator.camera;
if (navigator.hasOwnProperty('camera') === false) {
    camera = {
        PictureSourceType: {},
        DestinationType: {},
        EncodingType: {}
    };
}
let sourceType = camera.PictureSourceType;
let destType = camera.DestinationType;

let Picture = {
    fromDevice () {
        return new Promise(
            (resolve, reject) => {
                camera.getPicture(
                    async uri => {
                        if (uri.search("com.android") !== -1) {
                            uri = "content://media/external/images/media/" + uri.split("%3A")[1];
                        }

                        resolve(await fs.resolveURL(uri));
                    },
                    () => resolve(null),
                    {
                        quality: 100,
                        destinationType: destType.FILE_URI,
                        sourceType: sourceType.PHOTOLIBRARY,
                        correctOrientation: false
                    }
                );
            }
        );
    },
    fromCamera () {
        return new Promise(
            (resolve, reject) => {
                camera.getPicture(
                    async uri => resolve(await fs.resolveURL(uri)),
                    () => resolve(null),
                    {
                        quality: 100,
                        destinationType: destType.FILE_URI,
                        sourceType: sourceType.CAMERA,
                        encodingType: Camera.EncodingType.JPEG,
                        targetWidth: 720,
                        correctOrientation: true,
                        saveToPhotoAlbum: true
                    }
                )
            }
        );
    }
};

export {Picture};
