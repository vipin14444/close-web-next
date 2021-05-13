const CopyToClipboard = (msg) => {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = msg;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

export default CopyToClipboard;