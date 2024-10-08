/*!
 * FilePondPluginFileValidateType 1.2.9
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const plugin = ({ addFilter, utils }) => {
  const {
    Type,
    isString,
    replaceInString,
    guesstimateMimeType,
    getExtensionFromFilename,
    getFilenameFromURL
  } = utils;
  const mimeTypeMatchesWildCard = (mimeType, wildcard) => {
    const mimeTypeGroup = (/^[^/]+/.exec(mimeType) || []).pop();
    const wildcardGroup = wildcard.slice(0, -2);
    return mimeTypeGroup === wildcardGroup;
  };
  const isValidMimeType = (acceptedTypes, userInputType) => acceptedTypes.some((acceptedType) => {
    if (/\*$/.test(acceptedType)) {
      return mimeTypeMatchesWildCard(userInputType, acceptedType);
    }
    return acceptedType === userInputType;
  });
  const getItemType = (item) => {
    let type = "";
    if (isString(item)) {
      const filename = getFilenameFromURL(item);
      const extension = getExtensionFromFilename(filename);
      if (extension) {
        type = guesstimateMimeType(extension);
      }
    } else {
      type = item.type;
    }
    return type;
  };
  const validateFile = (item, acceptedFileTypes, typeDetector) => {
    if (acceptedFileTypes.length === 0) {
      return true;
    }
    const type = getItemType(item);
    if (!typeDetector) {
      return isValidMimeType(acceptedFileTypes, type);
    }
    return new Promise((resolve, reject) => {
      typeDetector(item, type).then((detectedType) => {
        if (isValidMimeType(acceptedFileTypes, detectedType)) {
          resolve();
        } else {
          reject();
        }
      }).catch(reject);
    });
  };
  const applyMimeTypeMap = (map) => (acceptedFileType) => map[acceptedFileType] === null ? false : map[acceptedFileType] || acceptedFileType;
  addFilter(
    "SET_ATTRIBUTE_TO_OPTION_MAP",
    (map) => Object.assign(map, {
      accept: "acceptedFileTypes"
    })
  );
  addFilter("ALLOW_HOPPER_ITEM", (file, { query }) => {
    if (!query("GET_ALLOW_FILE_TYPE_VALIDATION")) {
      return true;
    }
    return validateFile(file, query("GET_ACCEPTED_FILE_TYPES"));
  });
  addFilter(
    "LOAD_FILE",
    (file, { query }) => new Promise((resolve, reject) => {
      if (!query("GET_ALLOW_FILE_TYPE_VALIDATION")) {
        resolve(file);
        return;
      }
      const acceptedFileTypes = query("GET_ACCEPTED_FILE_TYPES");
      const typeDetector = query("GET_FILE_VALIDATE_TYPE_DETECT_TYPE");
      const validationResult = validateFile(file, acceptedFileTypes, typeDetector);
      const handleRejection = () => {
        const acceptedFileTypesMapped = acceptedFileTypes.map(
          applyMimeTypeMap(
            query("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP")
          )
        ).filter((label) => label !== false);
        const acceptedFileTypesMappedUnique = acceptedFileTypesMapped.filter(
          (item, index) => acceptedFileTypesMapped.indexOf(item) === index
        );
        reject({
          status: {
            main: query("GET_LABEL_FILE_TYPE_NOT_ALLOWED"),
            sub: replaceInString(
              query("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES"),
              {
                allTypes: acceptedFileTypesMappedUnique.join(", "),
                allButLastType: acceptedFileTypesMappedUnique.slice(0, -1).join(", "),
                lastType: acceptedFileTypesMappedUnique[acceptedFileTypesMappedUnique.length - 1]
              }
            )
          }
        });
      };
      if (typeof validationResult === "boolean") {
        if (!validationResult) {
          return handleRejection();
        }
        return resolve(file);
      }
      validationResult.then(() => {
        resolve(file);
      }).catch(handleRejection);
    })
  );
  return {
    // default options
    options: {
      // Enable or disable file type validation
      allowFileTypeValidation: [true, Type.BOOLEAN],
      // What file types to accept
      acceptedFileTypes: [[], Type.ARRAY],
      // - must be comma separated
      // - mime types: image/png, image/jpeg, image/gif
      // - extensions: .png, .jpg, .jpeg ( not enabled yet )
      // - wildcards: image/*
      // label to show when a type is not allowed
      labelFileTypeNotAllowed: ["File is of invalid type", Type.STRING],
      // nicer label
      fileValidateTypeLabelExpectedTypes: [
        "Expects {allButLastType} or {lastType}",
        Type.STRING
      ],
      // map mime types to extensions
      fileValidateTypeLabelExpectedTypesMap: [{}, Type.OBJECT],
      // Custom function to detect type of file
      fileValidateTypeDetectType: [null, Type.FUNCTION]
    }
  };
};
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
if (isBrowser) {
  document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", { detail: plugin }));
}
export {
  plugin as default
};
