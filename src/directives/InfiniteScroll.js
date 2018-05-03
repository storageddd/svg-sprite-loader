function callback(el, binding) {
    let params = binding.value;
    if (params.isLoadDisabled) return;

    let windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let documentHeight = document.documentElement.getBoundingClientRect().height;
    let elementHeight = el.getBoundingClientRect().height;
    let elementOffsetTop = el.getBoundingClientRect().top;
    let elementBottomPosition = elementHeight + elementOffsetTop;

    if (
        elementHeight && Math.abs(elementBottomPosition - windowHeight) <= 1 ||
        elementHeight && elementBottomPosition === windowHeight ||
        elementHeight && elementBottomPosition < windowHeight && documentHeight >= elementHeight + Math.abs(elementOffsetTop)
    ) {
        params.callback();
    }
}

let callbackListener = null;

export default {
    bind: (el, binding) => {
        callbackListener = () => {
          return callback(el, binding);
        };

        window.addEventListener('scroll', callbackListener);
        window.addEventListener('resize', callbackListener);
    },
    componentUpdated: (el, binding) => {
        callback(el, binding);
    },
    unbind: () => {
        window.removeEventListener('scroll', callbackListener);
        window.removeEventListener('resize', callbackListener);
    }
}