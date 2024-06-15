const showToast = (message, duration = 3000) => {
    // 创建一个新的div元素
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.top = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.padding = '10px 20px';
    toast.style.background = '#333';
    toast.style.color = '#fff';
    toast.style.borderRadius = '5px';
    toast.style.zIndex = '9999';
    toast.style.opacity = '0.9';

    // 将toast添加到body中
    document.body.appendChild(toast);

    // 设置定时器，在指定时间后移除toast
    setTimeout(() => {
        document.body.removeChild(toast);
    }, duration);
}