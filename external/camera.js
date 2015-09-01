var appImage;

appImage = (function () {
    var camera;
    var sourceType;
    var destType;

    var fromDevice;
    var fromCamera;

    camera = navigator.camera;
    sourceType = camera.PictureSourceType;
    destType = camera.DestinationType;

    fromDevice = function () {
        return fc.promise(
            function (resolve, reject) {
                camera.getPicture(
                    function (uri) {
                        if (uri.search("com.android") !== -1) {
                            uri = "content://media/external/images/media/" + uri.split("%3A")[1];
                        }
                        fs.resolveURL(uri).then(resolve);
                    },
                    reject,
                    {
                        quality: 100,
                        destinationType: destType.NATIVE_URI,
                        sourceType: sourceType.PHOTOLIBRARY,
                        correctOrientation: false
                    }
                );
            }
        );
    };

    fromCamera = function (options) {
        var savePhoto;

        options = options || {};
        savePhoto = options.hasOwnProperty("savePhoto") === true ? options.savePhoto : true;

        return fc.promise(
            function (resolve, reject) {
                camera.getPicture(
                    function (uri) {
                        fs.resolveURL(uri).then(resolve);
                    },
                    reject,
                    {
                        quality: 100,
                        destinationType: destType.FILE_URI,
                        sourceType: sourceType.CAMERA,
                        correctOrientation: true,
                        saveToPhotoAlbum: savePhoto
                    }
                );
            }
        );
    };

    return {
        fromDevice: fromDevice,
        fromCamera: fromCamera
    };
})();
