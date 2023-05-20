function handleFileSelect() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
        const imgData = reader.result;
        displayImage(imgData);
    };
}

function displayImage(imgData) {
    const imgElement = document.createElement('img');
    imgElement.src = imgData;
    // 当图像加载完成时执行回调函数
    imgElement.onload = function () {
        // 创建一个 Canvas 元素
        var canvas = document.createElement("canvas");
        // 获取 Canvas 上下文
        var ctx = canvas.getContext("2d");
        // 设置 Canvas 元素的宽度和高度与图像相同
        canvas.width = imgElement.width;
        canvas.height = imgElement.height;
        // 在 Canvas 上绘制图像
        ctx.drawImage(imgElement, 0, 0);
        // 将 Canvas 转换为 .jpg 格式的数据链接
        var dataURL = canvas.toDataURL("image/png", 1.0);
        // 创建一个新的 img 元素，并将图像源设置为 .jpg 数据链接
        //var imgNew = document.createElement("img");
        var imgNew = document.getElementById("image");
        imgNew.src = dataURL;
        imgNew.alt = "转换成功";
        // 将新的 img 元素添加到页面中
        console.log(document.getElementById("image-container").append(imgNew));
    };
}
