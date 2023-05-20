function download() {
    const canvas = document.createElement('canvas');
    const image = document.getElementById('image');

    canvas.width = image.width;
    canvas.height = image.height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);

    const link = document.createElement('a');

    link.download = 'image.jpeg';
    link.href = canvas.toDataURL('image/jpg', 0.8);
    link.click();
}
