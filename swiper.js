const getStyle = (obj, attr) => {
    if (obj.currentStyle) {
        return obj.currentStyle[attr]
    }
    return document.defaultView.getComputedStyle(obj, null)[attr]
}

const swiper = (swiperNode, options) => {
    if (!swiperNode || !swiperNode.children.length) return
    let sx
    let sy
    let offsetX
    let offsetY
    let lock = 0
    let hasmoved = 0
    let currentOffsetX = 0
    let pagination = false
    const pagiItem = "<span class='swiper-pagination-bullet'></span>"
    const pagiItemAct = "<span class='swiper-pagination-bullet swiper-pagination-bullet-active'></span>"
    if (options) {
        pagination = options.pagination
    }
    const swiperItems = swiperNode.children
    const eleOuterWidth = swiperItems[0].offsetWidth + parseInt(getStyle(swiperItems[0], "marginRight"), 10)
    const totalWidth = (eleOuterWidth * swiperItems.length) - swiperNode.offsetWidth
    const touchstartHandle = e => {
        const touch = e.targetTouches[0]
        const x = touch.pageX
        const y = touch.pageY
        sx = x
        sy = y
        lock = 0
        hasmoved = 0
    }
    const touchmoveHandle = e => {
        if (lock) return
        const touch = e.targetTouches[0]
        const x = touch.pageX
        const y = touch.pageY
        offsetX = x - sx
        offsetY = y - sy
        if (hasmoved || Math.abs(offsetY) < Math.abs(offsetX)) {
            hasmoved = 1
            e.preventDefault()
            e.stopPropagation()
        } else {
            lock = 1
            return
        }
        swiperNode.style.cssText = `transition-duration: 0ms; transform: translate3d(${offsetX + currentOffsetX}px, 0px, 0px);`
    }
    const touchendhandle = e => {
        if (lock || !hasmoved) return
        // e.preventDefault()
        e.stopPropagation()
        let curItemIndex
        currentOffsetX += offsetX
        curItemIndex = currentOffsetX / eleOuterWidth
        curItemIndex = offsetX > 0 ? curItemIndex + 0.4 : curItemIndex - 0.4
        curItemIndex = Math.round(curItemIndex)
        if (
            currentOffsetX > 0
            || swiperItems.length === 1
            || totalWidth <= 0
        ) {
            currentOffsetX = 0
            curItemIndex = 0
        } else if (
            Math.abs(currentOffsetX) > totalWidth
            || Math.abs(curItemIndex) >= swiperItems.length - 1
        ) {
            currentOffsetX = -Math.abs(totalWidth)
            curItemIndex = -swiperItems.length + 1
        } else {
            currentOffsetX = curItemIndex * eleOuterWidth
        }

        if (pagination) {
            let pagiInner = ""
            for (let i = 0; i < pagination.children.length; i += 1) {
                pagiInner += (i !== Math.abs(curItemIndex) && pagiItem) || pagiItemAct
            }
            pagination.innerHTML = pagiInner
        }
        swiperNode.style.cssText = `transition-duration: 300ms; transform: translate3d(${currentOffsetX}px, 0px, 0px);`
    }
    if (pagination) {
        let pagiInner = ""
        for (let i = 0; i < swiperItems.length; i += 1) {
            pagiInner += (i && pagiItem) || pagiItemAct
        }
        pagination.innerHTML = pagiInner
    }
    if (options && options.unSwipe) {
        swiperNode.removeEventListener("touchstart", touchstartHandle)
        swiperNode.removeEventListener("touchmove", touchmoveHandle)
        swiperNode.removeEventListener("touchend", touchendhandle)
    } else {
        swiperNode.addEventListener("touchstart", touchstartHandle)
        swiperNode.addEventListener("touchmove", touchmoveHandle)
        swiperNode.addEventListener("touchend", touchendhandle)
    }
}

export default swiper
